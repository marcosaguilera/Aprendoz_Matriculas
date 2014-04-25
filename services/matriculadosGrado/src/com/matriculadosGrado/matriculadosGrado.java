package com.matriculadosGrado;

import com.*;
import com.aprendoz_desarrollo.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import java.net.URL;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.export.*;
import net.sf.jasperreports.engine.export.ooxml.*;
import net.sf.jasperreports.engine.util.*;
import net.sf.jasperreports.engine.fill.*;
import org.apache.poi.ss.usermodel.Font;
import java.io.*;
import java.util.*;

import javax.print.attribute.*;
import javax.print.attribute.standard.*;
import javax.print.*;


public class matriculadosGrado extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    public String getReport(Map parameters) throws Exception{

    try{
    Aprendoz_desarrollo service=(Aprendoz_desarrollo)RuntimeAccess.getInstance().getService(Aprendoz_desarrollo.class);
    service.begin();
    Session session=service.getDataServiceManager().getSession();
    
    String fileName=String.valueOf(parameters.get("file"));
    String typeDocument=String.valueOf(parameters.get("typeDoc"));
    System.out.println("nombre archivo: "+fileName);
    System.out.println("tipo documento: "+typeDocument);
    System.out.println("Parametros: "+parameters);
    URL fileUrl = this.getClass().getResource(fileName);
    System.out.println("RutaURL::: "+fileUrl);
    
    JasperReport report2 = (JasperReport) JRLoader.loadObject(fileUrl);
    System.out.println("cargador:: "+report2);
    JasperPrint jasperPrint =
    JasperFillManager.fillReport(report2,parameters,session.connection());
    System.out.println("Jasper::: "+jasperPrint);

    String pathWR=RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/ReportsApp/");
    System.out.println("Path::: "+pathWR);
  
    if(typeDocument.equals("PDF")){
    System.out.println("paso #1");
      fileName=fileName+".pdf";
      System.out.println("paso #2");
      JRPdfExporter exporter = new JRPdfExporter(); 
      System.out.println("paso #3");
      exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint); 
      System.out.println("paso #4");
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      System.out.println("salida pdf::: "+pathWR+"/"+fileName);
      System.out.println("paso #5");
      exporter.exportReport(); 
      System.out.println("paso #6");
      }
    
    else if (typeDocument.equals("DOCX")){
      fileName=fileName+".docx";
      System.out.println("paso #1");
      JRDocxExporter exporter = new JRDocxExporter(); 
      System.out.println("paso #2");
      exporter.setParameter(JRDocxExporterParameter.JASPER_PRINT, jasperPrint); 
      System.out.println("paso #3");
      exporter.setParameter(JRDocxExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);
      System.out.println("paso #4");
      exporter.setParameter(JRDocxExporterParameter.FLEXIBLE_ROW_HEIGHT, Boolean.TRUE);
      System.out.println("paso #5");
      exporter.exportReport(); 
      System.out.println("paso #6");
    }  
    else if(typeDocument.equals("XLS")){
      fileName=fileName+".xls";
      JRXlsExporter exporter = new JRXlsExporter(); 
      exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.exportReport(); 
    }
   
    else if(typeDocument.equals("TXT")){
      fileName=fileName+".txt";
      JRExporter exporter = new JRTextExporter();
      Integer pageHeight=new Integer(jasperPrint.getPageHeight()); 
      Integer pageWidth = new Integer(jasperPrint.getPageWidth());
      exporter.setParameter(JRTextExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.setParameter(JRTextExporterParameter.PAGE_WIDTH,pageWidth);
      exporter.setParameter(JRTextExporterParameter.PAGE_HEIGHT,pageHeight);
      exporter.setParameter(JRTextExporterParameter.CHARACTER_WIDTH,new Integer(11));
      exporter.setParameter(JRTextExporterParameter.CHARACTER_HEIGHT,new Integer(11));
      exporter.setParameter(
        JRTextExporterParameter.BETWEEN_PAGES_TEXT,
        new String("___________________________________________________________")
      );
     
      exporter.exportReport();
    }
    return "ReportsApp/"+fileName;
  
    }
    catch(Exception e){
      e.printStackTrace();
    return "";
    }
   
   }

}