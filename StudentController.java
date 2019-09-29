package com.claim.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Student;
import com.claim.repository.StudentRepository;

@CrossOrigin //only do this at Claim otherwise you'll get hacked and fired
@RestController 
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	@RequestMapping(value="/submitStudentDetails",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	
	public void submitStudentDetails(@RequestBody Student student) {
		this.studentRepository.save(student);
		
	}
		
	@RequestMapping(value="findStudentById",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	
	@ResponseBody
	private ResponseEntity<Student>findStudentById(String email){
		Student student = this.studentRepository.findById(email).get();
		return new ResponseEntity<>(student, HttpStatus.OK);
	
	}
	@PostMapping(value="/login")
	@ResponseBody
	private ResponseEntity<Student>login(@RequestBody Student student) {
		Optional<Student> databaseStudent = this.studentRepository.findById(student.getEmail());
		if (!databaseStudent.isPresent()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}else if (student.getPassword().equals(databaseStudent.get().getPassword())) {
			return new ResponseEntity<>(databaseStudent.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	@GetMapping(value="/findListOfStudents")
	@ResponseBody
	private ResponseEntity<List<Student>>findListOfStudents(@RequestBody Student student){
		List<Student> students = this.studentRepository.findAll();
		return new ResponseEntity<>(students, HttpStatus.OK);
	}

	}
