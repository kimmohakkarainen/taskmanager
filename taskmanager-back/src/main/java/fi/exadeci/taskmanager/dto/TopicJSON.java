package fi.exadeci.taskmanager.dto;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import fi.exadeci.taskmanager.model.Topic;
import lombok.Getter;

@Getter
public class TopicJSON {

  private long topicId;
  
  private String title;
  
  @JsonInclude(Include.NON_NULL)
  private List<TopicJSON> subTopics;
  
  public static TopicJSON create(Topic topic) {
    TopicJSON json = new TopicJSON();
    json.topicId = topic.getTopicId();
    json.title = topic.getTitle();
    return json;
  }
  
  public void addSubTopic(TopicJSON sub) {
    if(this.subTopics == null) {
      this.subTopics = new ArrayList<>();
    }
    this.subTopics.add(sub);
  }
  
}
