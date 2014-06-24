
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getPeopleDataComplete" on 06/18/2014 18:55:42
 * 
 */
public class GetPeopleDataCompleteRtnType {

    private Integer idpersona;
    private String completePeopleData;

    public GetPeopleDataCompleteRtnType() {
    }

    public GetPeopleDataCompleteRtnType(Integer idpersona, String completePeopleData) {
        this.idpersona = idpersona;
        this.completePeopleData = completePeopleData;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public String getCompletePeopleData() {
        return completePeopleData;
    }

    public void setCompletePeopleData(String completePeopleData) {
        this.completePeopleData = completePeopleData;
    }

}
