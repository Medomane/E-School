package backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Transcript {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @CreatedDate
    private Date date;

    @OneToMany(mappedBy="transcript")
    private List<Subject> subjects;

    @ManyToOne
    @JoinColumn(name = "studentId")
    private Student student ;
}
