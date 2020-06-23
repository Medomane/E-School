package backend.Model;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("student")
public class Student extends Person {
    @NotNull
    private String cne;

    @ManyToOne
    private Branch branch ;
}
