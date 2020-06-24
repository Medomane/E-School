package backend.Model;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("professor")
public class Professor extends Person{
    @NotNull
    private String status;

    @OneToMany(mappedBy="professor")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Teach> teaches;
}
