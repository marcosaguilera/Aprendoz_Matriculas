
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.GestionEncuestasGrupoFamiliar
 *  06/18/2014 18:10:26
 * 
 */
public class GestionEncuestasGrupoFamiliar {

    private Integer idGestionEncuestaGrupoFamiliar;
    private Byte encuestaTerminada;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private GrupoFamiliar grupoFamiliar;

    public GestionEncuestasGrupoFamiliar() {
    }

    public GestionEncuestasGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar, Byte encuestaTerminada, Date fechaCreacion, Date fechaActualizacion) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
        this.encuestaTerminada = encuestaTerminada;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public GestionEncuestasGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar, Byte encuestaTerminada, Date fechaCreacion, Date fechaActualizacion, GrupoFamiliar grupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
        this.encuestaTerminada = encuestaTerminada;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.grupoFamiliar = grupoFamiliar;
    }

    public Integer getIdGestionEncuestaGrupoFamiliar() {
        return idGestionEncuestaGrupoFamiliar;
    }

    public void setIdGestionEncuestaGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
    }

    public Byte getEncuestaTerminada() {
        return encuestaTerminada;
    }

    public void setEncuestaTerminada(Byte encuestaTerminada) {
        this.encuestaTerminada = encuestaTerminada;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
