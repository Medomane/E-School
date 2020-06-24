package backend.Model;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("student")
public class Student extends Person {
    @NotNull
    private String cne;

    @ManyToOne
    private Branch branch ;

    @OneToMany(mappedBy="student")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Adhere> adheres;
}
