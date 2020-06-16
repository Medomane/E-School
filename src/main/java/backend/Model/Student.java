package backend.Model;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("student")
public class Student extends Person {
    @NotNull
    private String cne;

    @OneToMany(mappedBy="student")
    private List<Join> joins;

    @OneToMany(mappedBy="student")
    private List<Take> takes;

    @OneToMany(mappedBy="student")
    private List<Transcript> transcripts;

    @ManyToOne
    @JoinColumn(name = "sessionId")
    private Session session ;
}
