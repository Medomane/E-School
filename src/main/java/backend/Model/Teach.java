package backend.Model;

import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Teach{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotNull
    private Date startAt ;
    @NotNull
    private Date endAt ;

    @ManyToOne
    private Professor professor ;

    @ManyToOne
    private ModuleElement moduleElement ;
}
