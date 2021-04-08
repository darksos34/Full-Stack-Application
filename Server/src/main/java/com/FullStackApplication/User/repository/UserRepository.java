/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */

package com.FullStackApplication.User.repository;

import com.FullStackApplication.User.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Instruct Spring Boot that this is the Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> getUserByUsername(String username); // Lookup provided username in the database

    Boolean existsByUsername(String username); // Check username existence in the database

    Boolean existsByEmail(String email); // Check email address existence in the database

    User findByEmail(String email);

}
