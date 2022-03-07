package fi.exadeci.taskmanager.service;

import java.util.List;
import javax.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import fi.exadeci.taskmanager.dto.TopicJSON;

@Service
public class InitializationService {

  private static final Logger LOG = LoggerFactory.getLogger(InitializationService.class);

  @Value("${fi.exadeci.taskmanager.initialize}")
  private boolean initializeDatabase;

  @Value("classpath:testdata/topics.json")
  Resource topicsFile;
  
  @Autowired
  @Qualifier("transactionManager")
  protected PlatformTransactionManager txManager;
  
  @Autowired
  private TopicService service;

  
  @PostConstruct
  @Transactional(readOnly = false)
  public void initialize() {
    if(initializeDatabase) {
      LOG.info("Initializing database");
      TransactionTemplate tmpl = new TransactionTemplate(txManager);
      tmpl.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus status) {
          doInitialization();
        }
      });
      LOG.info("Initializing finished");

    }
  }
  
  
  private void doInitialization() {
    try {
      readTopics();
    } catch (Exception ex) {
      LOG.error("Error in initialization", ex);
    }
  }
  
  private void readTopics() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    List<TopicJSON> topics = mapper.readValue(topicsFile.getInputStream(), new TypeReference<List<TopicJSON>>() {});
    for(TopicJSON topic : topics) {
      service.insert(topic);
    }
  }

}
