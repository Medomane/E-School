package backend.Model;

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
@DiscriminatorValue("establishment")
public class Establishment extends Object{
    @OneToMany(mappedBy="establishment")
    private List<Department> departments;

    @ManyToOne
    @JoinColumn(name = "universityId")
    private University university ;

    @OneToMany(mappedBy = "establishment")
    private List<Classroom> classrooms;
}
