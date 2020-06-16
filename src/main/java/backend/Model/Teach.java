package backend.Model;

import com.sun.istack.NotNull;
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

    @ManyToOne
    @JoinColumn(name = "professorId")
    private Professor professor ;

    @ManyToOne
    @JoinColumn(name = "subjectId")
    private Subject subject ;
}
