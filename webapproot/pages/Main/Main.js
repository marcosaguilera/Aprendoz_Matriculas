dojo.declare("Main", wm.Page, {
  start: function() {
    
  },
  a_sySuccess: function(inSender, inDeprecated) {
      this.busqueda_sel_sy.setDataValue(4+1);
      this.costos_sel_sy.setDataValue(4+1);
      this.promocion_sy.setDataValue(4);
  },
  busqueda_inscpersonagrupofamiliarDataGrid1Selected: function(inSender, inIndex) {
      var codigo= this.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().persona.codigo;
      this.tiny_pic.setSource("http://aprendoz.rochester.edu.co/stds/"+codigo+".Jpeg");
  },
  inscalumcostoDataGrid1SetColumns: function(inSender, inColumn, inIndex) {
      if( inIndex == 6 || inIndex == 2 || inIndex == 5) {
      inColumn.formatter = function(inDatum, inRowIndex) {
         var formatNumber = '$' + inDatum.toFixed(0);
         return('<div style="text-align: right">' +formatNumber+ '</div>');
         };
      }       
      if(inIndex == 4) {
      inColumn.formatter = function(inDatum, inRowIndex) {
         return('<div style="text-align: center">' +inDatum+ '</div>');
         };
      }
  },
  inscalumcostoDataGrid1Selected: function(inSender, inIndex) {
      this.matriculas_box_nombreProducto.setDataValue(this.inscalumcostoDataGrid1.selectedItem.getData().costos.nombreProducto);
      this.matriculas_box_valorProducto.setDataValue(this.inscalumcostoDataGrid1.selectedItem.getData().costos.valor);
      this.matriculas_check_nuevo.setChecked(this.inscalumcostoDataGrid1.selectedItem.getData().costos.nuevo);
      this.matriculas_check_obligatorio.setChecked(this.inscalumcostoDataGrid1.selectedItem.getData().costos.obligatorio);
      this.matriculas_check_anual.setChecked(this.inscalumcostoDataGrid1.selectedItem.getData().costos.anual);
  }, 
  descuentoPorcentajeEditor1Change: function(inSender, inDisplayValue, inDataValue) {
      var Valor_Producto= this.matriculas_box_valorProducto.dataValue;
      var Porcentaje= this.descuentoPorcentajeEditor1.dataValue;
      var total= (Valor_Producto*Porcentaje)/100;
      this.descuentoValorEditor1.setDataValue(total);
  }, 
  descuentoValorEditor1Change: function(inSender, inDisplayValue, inDataValue) {
     var Valor_Producto1= this.matriculas_box_valorProducto.dataValue;
     var Valor_Dto= this.descuentoValorEditor1.dataValue;
     var total_pagar= Valor_Producto1-Valor_Dto;
     this.valorFinalDescuentoEditor1.setDataValue(total_pagar);
  }, 
  l_MatriculasShow: function(inSender) {
    var _selected= this.busqueda_inscpersonagrupofamiliarDataGrid1.getEmptySelection();
    var _getType= this.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().tipoPersona.idTipoPersona;
     /*mejoramiento del codigo*/
     if(_selected == true || _getType != 1){  
      alert("ATENCIÓN: \n\nDebe seleccionar un 'Estudiante' para continuar con el proceso. Regrese a la pestaña 'Busqueda de Alumnos' e intentelo nuevamente.");
      this.l_matriculas_inscalumcostoLiveVariable1.clearData();   
     }else if(_selected== false && _getType == 1){      
      this.l_matriculas_inscalumcostoLiveVariable1.update(); 
     } 
  },
  nuevoClick: function(inSender, inEvent) {
      this.busqueda_panel1.hide();
      this.inscpersonagrupofamiliarDetailsPanel.show();
  },
  inscpersonagrupofamiliarLiveForm1Success: function(inSender, inData) {
      this.l_busqueda_inscpersonagrupofamiliarLiveVariable1.update();
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
  },
  inscpersonagrupofamiliarLiveForm1UpdateData: function(inSender) {
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
  },
  inscpersonagrupofamiliarLiveForm1DeleteData: function(inSender) {
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
  },
  inscpersonagrupofamiliarLiveForm1InsertData: function(inSender) {
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
  },
  /**acciones en formulario de matriculas**/
  busqueda_personas_cursoSelected: function(inSender, inIndex) {
     this.l_busqueda_inscpersonagrupofamiliarLiveVariable1.update();
     var _idsy=  this.busqueda_sel_sy.getDataValue();
     var _sy= _idsy-1;
     this.l_busqueda_informacion_promocion.filter.setValue("id.syIdSy", _sy);
     this.l_busqueda_informacion_promocion.update();
  },
  inscalumcostoLiveForm1BeginInsert: function(inSender) {
      this.syLookup1.enable();
      var idpersona= this.busqueda_personas_curso.selectedItem.getData().id.idPersona;
      var idsy= this.busqueda_sel_sy.getDataValue();
      var idgrado= this.busqueda_personas_curso.selectedItem.getData().id.gradoIdGrado;
      this.l_matriculas_lista_costos.filter.setValue("sy.idSy", idsy);
      this.l_matriculas_lista_costos.filter.setValue("grado.idGrado",idgrado);
      this.personaLookup2.setValue("dataValue", this.busqueda_personas_curso.selectedItem.getData().id.idPersona);
      this.descuentoPorcentajeEditor1.disable();
      this.descuentoPorcentajeEditor1.setDataValue("0");
      this.descuentoValorEditor1.setDataValue("0");
      this.matriculas_box_valorProducto.setDataValue("0");
      this.costosLookup1.enable();
      this.fechaInicioEditor1.setDataValue(new Date());
      this.fechaFinEditor1.setDataValue(new Date());
      this.observacionEditor1.show();
      this.valorFinalDescuentoEditor1.enable();
      this.l_matriculas_lista_costos.update();
  },

  inscalumcostoLiveForm1BeginUpdate: function(inSender) {
      this.costosLookup1.disable();
      this.syLookup1.disable();
      this.personaLookup2.disable();
      this.observacionEditor1.hide();
      this.valorFinalDescuentoEditor1.disable();
      this.descuentoPorcentajeEditor1.enable();
  },
  inscpersonagrupofamiliarLiveForm1BeginInsert: function(inSender) {
      var conteo= this.l_busqueda_grupo_familiar.dataSetCount;
      if(conteo == undefined  || conteo == undefined || conteo == undefined){
        this.l_busqueda_grupo_familiar.update();
        this.l_busqueda_lista_tipo_personas.update();
        this.l_busqueda_listado_personas.update();
      }else{// alert("estan cargadas!");
      }      
      this.grupoFamiliarLookup1.enable();
      this.personaLookup1.enable();
  },
  inscpersonagrupofamiliarLiveForm1BeginUpdate: function(inSender) {
       var conteo= this.l_busqueda_grupo_familiar.dataSetCount;
       if(conteo == undefined  || conteo == undefined || conteo == undefined){
        this.l_busqueda_grupo_familiar.update();
        this.l_busqueda_lista_tipo_personas.update();
        this.l_busqueda_listado_personas.update();
       }
       else{// alert("estan cargadas!");
       }
       this.grupoFamiliarLookup1.disable();
       this.personaLookup1.disable();
  }, 
  inscalumcostoLiveForm1CancelEdit: function(inSender) {
       this.matriculas_box_valorProducto.disable();
  },
  matriculas_box_valorProductoChange: function(inSender, inDisplayValue, inDataValue) {
      var copiaValorProducto= this.matriculas_box_valorProducto.dataValue;
      this.valorFinalDescuentoEditor1.setDataValue(copiaValorProducto);
  },
  inscalumcostoLiveForm1InsertData: function(inSender) {
      this.matriculas_box_valorProducto.disable();
      //something to-do here when updateData
      var username= main.getUserName.getData().dataValue;
      var now= new Date().getTime();
     // var codigo_costo= main.inscalumcostoDataGrid1.selectedItem.getData().costos.idCosto;
      var codigo_persona= main.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().persona.idPersona;
      var inscrito= this.inscritoEditor1.getDataValue();
      var nombrecosto= this.matriculas_box_nombreProducto.getDataValue();
      var valor =this.matriculas_box_valorProducto.getDataValue();
      var porcdto= this.descuentoPorcentajeEditor1.getDataValue();
      var dtovalor= this.descuentoValorEditor1.getDataValue();
      var valorFinalDto= this.valorFinalDescuentoEditor1.getDataValue();
      var detalles= "[costo->"+nombrecosto+" ->inscrito->"+inscrito+" ->valor->"+valor+" ->%dto->"+porcdto+" ->dtovalor->"+dtovalor+" ->valor final->"+valorFinalDto+"]";
      console.log(detalles);
      var data= "accion: insertar -> idpersona: "+codigo_persona+" -> Detalles: ["+detalles+"]";
          this.log_insertaAcciones.setValue("usuario", username);
          this.log_insertaAcciones.setValue("accionRealizada", data);
          this.log_insertaAcciones.setValue("tablaAfectada", "insc_alumn_costo");
          this.log_insertaAcciones.setValue("fechaCreacion", now);
          this.log_insertaAcciones.setValue("fechaModificacion", now);
          this.insertaAccionesUsuarios.setDataSet(this.log_insertaAcciones); 
          this.insertaAccionesUsuarios.insertData();
  },
  inscalumcostoLiveForm1UpdateData: function(inSender) {
      this.matriculas_box_valorProducto.disable();
      //something to-do here when updateData
      var username= main.getUserName.getData().dataValue;
      var now= new Date().getTime();
      var codigo_persona= main.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().persona.idPersona;
      var inscrito= this.inscritoEditor1.getDataValue();
      var nombrecosto= this.matriculas_box_nombreProducto.getDataValue();
      var valor =this.matriculas_box_valorProducto.getDataValue();
      var porcdto= this.descuentoPorcentajeEditor1.getDataValue();
      var dtovalor= this.descuentoValorEditor1.getDataValue();
      var valorFinalDto= this.valorFinalDescuentoEditor1.getDataValue();
      var detalles= "[costo->"+nombrecosto+" ->inscrito->"+inscrito+" ->valor->"+valor+" ->%dto->"+porcdto+" ->dtovalor->"+dtovalor+" ->valor final->"+valorFinalDto+"]";
      console.log(detalles);
      var data= "accion: actualizar -> idpersona: "+codigo_persona+" -> Detalles: ["+detalles+"]";
          this.log_insertaAcciones.setValue("usuario", username);
          this.log_insertaAcciones.setValue("accionRealizada", data);
          this.log_insertaAcciones.setValue("tablaAfectada", "insc_alumn_costo");
          this.log_insertaAcciones.setValue("fechaCreacion", now);
          this.log_insertaAcciones.setValue("fechaModificacion", now);
          this.insertaAccionesUsuarios.setDataSet(this.log_insertaAcciones); 
          this.insertaAccionesUsuarios.insertData();
  },
  inscalumcostoLiveForm1DeleteData: function(inSender) {
      this.matriculas_box_valorProducto.disable();
      //something to-do here when updateData
      var username= main.getUserName.getData().dataValue;
      var now= new Date().getTime();
      var codigo_persona= main.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().persona.idPersona;
      var inscrito= this.inscritoEditor1.getDataValue();
      var nombrecosto= this.matriculas_box_nombreProducto.getDataValue();
      var valor =this.matriculas_box_valorProducto.getDataValue();
      var porcdto= this.descuentoPorcentajeEditor1.getDataValue();
      var dtovalor= this.descuentoValorEditor1.getDataValue();
      var valorFinalDto= this.valorFinalDescuentoEditor1.getDataValue();
      var detalles= "[costo->"+nombrecosto+" ->inscrito->"+inscrito+" ->valor->"+valor+" ->%dto->"+porcdto+" ->dtovalor->"+dtovalor+" ->valor final->"+valorFinalDto+"]";
      console.log(detalles);
      var data= "accion: borrar -> idpersona: "+codigo_persona+" -> Detalles: ["+detalles+"]";
          this.log_insertaAcciones.setValue("usuario", username);
          this.log_insertaAcciones.setValue("accionRealizada", data);
          this.log_insertaAcciones.setValue("tablaAfectada", "insc_alumn_costo");
          this.log_insertaAcciones.setValue("fechaCreacion", now);
          this.log_insertaAcciones.setValue("fechaModificacion", now);
          this.insertaAccionesUsuarios.setDataSet(this.log_insertaAcciones); 
          this.insertaAccionesUsuarios.insertData();
  },
  /**INICIO BUSCAR RAPIDO**/
  busqueda_buscarClick: function(inSender, inEvent) {
      this.l_busqueda_insc_alum_curso.update();
  },
  busqueda_box_apellido1Change: function(inSender, inDisplayValue, inDataValue) {
      this.busqueda_buscar.click();
  },
  busqueda_box_apellido2Change: function(inSender, inDisplayValue, inDataValue) {
      this.busqueda_buscar.click();
  },
  busqueda_box_nombre1Change: function(inSender, inDisplayValue, inDataValue) {
      this.busqueda_buscar.click();
  },
  busqueda_box_nombre2Change: function(inSender, inDisplayValue, inDataValue) {
      this.busqueda_buscar.click();
  },
  busqueda_box_codigoChange: function(inSender, inDisplayValue, inDataValue) {
      this.busqueda_buscar.click();
  }, 
  /***INICIO BUSCAR RAPIDO**/  
  busqueda_limpiarClick: function(inSender, inEvent) {
      this.busqueda_box_apellido1.clear();
      this.busqueda_box_apellido2.clear();
      this.busqueda_box_nombre1.clear();
      this.busqueda_box_nombre2.clear();
      this.busqueda_box_codigo.clear();
      this.busqueda_sel_grado.clear();
      this.busqueda_sel_curso.clear();
      this.l_busqueda_insc_alum_curso.clearData();
      this.l_matriculas_inscalumcostoLiveVariable1.clearData();
      this.l_busqueda_informacion_promocion.clearData();     
      this.l_busqueda_inscpersonagrupofamiliarLiveVariable1.clearData();
      this.tiny_pic.setSource("resources/images/buttons/noimg.gif");
      this.label_estudiante_seleccionado.setCaption("ESTUDIANTE NO SELECCIONADO");
  },
  busqueda_personas_cursoSelectionChanged: function(inSender) {
      this.tiny_pic.setSource("resources/images/buttons/noimg.gif");
  },
  b_reciboMatriculaClick: function(inSender, inEvent) {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matriculas_box_param_idp.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT007",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
  },
  b_reciboMensualidadesClick: function(inSender, inEvent) {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matriculas_box_param_idp.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT006",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault(); 
  },
  b_contratoMatriculaClick: function(inSender, inEvent) {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matriculas_box_param_idp.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT023NEW",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
  },
  b_contratoTransporteClick: function(inSender, inEvent) {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matriculas_box_param_idp.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT002",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();        
  },
  b_contratoAlimentacionClick: function(inSender, inEvent) {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matriculas_box_param_idp.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT003",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();    
  },
  b_contratoSeguroClick: function(inSender, inEvent) {
     var url= "http://aprendoz.rochester.edu.co/recursos/SOLICITUD_VG_EDUCATIVO_SIMPLIFICADA.pdf";
     window.open(url, "_BLANK");  
  },
  /*Ventanas de carga....*/ 
  l_busqueda_listado_personasBeforeUpdate: function(inSender, ioInput) {
      app.pageDialog.showPage("Mensaje_ok", true, 290,60);
  },
  l_busqueda_listado_personasSuccess: function(inSender, inDeprecated) {
      app.pageDialog.dismiss("Mensaje_ok");
  },
  JSMatriculaError: function(inSender, inError) {
      app.pageDialog.showPage("Mensaje_error", false, 500,150);
  },
  JSMatriculaSuccess: function(inSender, inDeprecated) {
      app.pageDialog.showPage("Mensaje_right", false, 500,150);
      var username= main.getUserName.getData().dataValue;
      var now= new Date().getTime();
     // var codigo_costo= main.inscalumcostoDataGrid1.selectedItem.getData().costos.idCosto;
      var codigo_persona= main.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().persona.idPersona;
      var data= "accion: matricular -> idpersona: "+codigo_persona;
          this.log_insertaAcciones.setValue("usuario", username);
          this.log_insertaAcciones.setValue("accionRealizada", data);
          this.log_insertaAcciones.setValue("tablaAfectada", "insc_alumn_curso / matricula");
          this.log_insertaAcciones.setValue("fechaCreacion", now);
          this.log_insertaAcciones.setValue("fechaModificacion", now);
          this.insertaAccionesUsuarios.setDataSet(this.log_insertaAcciones); 
          this.insertaAccionesUsuarios.insertData();
  },
  costos_butt_limpiarClick: function(inSender, inEvent) {
      this.costos_sel_grado.clear();
      this.costos_box_nombre.clear();
      this.costos_box_codigo.clear();
      this.costosLiveVariable1.clearData();
  },
  b_pagareClick: function(inSender, inEvent) {
     var url= "http://bit2media.com/servicios/pagare.pdf";
     window.open(url, "_BLANK");
  },
  a_sv_matriculadosSuccess: function(inSender, inDeprecated) {
     this.reportes_html.setValue("html","<iframe width='100%' height='100%' name='reportes1' id='reportes1' src='"+inSender.getValue("dataValue")+"'>");
  },
  informes_butt_generar_2Click: function(inSender, inEvent) {
    var typeofdoc=this.informes_sel_tipo_documento.getDataValue();
    var src="matriculas_por_grado_a.jasper";
    var hash={
              "typeDoc" : typeofdoc,
              "file" : src 
             };
    this.a_sv_matriculados_grado.input.setValue("parameters",hash);
    this.a_sv_matriculados_grado.update();
  },
  a_sv_matriculados_gradoSuccess: function(inSender, inDeprecated) {
      this.reportes_html.setValue("html","<iframe width='100%' height='100%' name='reportes1' id='reportes1' src='"+inSender.getValue("dataValue")+"'>");
  },
  butt_reportesClick: function(inSender, inEvent) {
      this.charts.hide();
      this.panel8.show();
      this.reportes_html.show();
  },
  butt_graficosClick: function(inSender, inEvent) {
    this.l_graficos_liveVariable_contador_personas_fecha.update();
      this.panel8.hide();
      this.reportes_html.hide();
      this.charts.show();
  },
  screenshotClick: function(inSender) {
      if(dojo.isIE >= 6){ // only IE6 and below
        url= "http://www.iegallery.com/Addons/Details/14299";
        window.open(url,"_BLANK");    
      }if(dojo.isSafari >= 4){ // only IE6 and below
        url= "http://s3.amazonaws.com/diigo/as/update/as-1.2.safariextz";
        window.open(url,"_BLANK");   
      }if(dojo.isFF >= 10){ // only Firefox 10 and lower
        url= "http://addons.mozilla.org/firefox/downloads/latest/287841/addon-287841-latest.xpi?src=dp-btn-primary";
        window.open(url,"_BLANK");  
      }if(dojo.isOpera >= 8){ // only Opera
        alert("This Extension is not available for Opera Web Browser. We recomend use Google Chrome or Mozilla Firefox."); 
      }if(dojo.isChrome >= 12){
        url= "http://chrome.google.com/webstore/detail/alelhddbbhepgpmgidjdcjakblofbmce?utm_source=gmail";
        window.open(url,"_BLANK"); 
      }
  },
  getUserNameSuccess: function(inSender, inDeprecated) {
     var setUser= main.getUserName.getData().dataValue;
     main.getFullData.input.setValue("user", setUser);
     main.getFullData.update();
     main.a_informacionUsuario.input.setValue("user", setUser);
     main.a_informacionUsuario.update();
  },
  getFullDataSuccess: function(inSender, inDeprecated) {
     var json= main.getFullData.getItem(0);
     var a1= json.data.apellido1;
     var a2= json.data.apellido2;
     var n1= json.data.nombre1;
     var n2= json.data.nombre2;
     var nombreCompleto= n1+" "+n2+" "+a1+" "+a2;
     this.bienvenidaLabel.setCaption("BIENVENIDO, "+nombreCompleto);
  },
  button1Click: function(inSender, inEvent) {
      main.getFullData.update();
      var getter = main.getFullData.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.informes_sel_sy.getDataValue();
      var formatType= this.informes_sel_tipo_documento.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT001",
               format: formatType,
               params: { sy: psy }
         }
       });
       inEvent.preventDefault();
  },
  l_matriculas_inscalumcostoLiveVariable1Success: function(inSender, inDeprecated) {
     this.l_matriculas_lista_costos.update();  
  },
  busqueda_butt_goToClick: function(inSender) {
    var seleccion= main.busqueda_inscpersonagrupofamiliarDataGrid1.getEmptySelection();
    var dataObject= main.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.data.persona.data;
    var mensaje= "PROCESO DE MATRICULA PARA "+dataObject.nombre1+" "+dataObject.nombre2+" "+dataObject.apellido1+" "+dataObject.nombre2;
    if(seleccion == false){
      this.label_estudiante_seleccionado.setCaption(mensaje);
      this.iraMatriculas.update();
    }else{
      alert("Asegurese de seleccionar un Estudiante de la tabla Grupo Familiar antes de continuar.");
    }  
  },
  promocionLiveForm1UpdateData: function(inSender) {
      var username= main.getUserName.getData().dataValue;
      var now= new Date().getTime();
      var idpromocion= this.idPromocionEditor1.getDataValue();
      var codigo_persona= this.personaLookup3.getDataValue();
      var inscrito= this.autorizadoFinancieraEditor1.getDataValue();
      var comentario= this.commentfinancEditor1.getDataValue();
      var inscrito_cra= this.checkBoxEditor1.getDataValue();
      var comentario_cra= this.textAreaEditor1.getDataValue();
      var detalles= "[promocion->"+idpromocion+" ->financiera_inscrito->"+inscrito+" ->comentario-financiera-> "+comentario+"->cra_inscrito->"+inscrito_cra+" ->comentario-cra "+comentario_cra+"]";
      console.log(detalles);
      var data= "accion: actualizar -> idpersona: "+codigo_persona+" -> Detalles: ["+detalles+"]";
          this.log_insertaAcciones.setValue("usuario", username);
          this.log_insertaAcciones.setValue("accionRealizada", data);
          this.log_insertaAcciones.setValue("tablaAfectada", "promocion");
          this.log_insertaAcciones.setValue("fechaCreacion", now);
          this.log_insertaAcciones.setValue("fechaModificacion", now);
          this.insertaAccionesUsuarios.setDataSet(this.log_insertaAcciones); 
          this.insertaAccionesUsuarios.insertData();         
  },
  _end: 0
});