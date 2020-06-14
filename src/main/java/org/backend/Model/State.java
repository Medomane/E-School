package org.backend.Model;

import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotNull
    private boolean state;
    private String description;
    @CreatedDate
    private Date date;

    @ManyToOne
    @JoinColumn(name = "classroomId")
    private Classroom classroom;

    @ManyToOne
    @JoinColumn(name = "toolId")
    private Tool tool;
}
