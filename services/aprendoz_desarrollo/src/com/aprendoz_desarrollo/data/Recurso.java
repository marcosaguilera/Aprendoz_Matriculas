
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Recurso
 *  06/18/2014 18:10:26
 * 
 */
public class Recurso {

    private Integer idRecurso;
    private String recurso;
    private String ubicacion;
    private String fileName;
    private Subtopico subtopico;
    private TipoRecurso tipoRecurso;

    public Recurso() {
    }

    public Recurso(Integer idRecurso, String recurso, String ubicacion, String fileName) {
        this.idRecurso = idRecurso;
        this.recurso = recurso;
        this.ubicacion = ubicacion;
        this.fileName = fileName;
    }

    public Recurso(Integer idRecurso, String recurso, String ubicacion, String fileName, Subtopico subtopico, TipoRecurso tipoRecurso) {
        this.idRecurso = idRecurso;
        this.recurso = recurso;
        this.ubicacion = ubicacion;
        this.fileName = fileName;
        this.subtopico = subtopico;
        this.tipoRecurso = tipoRecurso;
    }

    public Integer getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(Integer idRecurso) {
        this.idRecurso = idRecurso;
    }

    public String getRecurso() {
        return recurso;
    }

    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Subtopico getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(Subtopico subtopico) {
        this.subtopico = subtopico;
    }

    public TipoRecurso getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(TipoRecurso tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

}
