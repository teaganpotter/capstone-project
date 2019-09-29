package com.claim.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Agency;
import com.claim.repository.AgencyRepository;

@CrossOrigin
@RestController 
public class AgencyController {
	
	@Autowired
	private AgencyRepository agencyRepository;
	
	
	@RequestMapping(value="getAgencies",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	
	@ResponseBody
	private ResponseEntity<ArrayList<Agency>>getAgencies(){
		ArrayList<Agency> agencies = (ArrayList<Agency>) this.agencyRepository.findAll();
		System.out.println(agencies);
		return new ResponseEntity<>(agencies, HttpStatus.OK);
	}
	@RequestMapping(value="getAgencyById",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	
	@ResponseBody
	private ResponseEntity<Agency>getAgencyById(Long id){
		Agency agency= this.agencyRepository.findById(id).get();
		return new ResponseEntity<>(agency, HttpStatus.OK);
	}	
	
	@RequestMapping(value="getAgenciesByItemsAccepted",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	private ResponseEntity<List<Agency>>getAgenciesByItemsAccepted(@RequestParam String itemsAccepted){
		List<Agency> agencies = (List<Agency>) this.agencyRepository.getAgenciesByItemsAccepted(itemsAccepted);
		System.out.println(agencies);
		return new ResponseEntity<>(agencies, HttpStatus.OK);
	}
	
	
	@RequestMapping(value="addAgency",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
		
	@ResponseBody
	private ResponseEntity<Agency>addAgency(@RequestBody Agency agency){
		agency = this.agencyRepository.save(agency);
		return new ResponseEntity<>(agency, HttpStatus.OK);
	
	}
		
	
	
}
