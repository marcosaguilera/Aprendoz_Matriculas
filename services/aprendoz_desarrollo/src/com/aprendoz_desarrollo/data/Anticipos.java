
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Anticipos
 *  06/18/2014 18:10:26
 * 
 */
public class Anticipos {

    private Integer idAnticipos;
    private String codigo;

    public Anticipos() {
    }

    public Anticipos(Integer idAnticipos, String codigo) {
        this.idAnticipos = idAnticipos;
        this.codigo = codigo;
    }

    public Integer getIdAnticipos() {
        return idAnticipos;
    }

    public void setIdAnticipos(Integer idAnticipos) {
        this.idAnticipos = idAnticipos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

}
