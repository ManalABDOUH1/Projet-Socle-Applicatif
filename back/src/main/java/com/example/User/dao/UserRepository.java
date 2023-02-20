package com.example.User.dao;

import org.springframework.data.jpa.repository.JpaRepository;


/*JpaRepository est une extension spécifique JPA de Repository.
Il contient une API pour les opérations CRUD de base.*/
public interface UserRepository extends JpaRepository<User, Integer> {

}
