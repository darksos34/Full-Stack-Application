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


    //Modified from here

    // modify this file to your own code

//    @Transactional // let's all statements be executed on readonly data
//    @Modifying // lets query  execute INSERT, UPDATE, DELETE and DDL queries
//    @Query("UPDATE User u SET u.password = :password WHERE u.id = :userId") // updates a user's password
//    void updatePassword(@Param("password") String password, @Param("userId") Long userId);

}
