package com.example.User.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity

//@Data revient à avoir des annotations implicites @Getter, @Setter, @ToString, @EqualsAndHashCode et @RequiredArgsConstructor sur la classe
@Data
@AllArgsConstructor

@Table(name = "USERS")
public class User {

    //Generation et incrementation automatique des ID
    @Id
    @SequenceGenerator(
            name = "userSequenceIncrementation",
            sequenceName = "user_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "userSequenceIncrementation"
    )
    private Integer id;


    @Column(name = "Nom")
    private String Nom;

    @Column(name = "Prenom")
    private String Prenom;

    @Column(name = "Adresse")
    private String Adresse;

    @Column(name = "Role")
    private String Role;

    public User(){

    }
}
