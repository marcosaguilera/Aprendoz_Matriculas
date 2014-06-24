
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.AccAuthorization
 *  06/18/2014 18:10:26
 * 
 */
public class AccAuthorization {

    private Integer id;
    private String code;
    private String areas;
    private Grado grado;
    private TipoPersona tipoPersona;
    private Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> accStudentCardAuthorizations = new HashSet<com.aprendoz_desarrollo.data.AccStudentCardAuthorization>();

    public AccAuthorization() {
    }

    public AccAuthorization(Integer id, String code, String areas) {
        this.id = id;
        this.code = code;
        this.areas = areas;
    }

    public AccAuthorization(Integer id, String code, String areas, Grado grado, TipoPersona tipoPersona, Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.id = id;
        this.code = code;
        this.areas = areas;
        this.grado = grado;
        this.tipoPersona = tipoPersona;
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getAreas() {
        return areas;
    }

    public void setAreas(String areas) {
        this.areas = areas;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> getAccStudentCardAuthorizations() {
        return accStudentCardAuthorizations;
    }

    public void setAccStudentCardAuthorizations(Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

}
