
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.ActualizacionGrupoFamiliar
 *  06/18/2014 18:11:10
 * 
 */
public class ActualizacionGrupoFamiliar {

    private Integer idActualizacionGrupoFamiliar;
    private Date fechaCreacion;
    private Date fecha;
    private Boolean actualizado;
    private GrupoFamiliar grupoFamiliar;

    public ActualizacionGrupoFamiliar() {
    }

    public ActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar, Date fechaCreacion, Date fecha, Boolean actualizado) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar, Date fechaCreacion, Date fecha, Boolean actualizado, GrupoFamiliar grupoFamiliar) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
        this.grupoFamiliar = grupoFamiliar;
    }

    public Integer getIdActualizacionGrupoFamiliar() {
        return idActualizacionGrupoFamiliar;
    }

    public void setIdActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getActualizado() {
        return actualizado;
    }

    public void setActualizado(Boolean actualizado) {
        this.actualizado = actualizado;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
