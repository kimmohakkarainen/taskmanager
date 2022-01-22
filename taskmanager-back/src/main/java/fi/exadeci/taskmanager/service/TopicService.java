package fi.exadeci.taskmanager.service;

import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import fi.exadeci.taskmanager.dto.TopicJSON;
import fi.exadeci.taskmanager.model.Topic;
import fi.exadeci.taskmanager.repository.TopicRepository;

@Service
public class TopicService {

  private Logger logger = LoggerFactory.getLogger(TopicService.class);

  @Autowired
  private TopicRepository tRepo;

  @Transactional(readOnly = true)
  public List<TopicJSON> list() {
    List<TopicJSON> list = new ArrayList<>();
    for(Topic topic : tRepo.findAll()) {
      if(topic.getParent() == null) {
        list.add(recurse(topic));

      }
    }
    return list;
  }


  private TopicJSON recurse(Topic topic) {
    TopicJSON json = TopicJSON.create(topic);
    for(Topic sub : topic.getSubTopics()) {
      json.addSubTopic(recurse(sub));
    }
    return json;
  }

  @Transactional(readOnly = false)
  public void insert(TopicJSON json) {

    Topic topic = Topic.create(json.getTitle(), null);
    tRepo.save(topic);
    insert(json, topic);

  }

  private void insert(TopicJSON json, Topic parent) {
    if(json.getSubTopics() != null) {
      for(TopicJSON sub : json.getSubTopics()) {
        Topic subtopic = Topic.create(sub.getTitle(), parent);
        tRepo.save(subtopic);
        insert(sub, subtopic);
      }
    }

  }

}
