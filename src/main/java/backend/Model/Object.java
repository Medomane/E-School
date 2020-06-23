package backend.Model;

import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Inheritance(strategy= InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn( name="type", discriminatorType= DiscriminatorType.STRING)
public abstract class Object {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotNull
    private String name ;
    @NotNull
    @Column(columnDefinition = "text")
    private String information ;
    @NotNull
    private String icon ;
    private String link ;
}
