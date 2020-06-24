package backend.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@DiscriminatorValue("semester")
public class Semester extends Object {
    @OneToMany(mappedBy="semester")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Module> modules;

    @ManyToOne
    private Branch branch ;
}

