
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Semana
 *  06/18/2014 18:10:26
 * 
 */
public class Semana {

    private Integer idSemana;
    private Integer numeroSemana;
    private Sy sy;
    private TipoSemana tipoSemana;

    public Semana() {
    }

    public Semana(Integer idSemana, Integer numeroSemana) {
        this.idSemana = idSemana;
        this.numeroSemana = numeroSemana;
    }

    public Semana(Integer idSemana, Integer numeroSemana, Sy sy, TipoSemana tipoSemana) {
        this.idSemana = idSemana;
        this.numeroSemana = numeroSemana;
        this.sy = sy;
        this.tipoSemana = tipoSemana;
    }

    public Integer getIdSemana() {
        return idSemana;
    }

    public void setIdSemana(Integer idSemana) {
        this.idSemana = idSemana;
    }

    public Integer getNumeroSemana() {
        return numeroSemana;
    }

    public void setNumeroSemana(Integer numeroSemana) {
        this.numeroSemana = numeroSemana;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public TipoSemana getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(TipoSemana tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

}
