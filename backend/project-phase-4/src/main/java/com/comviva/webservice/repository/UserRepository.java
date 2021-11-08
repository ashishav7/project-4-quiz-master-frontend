package com.comviva.webservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.comviva.webservice.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}

