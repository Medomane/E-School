package org.backend.Repository;

import org.backend.Model.Transcript;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface TranscriptRepository extends JpaRepository<Transcript,Long> {
}
