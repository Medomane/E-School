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
@DiscriminatorValue("university")
public class University extends Object{
    @OneToMany(mappedBy="university")
    private List<Establishment> establishments;
}
