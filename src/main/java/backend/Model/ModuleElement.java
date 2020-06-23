package backend.Model;


import javax.validation.constraints.NotNull;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorValue("moduleElement")
public class ModuleElement extends Object {
    @NotNull
    private int duration ;

    @ManyToOne
    private Module module ;

    @OneToMany(mappedBy="moduleElement")
    private List<Teach> teaches;
}
