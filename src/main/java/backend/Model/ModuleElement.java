package backend.Model;


import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @NotNull
    private int percent ;

    @ManyToOne
    private Module module ;

    @OneToMany(mappedBy="moduleElement")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Teach> teaches;
}
