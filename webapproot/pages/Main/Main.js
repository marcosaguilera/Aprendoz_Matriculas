dojo.declare("Main", wm.Page, {
  start: function() {
    
  },
  a_sySuccess: function(inSender, inDeprecated) {
    try {
      this.busqueda_sel_sy.setDataValue(4+1);
      this.costos_sel_sy.setDataValue(4+1);
 
    } catch(e) {
      console.error('ERROR IN a_sySuccess: ' + e); 
    } 
  },
  busqueda_inscpersonagrupofamiliarDataGrid1Selected: function(inSender, inIndex) {
    try {
      this.tiny_pic.setSource("http://aprendoz.rochester.edu.co/stds/"+this.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().persona.codigo+".Jpeg");
      
    } catch(e) {
      console.error('ERROR IN busqueda_inscpersonagrupofamiliarDataGrid1Selected: ' + e); 
    } 
  },

  inscalumcostoDataGrid1SetColumns: function(inSender, inColumn, inIndex) {
    try {
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
       
    } catch(e) {
      console.error('ERROR IN inscalumcostoDataGrid1SetColumns: ' + e); 
    } 
  },
  
  inscalumcostoDataGrid1Selected: function(inSender, inIndex) {
    try {
      this.matriculas_box_nombreProducto.setDataValue(this.inscalumcostoDataGrid1.selectedItem.getData().costos.nombreProducto);
      this.matriculas_box_valorProducto.setDataValue(this.inscalumcostoDataGrid1.selectedItem.getData().costos.valor);
      this.matriculas_check_nuevo.setChecked(this.inscalumcostoDataGrid1.selectedItem.getData().costos.nuevo);
      this.matriculas_check_obligatorio.setChecked(this.inscalumcostoDataGrid1.selectedItem.getData().costos.obligatorio);
      this.matriculas_check_anual.setChecked(this.inscalumcostoDataGrid1.selectedItem.getData().costos.anual);

    } catch(e) {
      console.error('ERROR IN inscalumcostoDataGrid1Selected: ' + e); 
    } 
  },
  
  descuentoPorcentajeEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var Valor_Producto= this.matriculas_box_valorProducto.dataValue;
      var Porcentaje= this.descuentoPorcentajeEditor1.dataValue;
      var total= (Valor_Producto*Porcentaje)/100;
      this.descuentoValorEditor1.setDataValue(total);
      
    } catch(e) {
      console.error('ERROR IN descuentoPorcentajeEditor1Change: ' + e); 
    } 
  },
  
  descuentoValorEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var Valor_Producto1= this.matriculas_box_valorProducto.dataValue;
    // debugger;
     var Valor_Dto= this.descuentoValorEditor1.dataValue;
    // debugger;
     var total_pagar= Valor_Producto1-Valor_Dto;
    // debugger;
     this.valorFinalDescuentoEditor1.setDataValue(total_pagar);
      
    } catch(e) {
      console.error('ERROR IN descuentoValorEditor1Change: ' + e); 
    } 
  },
  
  l_MatriculasShow: function(inSender) {
    try {
    var _selected= this.busqueda_inscpersonagrupofamiliarDataGrid1.getEmptySelection();
    var _getType= this.busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.getData().tipoPersona.idTipoPersona;
     /*mejoramiento del codigo*/
     if(_selected == true || _getType != 1){  
      alert("ATENCIÓN: \n\nDebe seleccionar un 'Estudiante' para continuar con el proceso. Regrese a la pestaña 'Busqueda de Alumnos' e intentelo nuevamente.");
      this.l_matriculas_inscalumcostoLiveVariable1.clearData();   
     }else if(_selected== false && _getType == 1){      
      this.l_matriculas_inscalumcostoLiveVariable1.update(); 
      } 
    } catch(e) {
      console.error('ERROR IN l_MatriculasShow: ' + e); 
    }},
  nuevoClick: function(inSender, inEvent) {
    try {
      this.busqueda_panel1.hide();
      this.inscpersonagrupofamiliarDetailsPanel.show();
      
    } catch(e) {
      console.error('ERROR IN nuevoClick: ' + e); 
    }},
  inscpersonagrupofamiliarLiveForm1Success: function(inSender, inData) {
    try {
      this.l_busqueda_inscpersonagrupofamiliarLiveVariable1.update();
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
      
    } catch(e) {
      console.error('ERROR IN inscpersonagrupofamiliarLiveForm1Success: ' + e); 
    }},
  inscpersonagrupofamiliarLiveForm1UpdateData: function(inSender) {
    try {
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
      
      
    } catch(e) {
      console.error('ERROR IN inscpersonagrupofamiliarLiveForm1UpdateData: ' + e); 
    } 
  },

  inscpersonagrupofamiliarLiveForm1DeleteData: function(inSender) {
    try {
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
      
    } catch(e) {
      console.error('ERROR IN inscpersonagrupofamiliarLiveForm1DeleteData: ' + e); 
    } 
  },
  
  
  inscpersonagrupofamiliarLiveForm1InsertData: function(inSender) {
    try {
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_panel1.show();
      
    } catch(e) {
      console.error('ERROR IN inscpersonagrupofamiliarLiveForm1InsertData: ' + e); 
    } 
  },
  
  /*
  *acciones en formulario de matriculas
  *
  */
  busqueda_personas_cursoSelected: function(inSender, inIndex) {
    try {
     this.l_busqueda_inscpersonagrupofamiliarLiveVariable1.update();
     var _idsy=  this.busqueda_sel_sy.getDataValue();
     var _sy= _idsy-1;
     this.l_busqueda_informacion_promocion.filter.setValue("id.syIdSy", _sy);
     this.l_busqueda_informacion_promocion.update();
      
    } catch(e) {
      console.error('ERROR IN busqueda_personas_cursoSelected: ' + e); 
    } 
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
    try {
      this.costosLookup1.disable();
      this.syLookup1.disable();
      this.personaLookup2.disable();
      this.observacionEditor1.hide();
      this.valorFinalDescuentoEditor1.disable();
      this.descuentoPorcentajeEditor1.enable();
      
    } catch(e) {
      console.error('ERROR IN inscalumcostoLiveForm1BeginUpdate: ' + e); 
    } 
  },
  inscpersonagrupofamiliarLiveForm1BeginInsert: function(inSender) {
    try {
       if(this.l_busqueda_grupo_familiar.dataSetCount == undefined  || this.l_busqueda_lista_tipo_personas.dataSetCount == undefined || this.l_busqueda_listado_personas.dataSetCount == undefined){
        this.l_busqueda_grupo_familiar.update();
        this.l_busqueda_lista_tipo_personas.update();
        this.l_busqueda_listado_personas.update();
        }
       else{// alert("estan cargadas!");
       }
       
      this.grupoFamiliarLookup1.enable();
      this.personaLookup1.enable();
      
    } catch(e) {
      console.error('ERROR IN inscpersonagrupofamiliarLiveForm1BeginInsert: ' + e); 
    } 
  },
  inscpersonagrupofamiliarLiveForm1BeginUpdate: function(inSender) {
    try {
       if(this.l_busqueda_grupo_familiar.dataSetCount == undefined  || this.l_busqueda_lista_tipo_personas.dataSetCount == undefined || this.l_busqueda_listado_personas.dataSetCount == undefined){
        this.l_busqueda_grupo_familiar.update();
        this.l_busqueda_lista_tipo_personas.update();
        this.l_busqueda_listado_personas.update();
        }
       else{// alert("estan cargadas!");
       }
       this.grupoFamiliarLookup1.disable();
       this.personaLookup1.disable();
      
    } catch(e) {
      console.error('ERROR IN inscpersonagrupofamiliarLiveForm1BeginUpdate: ' + e); 
    } 
  },
 
  inscalumcostoLiveForm1CancelEdit: function(inSender) {
    try {
       this.matriculas_box_valorProducto.disable();
      
    } catch(e) {
      console.error('ERROR IN inscalumcostoLiveForm1CancelEdit: ' + e); 
    } 
  },
  matriculas_box_valorProductoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      var copiaValorProducto= this.matriculas_box_valorProducto.dataValue;
      this.valorFinalDescuentoEditor1.setDataValue(copiaValorProducto);
      
    } catch(e) {
      console.error('ERROR IN matriculas_box_valorProductoChange: ' + e); 
    } 
  },
  inscalumcostoLiveForm1InsertData: function(inSender) {
    try {
      this.matriculas_box_valorProducto.disable();
      
    } catch(e) {
      console.error('ERROR IN inscalumcostoLiveForm1InsertData: ' + e); 
    } 
  },
  inscalumcostoLiveForm1UpdateData: function(inSender) {
    try {
      this.matriculas_box_valorProducto.disable();
      
    } catch(e) {
      console.error('ERROR IN inscalumcostoLiveForm1UpdateData: ' + e); 
    } 
  },
  
  /**
  *INICIO BUSCAR RAPIDO
  **/
  busqueda_buscarClick: function(inSender, inEvent) {
    try {
      this.l_busqueda_insc_alum_curso.update();
      
    } catch(e) {
      console.error('ERROR IN busqueda_buscarClick: ' + e); 
    } 
  },
  
  busqueda_box_apellido1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.busqueda_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN busqueda_box_apellido1Change: ' + e); 
    } 
  },
  busqueda_box_apellido2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.busqueda_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN busqueda_box_apellido2Change: ' + e); 
    } 
  },
  busqueda_box_nombre1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.busqueda_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN busqueda_box_nombre1Change: ' + e); 
    } 
  },
  busqueda_box_nombre2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.busqueda_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN busqueda_box_nombre2Change: ' + e); 
    } 
  },
  busqueda_box_codigoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.busqueda_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN busqueda_box_codigoChange: ' + e); 
    } 
  }, 
  /**
  *INICIO BUSCAR RAPIDO
  **/  
  busqueda_mostrarClick: function(inSender, inEvent) {
    try {
      this.busqueda_ocultar.enable();
      this.busqueda_panel1.hide();
      this.inscpersonagrupofamiliarDetailsPanel.show();
      this.busqueda_mostrar.disable();
      
    } catch(e) {
      console.error('ERROR IN busqueda_mostrarClick: ' + e); 
    } 
  },
  busqueda_ocultarClick: function(inSender, inEvent) {
    try {
      this.busqueda_mostrar.enable();
      this.busqueda_panel1.show();
      this.inscpersonagrupofamiliarDetailsPanel.hide();
      this.busqueda_ocultar.disable();
      
    } catch(e) {
      console.error('ERROR IN busqueda_ocultarClick: ' + e); 
    } 
  },
  busqueda_limpiarClick: function(inSender, inEvent) {
    try {
      this.busqueda_box_apellido1.clear();
      this.busqueda_box_apellido2.clear();
      this.busqueda_box_nombre1.clear();
      this.busqueda_box_nombre2.clear();
      this.busqueda_box_codigo.clear();
      this.busqueda_sel_grado.clear();
      this.busqueda_sel_curso.clear();
      this.l_busqueda_insc_alum_curso.clearData();
      this.l_busqueda_inscpersonagrupofamiliarLiveVariable1.clearData();
      this.tiny_pic.setSource("resources/images/buttons/noimg.gif");
      
    } catch(e) {
      console.error('ERROR IN busqueda_limpiarClick: ' + e); 
    }},
  busqueda_personas_cursoSelectionChanged: function(inSender) {
    try {
      this.tiny_pic.setSource("resources/images/buttons/noimg.gif");
      
    } catch(e) {
      console.error('ERROR IN busqueda_personas_cursoSelectionChanged: ' + e); 
    } 
  },
  b_reciboMatriculaClick: function(inSender, inEvent) {
    try {
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
      
    } catch(e) {
      console.error('ERROR IN b_reciboMatriculaClick: ' + e); 
    } 
  },
  b_reciboMensualidadesClick: function(inSender, inEvent) {
    try {
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
      
    } catch(e) {
      console.error('ERROR IN b_reciboMensualidadesClick: ' + e); 
    } 
  },
  b_contratoMatriculaClick: function(inSender, inEvent) {
    try {
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
               uri: "/aprendozreports/MAT008",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
      
    } catch(e) {
      console.error('ERROR IN b_contratoMatriculaClick: ' + e); 
    }},
  b_contratoTransporteClick: function(inSender, inEvent) {
    try {
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
      
    } catch(e) {
      console.error('ERROR IN b_contratoMatricula1Click: ' + e); 
    }},
  b_contratoAlimentacionClick: function(inSender, inEvent) {
    try {
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
      
    } catch(e) {
      console.error('ERROR IN b_contratoMatricula2Click: ' + e); 
    }},
  b_contratoSeguroClick: function(inSender, inEvent) {
    try {
     var url= "http://aprendoz.rochester.edu.co/recursos/SOLICITUD_VG_EDUCATIVO_SIMPLIFICADA.pdf";
     window.open(url, "_BLANK");  
    } catch(e) {
      console.error('ERROR IN b_contratoMatricula3Click: ' + e); 
    }},
  /*Ventanas de carga....*/ 
  l_busqueda_listado_personasBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Mensaje_ok", true, 290,60);
      
    } catch(e) {
      console.error('ERROR IN l_busqueda_listado_personasBeforeUpdate: ' + e); 
    }},
  l_busqueda_listado_personasSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Mensaje_ok");
      
    } catch(e) {
      console.error('ERROR IN l_busqueda_listado_personasSuccess: ' + e); 
    }},
  JSMatriculaError: function(inSender, inError) {
    try {
      app.pageDialog.showPage("Mensaje_error", false, 500,150);
      
    } catch(e) {
      console.error('ERROR IN JSMatriculaError: ' + e); 
    }},
  JSMatriculaSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.showPage("Mensaje_right", false, 500,150);
      
    } catch(e) {
      console.error('ERROR IN JSMatriculaSuccess: ' + e); 
    }},
  costos_butt_limpiarClick: function(inSender, inEvent) {
    try {
      //this.costos_sel_sy.clear();
      this.costos_sel_grado.clear();
      this.costos_box_nombre.clear();
      this.costos_box_codigo.clear();
      this.costosLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN costos_butt_limpiarClick: ' + e); 
    }},
  b_pagareClick: function(inSender, inEvent) {
    try {
     var url= "http://bit2media.com/servicios/pagare.pdf";
     window.open(url, "_BLANK");
    } catch(e) {
      console.error('ERROR IN b_pagareClick: ' + e); 
    }},
  a_sv_matriculadosSuccess: function(inSender, inDeprecated) {
    try {
     this.reportes_html.setValue("html","<iframe width='100%' height='100%' name='reportes1' id='reportes1' src='"+inSender.getValue("dataValue")+"'>");
      
    } catch(e) {
      console.error('ERROR IN a_sv_matriculadosSuccess: ' + e); 
    }},
  informes_butt_generar_2Click: function(inSender, inEvent) {
    try {
    var typeofdoc=this.informes_sel_tipo_documento.getDataValue();
    var src="matriculas_por_grado_a.jasper";
    var hash={
              "typeDoc" : typeofdoc,
              "file" : src 
             };
   this.a_sv_matriculados_grado.input.setValue("parameters",hash);
   this.a_sv_matriculados_grado.update();
      
    } catch(e) {
      console.error('ERROR IN informes_butt_generar_2Click: ' + e); 
    }},
  a_sv_matriculados_gradoSuccess: function(inSender, inDeprecated) {
    try {
     // this.reportes_html.setValue("html","<iframe width='100%' height='100%' name='reportes1' id='reportes1' src='"+window.location.href+inDeprecated+"'>");
      this.reportes_html.setValue("html","<iframe width='100%' height='100%' name='reportes1' id='reportes1' src='"+inSender.getValue("dataValue")+"'>");
      
    } catch(e) {
      console.error('ERROR IN a_sv_matriculados_gradoSuccess: ' + e); 
    }},
  butt_reportesClick: function(inSender, inEvent) {
    try {
      this.charts.hide();
      this.panel8.show();
      this.reportes_html.show();
      
    } catch(e) {
      console.error('ERROR IN butt_reportesClick: ' + e); 
    }},
  butt_graficosClick: function(inSender, inEvent) {
    try {
    this.l_graficos_liveVariable_contador_personas_fecha.update();
      this.panel8.hide();
      this.reportes_html.hide();
      this.charts.show();
  
    } catch(e) {
      console.error('ERROR IN butt_graficosClick: ' + e); 
    }},
  screenshotClick: function(inSender) {
    try {
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
    } catch(e) {
      console.error('ERROR IN screenshotClick: ' + e); 
    }},
  getUserNameSuccess: function(inSender, inDeprecated) {
    try {
     var setUser= main.getUserName.getData().dataValue;
     main.getFullData.input.setValue("user", setUser);
     main.getFullData.update();
     main.a_informacionUsuario.input.setValue("user", setUser);
     main.a_informacionUsuario.update();
     
     } catch(e) {
     console.error('ERROR IN getUserNameSuccess: ' + e); 
    }},
  getFullDataSuccess: function(inSender, inDeprecated) {
    try {
     var json= main.getFullData.getItem(0);
     var a1= json.data.apellido1;
     var a2= json.data.apellido2;
     var n1= json.data.nombre1;
     var n2= json.data.nombre2;
     var nombreCompleto= n1+" "+n2+" "+a1+" "+a2;
     this.bienvenidaLabel.setCaption("BIENVENIDO, "+nombreCompleto);
      
    } catch(e) {
      console.error('ERROR IN getFullDataSuccess: ' + e); 
    }},
  button1Click: function(inSender, inEvent) {
    try {
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
      
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    }},
  l_matriculas_inscalumcostoLiveVariable1Success: function(inSender, inDeprecated) {
    try {
     this.l_matriculas_lista_costos.update();  
      
    } catch(e) {
      console.error('ERROR IN l_matriculas_inscalumcostoLiveVariable1Success: ' + e); 
    }},
  
  _end: 0
});

eval(wm.load("resources/javascript/print6.js"));