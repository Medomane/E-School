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
@DiscriminatorValue("establishment")
public class Establishment extends Object{
    @OneToMany(mappedBy="establishment")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Department> departments;

    @ManyToOne
    private University university ;
}
