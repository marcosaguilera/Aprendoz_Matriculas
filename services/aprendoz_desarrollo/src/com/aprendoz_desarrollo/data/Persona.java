
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Persona
 *  06/09/2014 17:06:45
 * 
 */
public class Persona {

    private Integer idPersona;
    private Pais pais;
    private TipoPersona tipoPersona;
    private GrupoFamiliar grupoFamiliar;
    private String nombreLdap;
    private String clave;
    private String codigo;
    private String email;
    private Boolean matriculado;
    private Boolean activoRetirado;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private String nivelAcademico;
    private Date fechaNacimiento;
    private String direccionResidencia;
    private String telefono;
    private String telefono2;
    private String religion;
    private String tipoDocumento;
    private String noDocumento;
    private String nacionalidad;
    private String lugarNacimientoDepartamento;
    private String lugarNacimientoMunicipio;
    private String lugarExpedicionMunicipio;
    private String lugarExpedicionDepartamento;
    private String paisDomicilio;
    private String barrio;
    private String codigoPostal;
    private String municipio;
    private String departamento;
    private String saludPrepagada;
    private String eps;
    private String numeroContratoSalud;
    private String clinicaEmergencia;
    private String viveCon;
    private String tipoSangre;
    private String sexo;
    private String codigoFamilia;
    private Date fechaIngreso;
    private String gradoIngreso;
    private String cursoIngreso;
    private Date fechaRetiro;
    private String comentarioRetiro;
    private String colegioAnterior;
    private Boolean hijoDeExalumno;
    private String nombrePadreExalumno;
    private String promocion;
    private String numeroTarjetaCredito;
    private String profesion;
    private String empresa;
    private String cargo;
    private String celular;
    private String direccionOficina;
    private String telefonoOficina;
    private String parentesco;
    private String rutaM;
    private String rutaT;
    private Boolean tomaAlmuerzo;
    private Boolean tomaMediasNueves;
    private Boolean tomaSeguroAccidentes;
    private String noPlaqueta;
    private Integer inscAlumCursoIdInscAlumCurso;
    private Set<com.aprendoz_desarrollo.data.SeguridadPersonasAccesos> seguridadPersonasAccesoses = new HashSet<com.aprendoz_desarrollo.data.SeguridadPersonasAccesos>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes = new HashSet<com.aprendoz_desarrollo.data.InscAlumAprendizaje>();
    private Set<com.aprendoz_desarrollo.data.PromocionCopy> promocionCopies = new HashSet<com.aprendoz_desarrollo.data.PromocionCopy>();
    private Set<com.aprendoz_desarrollo.data.TransporteInscAlumTransporte> transporteInscAlumTransportes = new HashSet<com.aprendoz_desarrollo.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> inscComentariosAlumnoses = new HashSet<com.aprendoz_desarrollo.data.InscComentariosAlumnos>();
    private Set<com.aprendoz_desarrollo.data.CalificacionFinal> calificacionFinals = new HashSet<com.aprendoz_desarrollo.data.CalificacionFinal>();
    private Set<com.aprendoz_desarrollo.data.InscDirectorNivel> inscDirectorNivels = new HashSet<com.aprendoz_desarrollo.data.InscDirectorNivel>();
    private Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads = new HashSet<com.aprendoz_desarrollo.data.InscAlumActividad>();
    private Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar>();
    private Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersonaCopy> actualizacionDatosPersonaCopies = new HashSet<com.aprendoz_desarrollo.data.ActualizacionDatosPersonaCopy>();
    private Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_desarrollo.data.EventualidadPersonas>();
    private Set<com.aprendoz_desarrollo.data.AccStudentCard> accStudentCards = new HashSet<com.aprendoz_desarrollo.data.AccStudentCard>();
    private Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_desarrollo.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollo.data.Asistencia> asistencias = new HashSet<com.aprendoz_desarrollo.data.Asistencia>();
    private Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_desarrollo.data.InscCoordinadoresCurso>();
    private Set<com.aprendoz_desarrollo.data.Logeventosaprendoz> logeventosaprendozs = new HashSet<com.aprendoz_desarrollo.data.Logeventosaprendoz>();
    private Set<com.aprendoz_desarrollo.data.LogIngresoCarne> logIngresoCarnes = new HashSet<com.aprendoz_desarrollo.data.LogIngresoCarne>();
    private Set<com.aprendoz_desarrollo.data.Promocion> promocions = new HashSet<com.aprendoz_desarrollo.data.Promocion>();
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> inscCursoAsigCopies = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsigCopy>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies = new HashSet<com.aprendoz_desarrollo.data.InscAlumCostoCopy>();
    private Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersona> actualizacionDatosPersonas = new HashSet<com.aprendoz_desarrollo.data.ActualizacionDatosPersona>();
    private Set<com.aprendoz_desarrollo.data.FichaMedica> fichaMedicas = new HashSet<com.aprendoz_desarrollo.data.FichaMedica>();
    private Set<com.aprendoz_desarrollo.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_desarrollo.data.TransporteNovedades>();
    private Set<com.aprendoz_desarrollo.data.LogDocentes> logDocenteses = new HashSet<com.aprendoz_desarrollo.data.LogDocentes>();
    private Set<com.aprendoz_desarrollo.data.PersonaCarne> personaCarnes = new HashSet<com.aprendoz_desarrollo.data.PersonaCarne>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy>();
    private Set<com.aprendoz_desarrollo.data.PerfilPersonaImg> perfilPersonaImgs = new HashSet<com.aprendoz_desarrollo.data.PerfilPersonaImg>();
    private Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> inscPersonaEduComs = new HashSet<com.aprendoz_desarrollo.data.InscPersonaEduCom>();
    private Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_desarrollo.data.Coordinadores>();
    private Set<com.aprendoz_desarrollo.data.Matricula> matriculas = new HashSet<com.aprendoz_desarrollo.data.Matricula>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> inscAlumAsigCopy3s = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy3>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsig>();
    private Set<com.aprendoz_desarrollo.data.GestionEncuestas> gestionEncuestases = new HashSet<com.aprendoz_desarrollo.data.GestionEncuestas>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCosto>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsigCopy2>();
    private Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_desarrollo.data.Coordinacion>();

