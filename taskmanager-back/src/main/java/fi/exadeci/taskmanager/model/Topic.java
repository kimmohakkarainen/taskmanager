package fi.exadeci.taskmanager.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;

@Entity @Getter
public class Topic {

  @Id @GeneratedValue
  private long topicId;
  
  @Column
  private String title;
  
  @OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
  private List<Topic> subTopics;
  
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name="parentId", updatable=false, nullable=true)
  private Topic parent;

  public static Topic create(String title, Topic parent) {
    Topic topic = new Topic();
    topic.title = title;
    topic.parent = parent;
    return topic;
  }
  
}
