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
@DiscriminatorValue("branch")
public class Branch extends Object {
    @OneToMany(mappedBy="branch")
    private List<Module> modules;

    @ManyToOne
    @JoinColumn(name = "departmentId")
    private Department department ;
}
