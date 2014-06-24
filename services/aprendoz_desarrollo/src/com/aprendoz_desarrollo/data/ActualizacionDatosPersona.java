
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.ActualizacionDatosPersona
 *  06/18/2014 18:10:52
 * 
 */
public class ActualizacionDatosPersona {

    private Integer idActualizacionDatosPersona;
    private Date fechaCreacion;
    private Date fecha;
    private Boolean actualizado;
    private Persona persona;

    public ActualizacionDatosPersona() {
    }

    public ActualizacionDatosPersona(Integer idActualizacionDatosPersona, Date fechaCreacion, Date fecha, Boolean actualizado) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionDatosPersona(Integer idActualizacionDatosPersona, Date fechaCreacion, Date fecha, Boolean actualizado, Persona persona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.fechaCreacion = fechaCreacion;
        this.fecha = fecha;
        this.actualizado = actualizado;
        this.persona = persona;
    }

    public Integer getIdActualizacionDatosPersona() {
        return idActualizacionDatosPersona;
    }

    public void setIdActualizacionDatosPersona(Integer idActualizacionDatosPersona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
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

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
