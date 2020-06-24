package backend.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@DiscriminatorValue("branch")
public class Branch extends Object {
    @OneToMany(mappedBy="branch")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Semester> semesters;

    @OneToMany(mappedBy="branch")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Student> students;

    @ManyToOne
    private Department department ;
}
