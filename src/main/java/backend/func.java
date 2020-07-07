package backend;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class func {
    public static String basePath = System.getProperty("user.home")+"/e-school";
    public static String imagesPath = basePath+"/images";
    public static void checkFiles(String type) throws IOException {
        if(Files.notExists(Paths.get(func.basePath))){
            Files.createDirectory(Paths.get(func.basePath));
            Files.createDirectory(Paths.get(func.imagesPath));
        }
        if(Files.notExists(Paths.get(func.imagesPath))) Files.createDirectory(Paths.get(func.imagesPath));
        if(type != null && Files.notExists(Paths.get(func.imagesPath+"/"+type))) Files.createDirectory(Paths.get(func.imagesPath+"/"+type));
    }
}
