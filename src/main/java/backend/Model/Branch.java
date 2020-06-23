package backend.Model;

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
    private List<Module> modules;

    @OneToMany(mappedBy="branch")
    private List<Student> students;

    @ManyToOne
    private Department department ;
}
