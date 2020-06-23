package backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

@Inheritance(strategy= InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn( name="type", discriminatorType= DiscriminatorType.STRING)
public abstract class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotNull
    private String firstName ;
    @NotNull
    private String lastName ;
    @NotNull
    private String cin ;
    private String apogee ;
    @NotNull
    private Gender gender ;
    @NotNull
    @Column(unique=true)
    private String email ;
    private String phone ;
    private String information ;
    @NotNull
    private String password;
    @NotNull
    private Role role;

    public void setPassword(String password){
        if(password.split("$").length >= 3) this.password = password;
        else this.password = new BCryptPasswordEncoder().encode(password);
    }

    enum Gender {
        male, female
    }
    enum Role{
        admin,user
    }
}
