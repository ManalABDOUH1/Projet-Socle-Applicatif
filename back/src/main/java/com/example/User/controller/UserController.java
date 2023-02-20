package com.example.User.controller;

import com.example.User.dao.User;
import com.example.User.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//les annotations utilisées

//RequestMapping utilisée pour mapper les requêtes Web
@RequestMapping("/api/users")
@RestController
@CrossOrigin

public class UserController {
    @Autowired
    UserRepository userRepository;

    //Afficher tous les utilisateurs avec findAll()
    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    //Afficher un utilisateur avec son ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Integer id) {
        User user = userRepository.findById(id)
                .orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(user);
        }
    }

    //Supprimer un utilisateur
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        userRepository.deleteById(id);
    }

    //Creer un nouveau utilisateur
    @PostMapping
    public User AddUser(@RequestBody User user){
        return userRepository.save(user);}
    //La méthode save() renvoie l'entité enregistrée, y compris le champ id mis à jour.


    //Modifier
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Integer id, @RequestBody User user) {
        User existe = userRepository.findById(id).orElse(null);
        if (existe != null) {
            existe.setNom(user.getNom());
            existe.setPrenom(user.getPrenom());
            existe.setAdresse(user.getAdresse());
            existe.setRole(user.getRole());
            return userRepository.save(existe);
        }
        return null;
    }



}