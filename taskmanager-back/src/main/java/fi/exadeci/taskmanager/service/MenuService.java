package fi.exadeci.taskmanager.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import fi.exadeci.taskmanager.model.Topic;
import fi.exadeci.taskmanager.repository.TopicRepository;
import lombok.Getter;

@Service
public class MenuService {
 
  private Logger logger = LoggerFactory.getLogger(MenuService.class);

  @Autowired
  private TopicRepository tRepo;
 
  public Object getMenubar() {
    Map<Long, MenuItemJSON> menubar = new HashMap<>();
    
    for(Topic topic : tRepo.findAll()) {
      
      if(topic.getParent() == null) {
        MenuItemJSON json = new MenuItemJSON();
        menubar.put(topic.getTopicId(), json);
        json.path = "/content/" + Long.toString(topic.getTopicId());
        json.title = topic.getTitle();
        json.sidebar = new ArrayList<>();
        for(Topic sub : topic.getSubTopics()) {
          MenuItemJSON subjson = new MenuItemJSON();
          json.sidebar.add(subjson);
          subjson.path = json.path + "/" + Long.toString(sub.getTopicId());
          subjson.title = sub.getTitle();
        }
       }
    }
    return menubar;
  }

  
  @Getter
  private static class MenuItemJSON {
    private String path;
    private String title;
    private String icon;
    @JsonInclude(Include.NON_NULL)
    private List<MenuItemJSON> sidebar;
  }
 
}
