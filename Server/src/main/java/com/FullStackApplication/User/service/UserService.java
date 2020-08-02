/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */

package com.FullStackApplication.User.service;

import com.FullStackApplication.User.model.User;
import com.FullStackApplication.User.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor // Lombok to create the Required Args Constructor
@Service // Instruct Spring Boot that this is the Service layer
public class UserService {

    // Import Methods from other Class
    private final UserRepository userRepository; // Class from which methods are being imported

    // Get all users


    public List<User> getAllUsers() { // Generate function
        List<User> users = new ArrayList<>();
        userRepository.findAll() // Call JPA function via the Repository
                .forEach(users::add);
        return users;  //return list of users
    }
/*
* compare these 2 codes to check wich one is working correct
* */

//    public List<User> getAllUsers() { // Generate function
//        // Call JPA function via the Repository
//        return new ArrayList<>(userRepository.findAll());  //return list of users
//    }

    // Get user by ID
    public Optional<User> getUserById(Long id) { // Generate function
        return userRepository.findById(id); // Call JPA function via the Repository
    }

    // Update user
    public void updateUser(User user) { // Generate function
        userRepository.save(user); // Call JPA function via the Repository
    }

    // Delete user
    public void deleteUser(Long id) { // Generate function
        userRepository.deleteById(id); // Call JPA function via the Repository
    }

    // Find users by Email
    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    // Back-end updatePassword in progress
    public void updatePassword(String updatedPassword) {
        userRepository.findByEmail(updatedPassword);
    }
}
