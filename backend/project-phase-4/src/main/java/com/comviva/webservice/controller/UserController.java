package com.comviva.webservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comviva.webservice.model.User;
import com.comviva.webservice.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository userRepo;
	
	@GetMapping("/users")
	public List<User> getUserInfo() {
		return userRepo.findAll();
	}
	
	@PostMapping("/users")
	public User addUserInfo(@RequestBody User user) {
		return userRepo.save(user);
	}
}
