package backend.Model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorValue("department")
public class Department extends Object{
    @OneToMany(mappedBy="department")
    private List<Branch> branches;

    @ManyToOne
    private Establishment establishment ;
}
