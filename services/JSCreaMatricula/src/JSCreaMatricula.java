import com.aprendoz_desarrollo.*;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.*;
import org.hibernate.Session;
import org.hibernate.Query;
import org.hibernate.SQLQuery;

import java.util.ArrayList;
import java.util.List;

import java.io.*;
import java.util.*;
import java.text.DateFormat;
import java.lang.String;
import org.apache.log4j.Logger;


public class JSCreaMatricula extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
  
    public JSCreaMatricula() {
       super(INFO);
    }

    private Aprendoz_desarrollo conecta_Servicio(){
        Aprendoz_desarrollo servicio= (Aprendoz_desarrollo) RuntimeAccess.getInstance().getService(Aprendoz_desarrollo.class);
        return servicio;
        
    }
    
     public Integer proced_insertar_matricula_estd( String coment, Integer Pr_Id_Persona, Integer Pr_Id_Curso, Integer Pr_Id_Sy){
         
         
         log(INFO, "Codigo persona>> "+Pr_Id_Persona+" Codigo Curso>> "+Pr_Id_Curso+" Año escolar>> "+Pr_Id_Sy);
         Logger logger = Logger.getLogger("com.wavemaker"); 
         Aprendoz_desarrollo init_servicio= conecta_Servicio();
         
         System.out.println("inicia servicio");
            init_servicio.begin();
            System.out.println("Servicio Iniciado");
            Session ins_sesion = init_servicio.getDataServiceManager().getSession();
            System.out.println("Sesión Iniciada");
            Query q = ins_sesion.getNamedQuery("InsertaMatriculaEstudiante");
        try{
           
            


            System.out.println("Llamada al query nombrado");
            System.out.println("Nombre del query: "+q);
          // asignar los parámetros

            q.setParameter("M_Id_Persona",Pr_Id_Persona);
            q.setParameter("M_Id_Curso",Pr_Id_Curso);
            q.setParameter("M_Id_Sy",Pr_Id_Sy);
            q.setParameter("M_Co", coment);
            System.out.println("parámetros fijados");
            System.out.println("P_PERSONA: "+Pr_Id_Persona);
            System.out.println("P_CURSO: "+Pr_Id_Curso);
            System.out.println("P_SY: "+Pr_Id_Sy);
            System.out.println("Comentario: "+coment);
            

          // Integer resultado = q.list().size();
            
            q.list();
            System.out.println("Q.List Ok");
          // q.executeUpdate();  -- procedimiento no soportado por la version de HIBERNATE
            System.out.println("Ejecución del query 1");
            
           // Inicia query 2

            
            return 1;
        }
        
        catch(RuntimeException ex){
         System.out.println("Algo esta man!");
         init_servicio.rollback();
         throw ex;
        }
        finally{
        init_servicio.commit();
        }
    }  

}