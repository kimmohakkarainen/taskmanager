package fi.exadeci.taskmanager.repository;

import org.springframework.data.repository.CrudRepository;
import fi.exadeci.taskmanager.model.Topic;

public interface TopicRepository extends CrudRepository<Topic, Long> {

}
