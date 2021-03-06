
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoPago
 *  06/09/2014 17:06:46
 * 
 */
public class TipoPago {

    private Integer idTipoPago;
    private String tipoPago;
    private Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> inscPersonaEduComs = new HashSet<com.aprendoz_desarrollo.data.InscPersonaEduCom>();

    public TipoPago() {
    }

    public TipoPago(Integer idTipoPago, String tipoPago) {
        this.idTipoPago = idTipoPago;
        this.tipoPago = tipoPago;
    }

    public TipoPago(Integer idTipoPago, String tipoPago, Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> inscPersonaEduComs) {
        this.idTipoPago = idTipoPago;
        this.tipoPago = tipoPago;
        this.inscPersonaEduComs = inscPersonaEduComs;
    }

    public Integer getIdTipoPago() {
        return idTipoPago;
    }

    public void setIdTipoPago(Integer idTipoPago) {
        this.idTipoPago = idTipoPago;
    }

    public String getTipoPago() {
        return tipoPago;
    }

    public void setTipoPago(String tipoPago) {
        this.tipoPago = tipoPago;
    }

    public Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> getInscPersonaEduComs() {
        return inscPersonaEduComs;
    }

    public void setInscPersonaEduComs(Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> inscPersonaEduComs) {
        this.inscPersonaEduComs = inscPersonaEduComs;
    }

}
