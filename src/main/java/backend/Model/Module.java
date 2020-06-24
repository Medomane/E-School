package backend.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<ModuleElement> moduleElements;

    @ManyToOne
    private Semester semester;
}
