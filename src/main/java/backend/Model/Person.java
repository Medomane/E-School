package backend.Model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

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
    @NotNull
    private String apogee ;
    @NotNull
    private Gender sex ;
    @NotNull
    private String email ;
    private String phone ;
    private String information ;
    @NotNull
    private String password;
    @NotNull
    private Role role;

    @OneToMany(mappedBy = "person")
    private List<Reservation> reservations;

}
enum Gender {
    MALE, FEMALE
}
enum Role{
    ADMIN,USER
}
