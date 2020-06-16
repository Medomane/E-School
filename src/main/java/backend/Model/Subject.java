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
@DiscriminatorValue("subject")
public class Subject extends Object {
    @NotNull
    private int hours ;

    @ManyToOne
    @JoinColumn(name = "moduleId")
    private Module module ;

    @OneToMany(mappedBy="subject")
    private List<Teach> teaches;

    @OneToMany(mappedBy="subject")
    private List<Exam> exams;

    @ManyToOne
    @JoinColumn(name = "transcriptId")
    private Transcript transcript ;
}
