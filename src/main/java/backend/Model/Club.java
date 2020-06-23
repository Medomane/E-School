package backend.Model;

import lombok.*;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorValue("club")
public class Club extends Object {
    @OneToMany(mappedBy="club")
    private List<Adhere> adheres;
}
