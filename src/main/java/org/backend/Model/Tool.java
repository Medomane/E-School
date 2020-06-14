package org.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorValue("tool")
public class Tool extends Object{
    private int number;

    @ManyToOne
    @JoinColumn(name = "classroomId")
    private Classroom classroom;

    @OneToMany(mappedBy = "tool")
    private List<State> states;
}
