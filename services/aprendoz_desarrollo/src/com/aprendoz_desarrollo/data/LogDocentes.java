
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.LogDocentes
 *  06/18/2014 18:10:27
 * 
 */
public class LogDocentes {

    private Integer idLogDocentes;
    private Date fechaIngreso;
    private Date horaIngreso;
    private Persona persona;

    public LogDocentes() {
    }

    public LogDocentes(Integer idLogDocentes, Date fechaIngreso, Date horaIngreso) {
        this.idLogDocentes = idLogDocentes;
        this.fechaIngreso = fechaIngreso;
        this.horaIngreso = horaIngreso;
    }

    public LogDocentes(Integer idLogDocentes, Date fechaIngreso, Date horaIngreso, Persona persona) {
        this.idLogDocentes = idLogDocentes;
        this.fechaIngreso = fechaIngreso;
        this.horaIngreso = horaIngreso;
        this.persona = persona;
    }

    public Integer getIdLogDocentes() {
        return idLogDocentes;
    }

    public void setIdLogDocentes(Integer idLogDocentes) {
        this.idLogDocentes = idLogDocentes;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Date getHoraIngreso() {
        return horaIngreso;
    }

    public void setHoraIngreso(Date horaIngreso) {
        this.horaIngreso = horaIngreso;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
