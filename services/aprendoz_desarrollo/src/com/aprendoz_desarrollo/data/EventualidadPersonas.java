
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.EventualidadPersonas
 *  06/09/2014 17:06:45
 * 
 */
public class EventualidadPersonas {

    private Integer idEventualidadPersonas;
    private SubtipoEventualidad subtipoEventualidad;
    private Eventualidades eventualidades;
    private Persona persona;

    public EventualidadPersonas() {
    }

    public EventualidadPersonas(Integer idEventualidadPersonas) {
        this.idEventualidadPersonas = idEventualidadPersonas;
    }

    public EventualidadPersonas(Integer idEventualidadPersonas, SubtipoEventualidad subtipoEventualidad, Eventualidades eventualidades, Persona persona) {
        this.idEventualidadPersonas = idEventualidadPersonas;
        this.subtipoEventualidad = subtipoEventualidad;
        this.eventualidades = eventualidades;
        this.persona = persona;
    }

    public Integer getIdEventualidadPersonas() {
        return idEventualidadPersonas;
    }

    public void setIdEventualidadPersonas(Integer idEventualidadPersonas) {
        this.idEventualidadPersonas = idEventualidadPersonas;
    }

    public SubtipoEventualidad getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(SubtipoEventualidad subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public Eventualidades getEventualidades() {
        return eventualidades;
    }

    public void setEventualidades(Eventualidades eventualidades) {
        this.eventualidades = eventualidades;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
