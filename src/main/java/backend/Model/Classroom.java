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
public abstract class Classroom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotNull
    private String num;
    @NotNull
    private int capacity;
    @NotNull
    private int width ;
    @NotNull
    private int height;
    private String location;

    @OneToMany(mappedBy = "classroom")
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "classroom")
    private List<Tool> tools;

    @OneToMany(mappedBy = "classroom")
    private List<State> states;

    @ManyToOne
    @JoinColumn(name = "establishmentId")
    private Establishment establishment;
}