    public Persona() {
    }

    public Persona(Integer idPersona, String nombreLdap, String clave, String codigo, String email, Boolean matriculado, Boolean activoRetirado, String apellido1, String apellido2, String nombre1, String nombre2, String nivelAcademico, Date fechaNacimiento, String direccionResidencia, String telefono, String telefono2, String religion, String tipoDocumento, String noDocumento, String nacionalidad, String lugarNacimientoDepartamento, String lugarNacimientoMunicipio, String lugarExpedicionMunicipio, String lugarExpedicionDepartamento, String paisDomicilio, String barrio, String codigoPostal, String municipio, String departamento, String saludPrepagada, String eps, String numeroContratoSalud, String clinicaEmergencia, String viveCon, String tipoSangre, String sexo, String codigoFamilia, Date fechaIngreso, String gradoIngreso, String cursoIngreso, Date fechaRetiro, String comentarioRetiro, String colegioAnterior, Boolean hijoDeExalumno, String nombrePadreExalumno, String promocion, String numeroTarjetaCredito, String profesion, String empresa, String cargo, String celular, String direccionOficina, String telefonoOficina, String parentesco, String rutaM, String rutaT, Boolean tomaAlmuerzo, Boolean tomaMediasNueves, Boolean tomaSeguroAccidentes, String noPlaqueta, Integer inscAlumCursoIdInscAlumCurso) {
        this.idPersona = idPersona;
        this.nombreLdap = nombreLdap;
        this.clave = clave;
        this.codigo = codigo;
        this.email = email;
        this.matriculado = matriculado;
        this.activoRetirado = activoRetirado;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nivelAcademico = nivelAcademico;
        this.fechaNacimiento = fechaNacimiento;
        this.direccionResidencia = direccionResidencia;
        this.telefono = telefono;
        this.telefono2 = telefono2;
        this.religion = religion;
        this.tipoDocumento = tipoDocumento;
        this.noDocumento = noDocumento;
        this.nacionalidad = nacionalidad;
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
        this.paisDomicilio = paisDomicilio;
        this.barrio = barrio;
        this.codigoPostal = codigoPostal;
        this.municipio = municipio;
        this.departamento = departamento;
        this.saludPrepagada = saludPrepagada;
        this.eps = eps;
        this.numeroContratoSalud = numeroContratoSalud;
        this.clinicaEmergencia = clinicaEmergencia;
        this.viveCon = viveCon;
        this.tipoSangre = tipoSangre;
        this.sexo = sexo;
        this.codigoFamilia = codigoFamilia;
        this.fechaIngreso = fechaIngreso;
        this.gradoIngreso = gradoIngreso;
        this.cursoIngreso = cursoIngreso;
        this.fechaRetiro = fechaRetiro;
        this.comentarioRetiro = comentarioRetiro;
        this.colegioAnterior = colegioAnterior;
        this.hijoDeExalumno = hijoDeExalumno;
        this.nombrePadreExalumno = nombrePadreExalumno;
        this.promocion = promocion;
        this.numeroTarjetaCredito = numeroTarjetaCredito;
        this.profesion = profesion;
        this.empresa = empresa;
        this.cargo = cargo;
        this.celular = celular;
        this.direccionOficina = direccionOficina;
        this.telefonoOficina = telefonoOficina;
        this.parentesco = parentesco;
        this.rutaM = rutaM;
        this.rutaT = rutaT;
        this.tomaAlmuerzo = tomaAlmuerzo;
        this.tomaMediasNueves = tomaMediasNueves;
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
        this.noPlaqueta = noPlaqueta;
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
    }

