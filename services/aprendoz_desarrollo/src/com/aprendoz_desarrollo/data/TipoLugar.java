
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoLugar
 *  06/09/2014 17:06:46
 * 
 */
public class TipoLugar {

    private Integer idLugar;
    private String lugar;
    private Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses = new HashSet<com.aprendoz_desarrollo.data.Eventualidades>();

    public TipoLugar() {
    }

    public TipoLugar(Integer idLugar, String lugar) {
        this.idLugar = idLugar;
        this.lugar = lugar;
    }

    public TipoLugar(Integer idLugar, String lugar, Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses) {
        this.idLugar = idLugar;
        this.lugar = lugar;
        this.eventualidadeses = eventualidadeses;
    }

    public Integer getIdLugar() {
        return idLugar;
    }

    public void setIdLugar(Integer idLugar) {
        this.idLugar = idLugar;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public Set<com.aprendoz_desarrollo.data.Eventualidades> getEventualidadeses() {
        return eventualidadeses;
    }

    public void setEventualidadeses(Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses) {
        this.eventualidadeses = eventualidadeses;
    }

}
