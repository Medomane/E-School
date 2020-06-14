package org.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Take {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private double mark;

    @ManyToOne
    @JoinColumn(name = "studentId")
    private Student student ;

    @ManyToOne
    @JoinColumn(name = "examId")
    private Exam exam ;
}
