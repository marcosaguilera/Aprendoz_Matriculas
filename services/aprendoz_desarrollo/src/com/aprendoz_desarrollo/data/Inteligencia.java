
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Inteligencia
 *  06/09/2014 17:06:45
 * 
 */
public class Inteligencia {

    private Integer idInteligencia;
    private String inteligencia;
    private Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_desarrollo.data.AprendizajesAsignaturas>();
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();

    public Inteligencia() {
    }

    public Inteligencia(Integer idInteligencia, String inteligencia) {
        this.idInteligencia = idInteligencia;
        this.inteligencia = inteligencia;
    }

    public Inteligencia(Integer idInteligencia, String inteligencia, Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases, Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.idInteligencia = idInteligencia;
        this.inteligencia = inteligencia;
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdInteligencia() {
        return idInteligencia;
    }

    public void setIdInteligencia(Integer idInteligencia) {
        this.idInteligencia = idInteligencia;
    }

    public String getInteligencia() {
        return inteligencia;
    }

    public void setInteligencia(String inteligencia) {
        this.inteligencia = inteligencia;
    }

    public Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

    public Set<com.aprendoz_desarrollo.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
