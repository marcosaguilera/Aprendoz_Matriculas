
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.ActualizacionGrupoFamiliarCopy
 *  06/18/2014 18:10:27
 * 
 */
public class ActualizacionGrupoFamiliarCopy {

    private Integer idActualizacionGrupoFamiliar;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;
    private GrupoFamiliar grupoFamiliar;

    public ActualizacionGrupoFamiliarCopy() {
    }

    public ActualizacionGrupoFamiliarCopy(Integer idActualizacionGrupoFamiliar, Date fechaCreacion, Date fecha, Byte actualizado) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionGrupoFamiliarCopy(Integer idActualizacionGrupoFamiliar, Date fechaCreacion, Date fecha, Byte actualizado, GrupoFamiliar grupoFamiliar) {
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

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
