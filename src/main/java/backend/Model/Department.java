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
@DiscriminatorValue("department")
public class Department extends Object{
    @OneToMany(mappedBy="department")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Branch> branches;

    @ManyToOne
    private Establishment establishment ;
}
