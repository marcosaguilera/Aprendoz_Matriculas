
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Foto
 *  05/06/2013 15:48:46
 * 
 */
public class Foto {

    private String codigo;
    private byte[] foto;

    public Foto() {
    }

    public Foto(String codigo) {
        this.codigo = codigo;
    }

    public Foto(String codigo, byte[] foto) {
        this.codigo = codigo;
        this.foto = foto;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

}
