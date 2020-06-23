package backend.Model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorValue("module")
public class Module extends Object {
    @OneToMany(mappedBy="module")
    private List<ModuleElement> moduleElements;

    @ManyToOne
    private Branch branch ;
}