    public Persona(Integer idPersona, Pais pais, TipoPersona tipoPersona, GrupoFamiliar grupoFamiliar, String nombreLdap, String clave, String codigo, String email, Boolean matriculado, Boolean activoRetirado, String apellido1, String apellido2, String nombre1, String nombre2, String nivelAcademico, Date fechaNacimiento, String direccionResidencia, String telefono, String telefono2, String religion, String tipoDocumento, String noDocumento, String nacionalidad, String lugarNacimientoDepartamento, String lugarNacimientoMunicipio, String lugarExpedicionMunicipio, String lugarExpedicionDepartamento, String paisDomicilio, String barrio, String codigoPostal, String municipio, String departamento, String saludPrepagada, String eps, String numeroContratoSalud, String clinicaEmergencia, String viveCon, String tipoSangre, String sexo, String codigoFamilia, Date fechaIngreso, String gradoIngreso, String cursoIngreso, Date fechaRetiro, String comentarioRetiro, String colegioAnterior, Boolean hijoDeExalumno, String nombrePadreExalumno, String promocion, String numeroTarjetaCredito, String profesion, String empresa, String cargo, String celular, String direccionOficina, String telefonoOficina, String parentesco, String rutaM, String rutaT, Boolean tomaAlmuerzo, Boolean tomaMediasNueves, Boolean tomaSeguroAccidentes, String noPlaqueta, Integer inscAlumCursoIdInscAlumCurso, Set<com.aprendoz_desarrollo.data.SeguridadPersonasAccesos> seguridadPersonasAccesoses, Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes, Set<com.aprendoz_desarrollo.data.PromocionCopy> promocionCopies, Set<com.aprendoz_desarrollo.data.TransporteInscAlumTransporte> transporteInscAlumTransportes, Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> inscComentariosAlumnoses, Set<com.aprendoz_desarrollo.data.CalificacionFinal> calificacionFinals, Set<com.aprendoz_desarrollo.data.InscDirectorNivel> inscDirectorNivels, Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads, Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars, Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersonaCopy> actualizacionDatosPersonaCopies, Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases, Set<com.aprendoz_desarrollo.data.AccStudentCard> accStudentCards, Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos, Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_desarrollo.data.Asistencia> asistencias, Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos, Set<com.aprendoz_desarrollo.data.Logeventosaprendoz> logeventosaprendozs, Set<com.aprendoz_desarrollo.data.LogIngresoCarne> logIngresoCarnes, Set<com.aprendoz_desarrollo.data.Promocion> promocions, Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> inscCursoAsigCopies, Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies, Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersona> actualizacionDatosPersonas, Set<com.aprendoz_desarrollo.data.FichaMedica> fichaMedicas, Set<com.aprendoz_desarrollo.data.TransporteNovedades> transporteNovedadeses, Set<com.aprendoz_desarrollo.data.LogDocentes> logDocenteses, Set<com.aprendoz_desarrollo.data.PersonaCarne> personaCarnes, Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies, Set<com.aprendoz_desarrollo.data.PerfilPersonaImg> perfilPersonaImgs, Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> inscPersonaEduComs, Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses, Set<com.aprendoz_desarrollo.data.Matricula> matriculas, Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> inscAlumAsigCopy3s, Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs, Set<com.aprendoz_desarrollo.data.GestionEncuestas> gestionEncuestases, Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos, Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s, Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions) {
        this.idPersona = idPersona;
        this.pais = pais;
        this.tipoPersona = tipoPersona;
        this.grupoFamiliar = grupoFamiliar;
        this.nombreLdap = nombreLdap;
        this.clave = clave;
        this.codigo = codigo;
        this.email = email;
        this.matriculado = matriculado;
        this.activoRetirado = activoRetirado;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nivelAcademico = nivelAcademico;
        this.fechaNacimiento = fechaNacimiento;
        this.direccionResidencia = direccionResidencia;
        this.telefono = telefono;
        this.telefono2 = telefono2;
        this.religion = religion;
        this.tipoDocumento = tipoDocumento;
        this.noDocumento = noDocumento;
        this.nacionalidad = nacionalidad;
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
        this.paisDomicilio = paisDomicilio;
        this.barrio = barrio;
        this.codigoPostal = codigoPostal;
        this.municipio = municipio;
        this.departamento = departamento;
        this.saludPrepagada = saludPrepagada;
        this.eps = eps;
        this.numeroContratoSalud = numeroContratoSalud;
        this.clinicaEmergencia = clinicaEmergencia;
        this.viveCon = viveCon;
        this.tipoSangre = tipoSangre;
        this.sexo = sexo;
        this.codigoFamilia = codigoFamilia;
        this.fechaIngreso = fechaIngreso;
        this.gradoIngreso = gradoIngreso;
        this.cursoIngreso = cursoIngreso;
        this.fechaRetiro = fechaRetiro;
        this.comentarioRetiro = comentarioRetiro;
        this.colegioAnterior = colegioAnterior;
        this.hijoDeExalumno = hijoDeExalumno;
        this.nombrePadreExalumno = nombrePadreExalumno;
        this.promocion = promocion;
        this.numeroTarjetaCredito = numeroTarjetaCredito;
        this.profesion = profesion;
        this.empresa = empresa;
        this.cargo = cargo;
        this.celular = celular;
        this.direccionOficina = direccionOficina;
        this.telefonoOficina = telefonoOficina;
        this.parentesco = parentesco;
        this.rutaM = rutaM;
        this.rutaT = rutaT;
        this.tomaAlmuerzo = tomaAlmuerzo;
        this.tomaMediasNueves = tomaMediasNueves;
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
        this.noPlaqueta = noPlaqueta;
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
        this.seguridadPersonasAccesoses = seguridadPersonasAccesoses;
        this.inscAlumAprendizajes = inscAlumAprendizajes;
        this.promocionCopies = promocionCopies;
        this.transporteInscAlumTransportes = transporteInscAlumTransportes;
        this.inscComentariosAlumnoses = inscComentariosAlumnoses;
        this.calificacionFinals = calificacionFinals;
        this.inscDirectorNivels = inscDirectorNivels;
        this.inscAlumActividads = inscAlumActividads;
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
        this.actualizacionDatosPersonaCopies = actualizacionDatosPersonaCopies;
        this.eventualidadPersonases = eventualidadPersonases;
        this.accStudentCards = accStudentCards;
        this.coordinacionDeGrupos = coordinacionDeGrupos;
        this.inscAlumCursos = inscAlumCursos;
        this.asistencias = asistencias;
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
        this.logeventosaprendozs = logeventosaprendozs;
        this.logIngresoCarnes = logIngresoCarnes;
        this.promocions = promocions;
        this.inscCursoAsigs = inscCursoAsigs;
        this.inscCursoAsigCopies = inscCursoAsigCopies;
        this.inscAlumCostoCopies = inscAlumCostoCopies;
        this.actualizacionDatosPersonas = actualizacionDatosPersonas;
        this.fichaMedicas = fichaMedicas;
        this.transporteNovedadeses = transporteNovedadeses;
        this.logDocenteses = logDocenteses;
        this.personaCarnes = personaCarnes;
        this.inscAlumAsigCopies = inscAlumAsigCopies;
        this.perfilPersonaImgs = perfilPersonaImgs;
        this.inscPersonaEduComs = inscPersonaEduComs;
        this.coordinadoreses = coordinadoreses;
        this.matriculas = matriculas;
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
        this.inscAlumAsigs = inscAlumAsigs;
        this.gestionEncuestases = gestionEncuestases;
        this.inscAlumCostos = inscAlumCostos;
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
        this.coordinacions = coordinacions;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getMatriculado() {
        return matriculado;
    }

    public void setMatriculado(Boolean matriculado) {
        this.matriculado = matriculado;
    }

    public Boolean getActivoRetirado() {
        return activoRetirado;
    }

    public void setActivoRetirado(Boolean activoRetirado) {
        this.activoRetirado = activoRetirado;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public String getNivelAcademico() {
        return nivelAcademico;
    }

    public void setNivelAcademico(String nivelAcademico) {
        this.nivelAcademico = nivelAcademico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getDireccionResidencia() {
        return direccionResidencia;
    }

    public void setDireccionResidencia(String direccionResidencia) {
        this.direccionResidencia = direccionResidencia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getLugarNacimientoDepartamento() {
        return lugarNacimientoDepartamento;
    }

    public void setLugarNacimientoDepartamento(String lugarNacimientoDepartamento) {
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
    }

    public String getLugarNacimientoMunicipio() {
        return lugarNacimientoMunicipio;
    }

    public void setLugarNacimientoMunicipio(String lugarNacimientoMunicipio) {
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
    }

    public String getLugarExpedicionMunicipio() {
        return lugarExpedicionMunicipio;
    }

    public void setLugarExpedicionMunicipio(String lugarExpedicionMunicipio) {
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
    }

    public String getLugarExpedicionDepartamento() {
        return lugarExpedicionDepartamento;
    }

    public void setLugarExpedicionDepartamento(String lugarExpedicionDepartamento) {
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
    }

    public String getPaisDomicilio() {
        return paisDomicilio;
    }

    public void setPaisDomicilio(String paisDomicilio) {
        this.paisDomicilio = paisDomicilio;
    }

    public String getBarrio() {
        return barrio;
    }

    public void setBarrio(String barrio) {
        this.barrio = barrio;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getSaludPrepagada() {
        return saludPrepagada;
    }

    public void setSaludPrepagada(String saludPrepagada) {
        this.saludPrepagada = saludPrepagada;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getNumeroContratoSalud() {
        return numeroContratoSalud;
    }

    public void setNumeroContratoSalud(String numeroContratoSalud) {
        this.numeroContratoSalud = numeroContratoSalud;
    }

    public String getClinicaEmergencia() {
        return clinicaEmergencia;
    }

    public void setClinicaEmergencia(String clinicaEmergencia) {
        this.clinicaEmergencia = clinicaEmergencia;
    }

    public String getViveCon() {
        return viveCon;
    }

    public void setViveCon(String viveCon) {
        this.viveCon = viveCon;
    }

    public String getTipoSangre() {
        return tipoSangre;
    }

    public void setTipoSangre(String tipoSangre) {
        this.tipoSangre = tipoSangre;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getCodigoFamilia() {
        return codigoFamilia;
    }

    public void setCodigoFamilia(String codigoFamilia) {
        this.codigoFamilia = codigoFamilia;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getGradoIngreso() {
        return gradoIngreso;
    }

    public void setGradoIngreso(String gradoIngreso) {
        this.gradoIngreso = gradoIngreso;
    }

    public String getCursoIngreso() {
        return cursoIngreso;
    }

    public void setCursoIngreso(String cursoIngreso) {
        this.cursoIngreso = cursoIngreso;
    }

    public Date getFechaRetiro() {
        return fechaRetiro;
    }

    public void setFechaRetiro(Date fechaRetiro) {
        this.fechaRetiro = fechaRetiro;
    }

    public String getComentarioRetiro() {
        return comentarioRetiro;
    }

    public void setComentarioRetiro(String comentarioRetiro) {
        this.comentarioRetiro = comentarioRetiro;
    }

    public String getColegioAnterior() {
        return colegioAnterior;
    }

    public void setColegioAnterior(String colegioAnterior) {
        this.colegioAnterior = colegioAnterior;
    }

    public Boolean getHijoDeExalumno() {
        return hijoDeExalumno;
    }

    public void setHijoDeExalumno(Boolean hijoDeExalumno) {
        this.hijoDeExalumno = hijoDeExalumno;
    }

    public String getNombrePadreExalumno() {
        return nombrePadreExalumno;
    }

    public void setNombrePadreExalumno(String nombrePadreExalumno) {
        this.nombrePadreExalumno = nombrePadreExalumno;
    }

    public String getPromocion() {
        return promocion;
    }

    public void setPromocion(String promocion) {
        this.promocion = promocion;
    }

    public String getNumeroTarjetaCredito() {
        return numeroTarjetaCredito;
    }

    public void setNumeroTarjetaCredito(String numeroTarjetaCredito) {
        this.numeroTarjetaCredito = numeroTarjetaCredito;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getDireccionOficina() {
        return direccionOficina;
    }

    public void setDireccionOficina(String direccionOficina) {
        this.direccionOficina = direccionOficina;
    }

    public String getTelefonoOficina() {
        return telefonoOficina;
    }

    public void setTelefonoOficina(String telefonoOficina) {
        this.telefonoOficina = telefonoOficina;
    }

    public String getParentesco() {
        return parentesco;
    }

    public void setParentesco(String parentesco) {
        this.parentesco = parentesco;
    }

    public String getRutaM() {
        return rutaM;
    }

    public void setRutaM(String rutaM) {
        this.rutaM = rutaM;
    }

    public String getRutaT() {
        return rutaT;
    }

    public void setRutaT(String rutaT) {
        this.rutaT = rutaT;
    }

    public Boolean getTomaAlmuerzo() {
        return tomaAlmuerzo;
    }

    public void setTomaAlmuerzo(Boolean tomaAlmuerzo) {
        this.tomaAlmuerzo = tomaAlmuerzo;
    }

    public Boolean getTomaMediasNueves() {
        return tomaMediasNueves;
    }

    public void setTomaMediasNueves(Boolean tomaMediasNueves) {
        this.tomaMediasNueves = tomaMediasNueves;
    }

    public Boolean getTomaSeguroAccidentes() {
        return tomaSeguroAccidentes;
    }

    public void setTomaSeguroAccidentes(Boolean tomaSeguroAccidentes) {
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
    }

    public String getNoPlaqueta() {
        return noPlaqueta;
    }

    public void setNoPlaqueta(String noPlaqueta) {
        this.noPlaqueta = noPlaqueta;
    }

    public Integer getInscAlumCursoIdInscAlumCurso() {
        return inscAlumCursoIdInscAlumCurso;
    }

    public void setInscAlumCursoIdInscAlumCurso(Integer inscAlumCursoIdInscAlumCurso) {
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
    }

    public Set<com.aprendoz_desarrollo.data.SeguridadPersonasAccesos> getSeguridadPersonasAccesoses() {
        return seguridadPersonasAccesoses;
    }

    public void setSeguridadPersonasAccesoses(Set<com.aprendoz_desarrollo.data.SeguridadPersonasAccesos> seguridadPersonasAccesoses) {
        this.seguridadPersonasAccesoses = seguridadPersonasAccesoses;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> getInscAlumAprendizajes() {
        return inscAlumAprendizajes;
    }

    public void setInscAlumAprendizajes(Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes) {
        this.inscAlumAprendizajes = inscAlumAprendizajes;
    }

    public Set<com.aprendoz_desarrollo.data.PromocionCopy> getPromocionCopies() {
        return promocionCopies;
    }

    public void setPromocionCopies(Set<com.aprendoz_desarrollo.data.PromocionCopy> promocionCopies) {
        this.promocionCopies = promocionCopies;
    }

    public Set<com.aprendoz_desarrollo.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportes() {
        return transporteInscAlumTransportes;
    }

    public void setTransporteInscAlumTransportes(Set<com.aprendoz_desarrollo.data.TransporteInscAlumTransporte> transporteInscAlumTransportes) {
        this.transporteInscAlumTransportes = transporteInscAlumTransportes;
    }

    public Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> getInscComentariosAlumnoses() {
        return inscComentariosAlumnoses;
    }

    public void setInscComentariosAlumnoses(Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> inscComentariosAlumnoses) {
        this.inscComentariosAlumnoses = inscComentariosAlumnoses;
    }

    public Set<com.aprendoz_desarrollo.data.CalificacionFinal> getCalificacionFinals() {
        return calificacionFinals;
    }

    public void setCalificacionFinals(Set<com.aprendoz_desarrollo.data.CalificacionFinal> calificacionFinals) {
        this.calificacionFinals = calificacionFinals;
    }

    public Set<com.aprendoz_desarrollo.data.InscDirectorNivel> getInscDirectorNivels() {
        return inscDirectorNivels;
    }

    public void setInscDirectorNivels(Set<com.aprendoz_desarrollo.data.InscDirectorNivel> inscDirectorNivels) {
        this.inscDirectorNivels = inscDirectorNivels;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumActividad> getInscAlumActividads() {
        return inscAlumActividads;
    }

    public void setInscAlumActividads(Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads) {
        this.inscAlumActividads = inscAlumActividads;
    }

    public Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> getInscPersonaGrupoFamiliars() {
        return inscPersonaGrupoFamiliars;
    }

    public void setInscPersonaGrupoFamiliars(Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars) {
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
    }

    public Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersonaCopy> getActualizacionDatosPersonaCopies() {
        return actualizacionDatosPersonaCopies;
    }

    public void setActualizacionDatosPersonaCopies(Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersonaCopy> actualizacionDatosPersonaCopies) {
        this.actualizacionDatosPersonaCopies = actualizacionDatosPersonaCopies;
    }

    public Set<com.aprendoz_desarrollo.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

    public Set<com.aprendoz_desarrollo.data.AccStudentCard> getAccStudentCards() {
        return accStudentCards;
    }

    public void setAccStudentCards(Set<com.aprendoz_desarrollo.data.AccStudentCard> accStudentCards) {
        this.accStudentCards = accStudentCards;
    }

    public Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollo.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

    public Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

    public Set<com.aprendoz_desarrollo.data.Logeventosaprendoz> getLogeventosaprendozs() {
        return logeventosaprendozs;
    }

    public void setLogeventosaprendozs(Set<com.aprendoz_desarrollo.data.Logeventosaprendoz> logeventosaprendozs) {
        this.logeventosaprendozs = logeventosaprendozs;
    }

    public Set<com.aprendoz_desarrollo.data.LogIngresoCarne> getLogIngresoCarnes() {
        return logIngresoCarnes;
    }

    public void setLogIngresoCarnes(Set<com.aprendoz_desarrollo.data.LogIngresoCarne> logIngresoCarnes) {
        this.logIngresoCarnes = logIngresoCarnes;
    }

    public Set<com.aprendoz_desarrollo.data.Promocion> getPromocions() {
        return promocions;
    }

    public void setPromocions(Set<com.aprendoz_desarrollo.data.Promocion> promocions) {
        this.promocions = promocions;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> getInscCursoAsigCopies() {
        return inscCursoAsigCopies;
    }

    public void setInscCursoAsigCopies(Set<com.aprendoz_desarrollo.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> getInscAlumCostoCopies() {
        return inscAlumCostoCopies;
    }

    public void setInscAlumCostoCopies(Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies) {
        this.inscAlumCostoCopies = inscAlumCostoCopies;
    }

    public Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersona> getActualizacionDatosPersonas() {
        return actualizacionDatosPersonas;
    }

    public void setActualizacionDatosPersonas(Set<com.aprendoz_desarrollo.data.ActualizacionDatosPersona> actualizacionDatosPersonas) {
        this.actualizacionDatosPersonas = actualizacionDatosPersonas;
    }

    public Set<com.aprendoz_desarrollo.data.FichaMedica> getFichaMedicas() {
        return fichaMedicas;
    }

    public void setFichaMedicas(Set<com.aprendoz_desarrollo.data.FichaMedica> fichaMedicas) {
        this.fichaMedicas = fichaMedicas;
    }

    public Set<com.aprendoz_desarrollo.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_desarrollo.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

    public Set<com.aprendoz_desarrollo.data.LogDocentes> getLogDocenteses() {
        return logDocenteses;
    }

    public void setLogDocenteses(Set<com.aprendoz_desarrollo.data.LogDocentes> logDocenteses) {
        this.logDocenteses = logDocenteses;
    }

    public Set<com.aprendoz_desarrollo.data.PersonaCarne> getPersonaCarnes() {
        return personaCarnes;
    }

    public void setPersonaCarnes(Set<com.aprendoz_desarrollo.data.PersonaCarne> personaCarnes) {
        this.personaCarnes = personaCarnes;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> getInscAlumAsigCopies() {
        return inscAlumAsigCopies;
    }

    public void setInscAlumAsigCopies(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy> inscAlumAsigCopies) {
        this.inscAlumAsigCopies = inscAlumAsigCopies;
    }

    public Set<com.aprendoz_desarrollo.data.PerfilPersonaImg> getPerfilPersonaImgs() {
        return perfilPersonaImgs;
    }

    public void setPerfilPersonaImgs(Set<com.aprendoz_desarrollo.data.PerfilPersonaImg> perfilPersonaImgs) {
        this.perfilPersonaImgs = perfilPersonaImgs;
    }

    public Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> getInscPersonaEduComs() {
        return inscPersonaEduComs;
    }

    public void setInscPersonaEduComs(Set<com.aprendoz_desarrollo.data.InscPersonaEduCom> inscPersonaEduComs) {
        this.inscPersonaEduComs = inscPersonaEduComs;
    }

    public Set<com.aprendoz_desarrollo.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_desarrollo.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_desarrollo.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> getInscAlumAsigCopy3s() {
        return inscAlumAsigCopy3s;
    }

    public void setInscAlumAsigCopy3s(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy3> inscAlumAsigCopy3s) {
        this.inscAlumAsigCopy3s = inscAlumAsigCopy3s;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.GestionEncuestas> getGestionEncuestases() {
        return gestionEncuestases;
    }

    public void setGestionEncuestases(Set<com.aprendoz_desarrollo.data.GestionEncuestas> gestionEncuestases) {
        this.gestionEncuestases = gestionEncuestases;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCosto> getInscAlumCostos() {
        return inscAlumCostos;
    }

    public void setInscAlumCostos(Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos) {
        this.inscAlumCostos = inscAlumCostos;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> getInscAlumAsigCopy2s() {
        return inscAlumAsigCopy2s;
    }

    public void setInscAlumAsigCopy2s(Set<com.aprendoz_desarrollo.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

    public Set<com.aprendoz_desarrollo.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

}
