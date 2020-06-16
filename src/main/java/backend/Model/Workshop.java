package backend.Model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("workshop")
public class Workshop extends Classroom {

}