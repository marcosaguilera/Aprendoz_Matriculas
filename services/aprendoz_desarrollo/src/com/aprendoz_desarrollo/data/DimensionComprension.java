
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.DimensionComprension
 *  06/09/2014 17:06:46
 * 
 */
public class DimensionComprension {

    private Integer idDimension;
    private String dimensionComprension;
    private Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_desarrollo.data.AprendizajesAsignaturas>();
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();

    public DimensionComprension() {
    }

    public DimensionComprension(Integer idDimension, String dimensionComprension) {
        this.idDimension = idDimension;
        this.dimensionComprension = dimensionComprension;
    }

    public DimensionComprension(Integer idDimension, String dimensionComprension, Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases, Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.idDimension = idDimension;
        this.dimensionComprension = dimensionComprension;
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionComprension() {
        return dimensionComprension;
    }

    public void setDimensionComprension(String dimensionComprension) {
        this.dimensionComprension = dimensionComprension;
    }

    public Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_desarrollo.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

    public Set<com.aprendoz_desarrollo.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
