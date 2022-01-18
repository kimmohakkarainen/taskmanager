package fi.esalary.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
public class RestController {

	private static final Logger LOG = LoggerFactory.getLogger(RestController.class);
	
	@RequestMapping(value = "/rest/apiv1/{date}", method = RequestMethod.GET)
	public @ResponseBody String getSummary(@PathVariable String date) throws Exception {
		
		LOG.info("/rest/apiv1/"+date);

		return date;
	}
	
}
