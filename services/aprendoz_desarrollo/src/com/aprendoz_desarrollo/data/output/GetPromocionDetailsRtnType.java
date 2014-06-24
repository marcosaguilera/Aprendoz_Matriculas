
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getPromocionDetails" on 06/18/2014 18:55:42
 * 
 */
public class GetPromocionDetailsRtnType {

    private Integer idpromocion;
    private Integer idpersona;
    private Integer idgrupofamiliar;

    public GetPromocionDetailsRtnType() {
    }

    public GetPromocionDetailsRtnType(Integer idpromocion, Integer idpersona, Integer idgrupofamiliar) {
        this.idpromocion = idpromocion;
        this.idpersona = idpersona;
        this.idgrupofamiliar = idgrupofamiliar;
    }

    public Integer getIdpromocion() {
        return idpromocion;
    }

    public void setIdpromocion(Integer idpromocion) {
        this.idpromocion = idpromocion;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public Integer getIdgrupofamiliar() {
        return idgrupofamiliar;
    }

    public void setIdgrupofamiliar(Integer idgrupofamiliar) {
        this.idgrupofamiliar = idgrupofamiliar;
    }

}
