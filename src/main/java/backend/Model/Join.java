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
public class Join {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotNull
    private Date date ;
    @NotNull
    private String role;

    @ManyToOne
    @JoinColumn(name = "studentId")
    private Student student ;

    @ManyToOne
    @JoinColumn(name = "clubId")
    private Club club ;
}
