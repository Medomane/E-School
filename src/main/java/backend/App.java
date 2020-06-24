package backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class App implements CommandLineRunner {
    /*@Autowired
    ProfessorRepository professorRepository;
    @Autowired
    ModuleElementRepository moduleElementRepository;
    @Autowired
    TeachRepository teachRepository;*/
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        /*SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy", Locale.FRENCH);
        simpleDateFormat.setLenient(false);

        List<Professor> professors = professorRepository.findAll();
        for(Professor p : professors){
            List<ModuleElement> moduleElements = moduleElementRepository.findAllById(getRandomElement());
            for(ModuleElement me:moduleElements){
                Teach t = new Teach();
                t.setProfessor(p);
                t.setModuleElement(me);
                t.setStartAt(simpleDateFormat.parse("25-12-2010"));
                t.setEndAt(simpleDateFormat.parse("25-06-2011"));
                teachRepository.save(t);
            }
        }*/
    }
    /*public List<Long> getRandomElement()
    {
        Random rand = new Random();
        List<Long> newList = new ArrayList<>();
        int totalItems = rand.nextInt(5);
        for (int i = 0; i < totalItems; i++) {
            Long randomIndex = (long) (rand.nextInt(42) + 96);
            newList.add(randomIndex);
        }
        return newList;
    }*/
}