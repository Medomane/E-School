package backend.Model;

import lombok.*;

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
    private University university ;
}
