package backend.Model;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("professor")
public class Professor extends Person{
    @NotNull
    private String status;
}
