package fi.exadeci.taskmanager.controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import fi.exadeci.taskmanager.dto.TopicJSON;
import fi.exadeci.taskmanager.service.MenuService;
import fi.exadeci.taskmanager.service.TopicService;

@CrossOrigin
@Controller
public class RestController {

	private static final Logger LOG = LoggerFactory.getLogger(RestController.class);
	
	@Autowired
	private TopicService service;
	
	@Autowired
	private MenuService menuService;
	
	
	@RequestMapping(value = "/api/v1/topics", method = RequestMethod.GET)
	public @ResponseBody List<TopicJSON> getTopicList() throws Exception {
		
		LOG.info("/api/v1/topics");

		return service.list();
	}

	   @RequestMapping(value = "/api/v1/menu", method = RequestMethod.GET)
	    public @ResponseBody Object getMenu() throws Exception {
	        
	        LOG.info("/api/v1/menu");

	        return menuService.getMenubar();
	    }

}
