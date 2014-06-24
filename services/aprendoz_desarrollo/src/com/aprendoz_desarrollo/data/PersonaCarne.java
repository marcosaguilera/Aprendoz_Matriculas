
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.PersonaCarne
 *  06/18/2014 18:10:27
 * 
 */
public class PersonaCarne {

    private Integer idPersonaCarne;
    private Date fecha;
    private Integer numerocopias;
    private Persona persona;

    public PersonaCarne() {
    }

    public PersonaCarne(Integer idPersonaCarne, Date fecha, Integer numerocopias) {
        this.idPersonaCarne = idPersonaCarne;
        this.fecha = fecha;
        this.numerocopias = numerocopias;
    }

    public PersonaCarne(Integer idPersonaCarne, Date fecha, Integer numerocopias, Persona persona) {
        this.idPersonaCarne = idPersonaCarne;
        this.fecha = fecha;
        this.numerocopias = numerocopias;
        this.persona = persona;
    }

    public Integer getIdPersonaCarne() {
        return idPersonaCarne;
    }

    public void setIdPersonaCarne(Integer idPersonaCarne) {
        this.idPersonaCarne = idPersonaCarne;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Integer getNumerocopias() {
        return numerocopias;
    }

    public void setNumerocopias(Integer numerocopias) {
        this.numerocopias = numerocopias;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
