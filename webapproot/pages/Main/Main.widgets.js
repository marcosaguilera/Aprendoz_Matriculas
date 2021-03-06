Main.widgets = {
	l_busqueda_insc_alum_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.VistaInscAlumnCurso","orderBy":"desc: id.schoolYear, asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.apellido1","source":"busqueda_box_apellido1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.apellido2","source":"busqueda_box_apellido2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.nombre1","source":"busqueda_box_nombre1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.nombre2","source":"busqueda_box_nombre2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"busqueda_box_codigo.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"busqueda_sel_curso.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"busqueda_sel_sy.dataValue"}, {}]
		}]
	}],
	a_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Sy","orderBy":"desc: idSy"}, {"onSuccess":"a_sySuccess"}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Grado"}, {}],
	L_busquedas_listas_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"busqueda_sel_grado.dataValue"}, {}]
		}]
	}],
	l_busqueda_inscpersonagrupofamiliarLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscpersonagrupofamiliarLiveView1","orderBy":"asc: tipoPersona.idTipoPersona"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar.idGrupoFamiliar","source":"busqueda_personas_curso.selectedItem.id.grupoFamiliarIdGrupoFamiliar"}, {}]
		}]
	}],
	iraMatriculas: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"l_Matriculas"}, {}]
			}]
		}]
	}],
	l_matriculas_inscalumcostoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumcostoLiveView1","orderBy":"desc: costos.anual, asc: costos.nombreProducto"}, {"onSuccess":"l_matriculas_inscalumcostoLiveVariable1Success"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.persona.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.costos.anual","source":"matriculas_tipo_productos.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"busqueda_sel_sy.dataValue"}, {}]
		}]
	}],
	l_busqueda_grupo_familiar: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.GrupoFamiliar"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.idGrupoFamiliar","source":"busqueda_personas_curso.selectedItem.id.grupoFamiliarIdGrupoFamiliar"}, {}]
		}]
	}],
	l_busqueda_listado_personas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Persona"}, {"onBeforeUpdate":"l_busqueda_listado_personasBeforeUpdate","onSuccess":"l_busqueda_listado_personasSuccess"}],
	l_busqueda_lista_tipo_personas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.TipoPersona"}, {}],
	l_matriculas_lista_costos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Costos","orderBy":"asc: nombreProducto"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"busqueda_personas_curso.selectedItem.id.idGrado"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"busqueda_personas_curso.selectedItem.id.idSy"}, {}]
		}]
	}],
	l_matriculas_anua_mensual_no: ["wm.Variable", {"type":"EntryData","json":"[\n\t{\n\t\t\"name\": \"Anual\", \n\t\t\"dataValue\": \"true\"\n\t}, \n\t{\n\t\t\"name\": \"Mensual\", \n\t\t\"dataValue\": \"false\"\n\t}, \n\t{\n\t\t\"name\": \"Ambos\"\n\t}\n]"}, {}],
	l_busqueda_informacion_promocion: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaPersonasPromocion"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"busqueda_box_codigo.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.apellido1","source":"busqueda_box_apellido1.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.apellido2","source":"busqueda_box_apellido2.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.nombre1","source":"busqueda_box_nombre1.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.id.nombre2","source":"busqueda_box_nombre2.dataValue"}, {}]
		}]
	}],
	JSMatricula: ["wm.ServiceVariable", {"service":"JSCreaMatricula","operation":"proced_insertar_matricula_estd"}, {"onError":"JSMatriculaError","onSuccess":"JSMatriculaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"proced_insertar_matricula_estdInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"matriculas_box_param_idp.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Curso","source":"matriculas_box_param_idc.dataValue"}, {}],
				wire2: ["wm.Wire", {"targetProperty":"Pr_Id_Sy","source":"matriculas_box_param_idsy.dataValue"}, {}],
				wire3: ["wm.Wire", {"targetProperty":"coment","source":"matriculas_box_param_comentario.dataValue"}, {}]
			}]
		}]
	}],
	costosLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.costosLiveView1","ignoreCase":true,"orderBy":"desc: nuevo, desc: anual, asc: nombreProducto"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"costos_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"costos_sel_grado.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.nombreProducto","source":"costos_box_nombre.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.codigo","source":"costos_box_codigo.dataValue"}, {}]
		}]
	}],
	logOut: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"logOutNC"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	logOutNC: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	a_sv_matriculados: ["wm.ServiceVariable", {"service":"matriculados","operation":"getReport"}, {"onSuccess":"a_sv_matriculadosSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	a_sv_matriculados_grado: ["wm.ServiceVariable", {"service":"matriculadosGrado","operation":"getReport"}, {"onSuccess":"a_sv_matriculados_gradoSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	capturador: ["wm.ServiceVariable", {"service":"screenshot","operation":"sampleJavaOperation"}, {}, {
		input: ["wm.ServiceInput", {"type":"sampleJavaOperationInputs"}, {}]
	}],
	getFullData: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getUserData"}, {"onSuccess":"getFullDataSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserDataInputs"}, {}]
	}],
	getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"getUserNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	serviceVariable1: ["wm.ServiceVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	a_informacionUsuario: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"showInformationUser"}, {}, {
		input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}]
	}],
	promocionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.promocionLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.apellido1","source":"promocion_apellido1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.apellido2","source":"promocion_apellido2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.nombre1","source":"promocion_nombre1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.persona.nombre2","source":"promocion_nombre2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"promocion_sy.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.persona.codigo","source":"promocion_codigo.dataValue"}, {}]
		}]
	}],
	log_insertaAcciones: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.LogMatriculasAccionesUsuarios"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
		CenteredPageContainer: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			Centered_main_frame: ["wm.Template", {"_classes":{"domNode":["wm_SilverBlueTheme_MainOutsetPanel"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
				panel_principal: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_WhiteOutsetPanel"]},"height":"100%","width":"100%","borderColor":"#a61c1c","roles":["7","10","11","13","15","20","21","22","23","25","24","14","8","9","16","17","18","19"]}, {}, {
					TitleBar: ["wm.Template", {"_classes":{"domNode":["wm_SilverBlueTheme_MainOutsetPanel"]},"height":"73px","horizontalAlign":"left","verticalAlign":"top","width":"100%","padding":"5","layoutKind":"left-to-right"}, {}, {
						headerPanel1: ["wm.Panel", {"height":"62px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							logo: ["wm.Picture", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"height":"100%","border":"0","width":"197px","source":"resources/images/logos/logo_aprendoz_nuevo.png","aspect":"v","padding":"10"}, {}],
							spacer2: ["wm.Spacer", {"height":"30px","width":"100%"}, {}],
							panel3: ["wm.Panel", {"height":"100%","width":"316px","horizontalAlign":"right","verticalAlign":"bottom"}, {}, {
								picture1: ["wm.Picture", {"height":"100%","border":"0","width":"50px","source":"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-6/256/logout-icon.png","aspect":"h"}, {"onclick":"logOut"}],
								bienvenidaLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"30px","width":"100%","border":"0","align":"right","padding":"0","margin":"0"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}],
						logo_rochester: ["wm.Picture", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_BackgroundColor_White"]},"height":"100%","border":"0","width":"100px","source":"http://losmejorescolegios.com/images/colegios/colegio-rochester/colegio_rochester_logo2.jpg","aspect":"h","showing":false}, {}]
					}],
					main_page: ["wm.TabLayers", {}, {}, {
						l_Busquedas: ["wm.Layer", {"caption":"Busqueda de Alumnos","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							panel_busquedas: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"110px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								layers2: ["wm.Layers", {}, {}, {
									layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										busqueda_box_apellido1: ["wm.TextEditor", {"width":"100%","caption":"1er Apellido"}, {"onchange":"busqueda_box_apellido1Change"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										busqueda_box_apellido2: ["wm.TextEditor", {"width":"100%","caption":"2do Apellido"}, {"onchange":"busqueda_box_apellido2Change"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										busqueda_box_nombre1: ["wm.TextEditor", {"width":"100%","caption":"1er Nombre"}, {"onchange":"busqueda_box_nombre1Change"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										busqueda_box_nombre2: ["wm.TextEditor", {"width":"100%","caption":"2do Nombre"}, {"onchange":"busqueda_box_nombre2Change"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}]
									}]
								}],
								layers1: ["wm.Layers", {}, {}, {
									layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										busqueda_box_codigo: ["wm.TextEditor", {"width":"100%","caption":"Código"}, {"onchange":"busqueda_box_codigoChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										busqueda_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
												}]
											}]
										}],
										busqueda_sel_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado"}, {"onchange":"L_busquedas_listas_cursos"}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}],
										busqueda_sel_curso: ["wm.SelectEditor", {"width":"100%","caption":"Curso"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"L_busquedas_listas_cursos","expression":undefined}, {}]
												}]
											}]
										}]
									}]
								}],
								layers3: ["wm.Layers", {"width":"70%"}, {}, {
									layer7: ["wm.Layer", {"caption":"layer7","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										spacer6: ["wm.Spacer", {"height":"2px","width":"96px"}, {}],
										busqueda_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","borderColor":"#c4161d","margin":"0","caption":"Buscar"}, {"onclick":"busqueda_buscarClick"}],
										spacer4: ["wm.Spacer", {"height":"2px","width":"96px"}, {}],
										busqueda_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","borderColor":"#3652a4","margin":"0","caption":"Limpiar"}, {"onclick":"busqueda_limpiarClick"}],
										busqueda_static_sy: ["wm.NumberEditor", {"displayValue":"2","showing":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"2\""}, {}]
											}],
											editor: ["wm._NumberEditor", {}, {}]
										}]
									}]
								}],
								spacer1: ["wm.Spacer", {"height":"48px","width":"80%"}, {}]
							}],
							panel10: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								panel9: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									busqueda_personas_curso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"busqueda_personas_cursoSelected","onSelectionChanged":"busqueda_personas_cursoSelectionChanged"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_busqueda_insc_alum_curso","expression":undefined}, {}]
										}],
										column2: ["wm.DataGridColumn", {"caption":" ","field":"id.idPersona","columnWidth":"60px","index":1}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column3: ["wm.DataGridColumn", {"caption":"Código","field":"id.codigo","columnWidth":"42px","index":2}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","index":2,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column4: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column5: ["wm.DataGridColumn", {"caption":"Curso","field":"id.curso","columnWidth":"100px","index":4}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column6: ["wm.DataGridColumn", {"caption":"Año Escolar","field":"id.schoolYear","columnWidth":"80px","index":5}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									busqueda_persona_promocion: ["wm.DataGrid", {"border":"0","height":"90%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_busqueda_informacion_promocion","expression":undefined}, {}]
										}],
										column2: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"120%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"120%","index":2}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column3: ["wm.DataGridColumn", {"caption":" ","field":"id.idPersona","columnWidth":"67px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column4: ["wm.DataGridColumn", {"caption":"Autorización Académico","field":"id.autorizadoAcademico","columnWidth":"80px","index":4,"dataExpression":"if(${id.autorizadoAcademico}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${id.autorizadoAcademico}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column5: ["wm.DataGridColumn", {"caption":"Autorización Financiera","field":"id.autorizadoFinanciera","columnWidth":"80px","index":5,"dataExpression":"if(${id.autorizadoFinanciera}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${id.autorizadoFinanciera}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column6: ["wm.DataGridColumn", {"caption":"Código","field":"id.codigo","columnWidth":"42px","index":1}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column7: ["wm.DataGridColumn", {"caption":"/","field":"id.syIdSy","columnWidth":"30px","index":7}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column8: ["wm.DataGridColumn", {"caption":"Autorización CRA","field":"id.autorizadoCra","columnWidth":"66px","index":6,"dataExpression":"if(${id.autorizadoCra}==true){ \t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${id.autorizadoCra}==false){\t \t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}],
								pict_panel: ["wm.Panel", {"height":"100%","width":"130px","horizontalAlign":"left","verticalAlign":"top","padding":"3"}, {}, {
									tiny_pic: ["wm.Picture", {"height":"175px","border":"1","width":"100%","source":"resources/images/buttons/noimg.gif","aspect":"v","borderColor":"#bbb"}, {}],
									panel4: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"110px","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"1","padding":"2","borderColor":"#bbb"}, {}, {
										label3: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"height":"100%","width":"100%","border":"0","align":"center","caption":"Clic en el icono para ver los costos del estudiante","singleLine":false}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										busqueda_butt_goTo: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_BottomStyleCurved4px"]},"height":"100%","border":"0","width":"100%","source":"http://www.clker.com/cliparts/e/W/V/j/4/F/icon-next-blue-light-braun-hi.png","aspect":"h","disabled":true}, {"onclick":"busqueda_butt_goToClick"}]
									}]
								}],
								panel_grupos_familiares: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"200%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5","layoutKind":"left-to-right"}, {}, {
									inscpersonagrupofamiliarGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","borderColor":"#ffffff","border":"3,3,3,3"}, {}, {
										busqueda_inscpersonagrupofamiliarDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"busqueda_inscpersonagrupofamiliarDataGrid1Selected"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_busqueda_inscpersonagrupofamiliarLiveVariable1","expression":undefined}, {}]
											}],
											responsable1: ["wm.DataGridColumn", {"caption":"R","field":"responsable","columnWidth":"22px","index":5,"dataExpression":"if(${responsable}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${responsable}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column2: ["wm.DataGridColumn", {"caption":"Código","field":"persona.codigo","columnWidth":"60px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"80%","index":3,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"80%","index":2,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column5: ["wm.DataGridColumn", {"caption":"Tipo","field":"tipoPersona.tipoPersona","columnWidth":"50px","index":4}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column6: ["wm.DataGridColumn", {"caption":"Grupo Familiar","field":"grupoFamiliar.idGrupoFamiliar","columnWidth":"70px","index":6,"dataExpression":"${grupoFamiliar.idGrupoFamiliar}+\" - \"+${grupoFamiliar.grupoFamiliar}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										inscpersonagrupofamiliarDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","borderColor":"#ffffff","lock":true,"height":"90%"}, {}, {
											inscpersonagrupofamiliarLiveForm1: ["wm.LiveForm", {"height":"170px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onSuccess":"inscpersonagrupofamiliarLiveForm1Success","onUpdateData":"inscpersonagrupofamiliarLiveForm1UpdateData","onDeleteData":"inscpersonagrupofamiliarLiveForm1DeleteData","onInsertData":"inscpersonagrupofamiliarLiveForm1InsertData","onBeginInsert":"inscpersonagrupofamiliarLiveForm1BeginInsert","onBeginUpdate":"inscpersonagrupofamiliarLiveForm1BeginUpdate"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem","expression":undefined}, {}],
													wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","source":"tipoPersonaRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire2: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","source":"grupoFamiliarRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
												}],
												idInscPersonaGrupoFamiliarEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscPersonaGrupoFamiliar"}, {}, {
													editor: ["wm._NumberEditor", {"required":true}, {}]
												}],
												responsableEditor1: ["wm.Editor", {"caption":"Responsable","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"responsable","displayValue":true,"emptyValue":"false"}, {}, {
													editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
												}],
												tipoPersonaRelatedEditor1: ["wm.RelatedEditor", {"formField":"tipoPersona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.tipoPersona","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoPersonaLookup1.selectedItem","expression":undefined}, {}]
													}],
													tipoPersonaLookup1: ["wm.Editor", {"caption":"Tipo Persona","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
														editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoPersona","autoDataSet":false,"startUpdate":false}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_busqueda_lista_tipo_personas","expression":undefined}, {}]
															}]
														}]
													}]
												}],
												grupoFamiliarRelatedEditor1: ["wm.RelatedEditor", {"formField":"grupoFamiliar"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.grupoFamiliar","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"grupoFamiliarLookup1.selectedItem","expression":undefined}, {}]
													}],
													grupoFamiliarLookup1: ["wm.Editor", {"caption":"Grupo Familiar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
														editor: ["wm._LookupEditor", {"required":true,"displayField":"grupoFamiliar","autoDataSet":false,"startUpdate":false}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_busqueda_grupo_familiar","expression":undefined}, {}]
															}]
														}]
													}]
												}],
												personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"busqueda_inscpersonagrupofamiliarDataGrid1.selectedItem.persona","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup1.selectedItem","expression":undefined}, {}]
													}],
													personaLookup1: ["wm.Editor", {"caption":"Persona","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
														editor: ["wm._LookupEditor", {"required":true,"displayField":"nombreLdap","autoDataSet":false,"startUpdate":false,"displayExpression":"${apellido1}+\" \"+${apellido2}+\" \"+${nombre1}+\" \"+${nombre2}"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_busqueda_listado_personas","expression":undefined}, {}]
															}]
														}]
													}]
												}],
												editPanel1: ["wm.EditPanel", {"liveForm":"inscpersonagrupofamiliarLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
													savePanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
														saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
															}]
														}],
														cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
													}],
													operationPanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
														updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
															}]
														}],
														deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						l_Matriculas: ["wm.Layer", {"caption":"Matrícula","horizontalAlign":"left","verticalAlign":"top"}, {"onShow":"l_MatriculasShow"}, {
							panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5","layoutKind":"left-to-right"}, {}, {
								Matriculas_layer: ["wm.Layers", {}, {}, {
									matricula_left_col: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										label_estudiante_seleccionado: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"36px","width":"100%","border":"0","caption":"ESTUDIANTE NO SELECCIONADO"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										left_col_top_header: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"39px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
											matriculas_tipo_productos: ["wm.SelectEditor", {"width":"243px","caption":"Tipo producto","captionSize":"70%"}, {"onchange":"l_matriculas_inscalumcostoLiveVariable1"}, {
												editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_matriculas_anua_mensual_no","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										inscalumcostoLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
											inscalumcostoGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#ffffff"}, {}, {
												inscalumcostoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_10px"]},"border":"0"}, {"onSetColumns":"inscalumcostoDataGrid1SetColumns","onSelected":"inscalumcostoDataGrid1Selected"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_matriculas_inscalumcostoLiveVariable1","expression":undefined}, {}]
													}],
													inscrito1: ["wm.DataGridColumn", {"caption":"Inscrito","field":"inscrito","columnWidth":"45px","index":3,"autoSize":undefined,"dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${inscrito}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													descuentoPorcentaje1: ["wm.DataGridColumn", {"caption":"<center>Dcto [%]</center>","field":"descuentoPorcentaje","columnWidth":"33px","index":4,"display":"Number"}, {}, {
														format: ["wm.NumberFormatter", {}, {}]
													}],
													descuentoValor1: ["wm.DataGridColumn", {"caption":"Valor Dcto [$ COP]","field":"descuentoValor","columnWidth":"57px","index":5,"display":"Number"}, {}, {
														format: ["wm.NumberFormatter", {}, {}]
													}],
													valorFinalDescuento1: ["wm.DataGridColumn", {"caption":"Valor a Pagar","field":"valorFinalDescuento","columnWidth":"85px","index":6,"display":"Number"}, {}, {
														format: ["wm.NumberFormatter", {}, {}]
													}],
													column2: ["wm.DataGridColumn", {"caption":"Producto","field":"costos.nombreProducto","columnWidth":"80%","index":1}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													column3: ["wm.DataGridColumn", {"caption":"Nombre estudiante","field":"persona.nombre1","columnWidth":"50%","dataExpression":"${persona.apellido1}+\" \"+${persona.nombre1}"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													column1Valor: ["wm.DataGridColumn", {"caption":"Valor [$ COP]","field":"costos.valor","columnWidth":"83px","index":2}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}],
											splitter1: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
											pannel_documentos_impresion: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"50%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5,10,10,10"}, {}, {
												matriculas_box_param_comentario: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Comentario","captionAlign":"left","displayValue":"sin comentario...","captionSize":"10%","captionPosition":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"sin comentario...\""}, {}]
													}],
													editor: ["wm._TextAreaEditor", {}, {}]
												}],
												contratos: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													b_contratoMatricula: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"45px","width":"100%","borderColor":"#C53727","caption":"» CONTRATO MATRÍCULA"}, {"onclick":"b_contratoMatriculaClick"}],
													b_contratoTransporte: ["wm.Button", {"height":"45px","width":"100%","borderColor":"#C53727","caption":"» CONTRATO TRANSPORTE","showing":false}, {"onclick":"b_contratoTransporteClick"}],
													b_contratoAlimentacion: ["wm.Button", {"height":"45px","width":"100%","borderColor":"#C53727","caption":"» CONTRATO ALIMENTACIÓN","showing":false}, {"onclick":"b_contratoAlimentacionClick"}],
													b_contratoSeguro: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"45px","width":"100%","borderColor":"#C53727","caption":"» CONTRATO SEGUROS"}, {"onclick":"b_contratoSeguroClick"}]
												}],
												recibos: ["wm.Panel", {"height":"50px","width":"100%","horizontalAlign":"center","verticalAlign":"top"}, {}, {
													panel5: ["wm.Panel", {"height":"45px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														b_pagare: ["wm.Button", {"height":"45px","width":"100%","borderColor":"#8A2BE2","caption":"» PAGARÉ","showing":false}, {"onclick":"b_pagareClick"}],
														b_reciboMatricula: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"45px","width":"100%","borderColor":"#3C9300","caption":"» RECIBO DE MATRÍCULA"}, {"onclick":"b_reciboMatriculaClick"}],
														b_reciboMensualidades: ["wm.Button", {"height":"45px","width":"100%","borderColor":"#FFB515","caption":"» PRESUPUESTO MENSUALIDADES"}, {"onclick":"b_reciboMensualidadesClick"}],
														b_matricular: ["wm.Button", {"height":"45px","width":"100%","borderColor":"#4D90FE","caption":"» MATRICULAR"}, {"onclick":"JSMatricula"}]
													}]
												}],
												dateEditor1: ["wm.DateEditor", {"width":"150%","captionAlign":"left","height":"48px","caption":"Fecha de Contrato","captionPosition":"top","showing":false}, {}, {
													editor: ["wm._DateEditor", {}, {}]
												}],
												matriculas_box_param_idp: ["wm.TextEditor", {"width":"150%","caption":"IDP","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","source":"busqueda_personas_curso.selectedItem.id.idPersona"}, {}]
													}],
													editor: ["wm._TextEditor", {}, {}]
												}],
												matriculas_box_param_idc: ["wm.TextEditor", {"width":"150%","caption":"IDC","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","source":"busqueda_personas_curso.selectedItem.id.idCurso"}, {}]
													}],
													editor: ["wm._TextEditor", {}, {}]
												}],
												matriculas_box_param_idsy: ["wm.TextEditor", {"width":"150%","caption":"IDSY","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","source":"busqueda_personas_curso.selectedItem.id.idSy"}, {}]
													}],
													editor: ["wm._TextEditor", {}, {}]
												}],
												insertaAccionesUsuarios: ["wm.LiveForm", {"height":"46px","verticalAlign":"top","horizontalAlign":"left"}, {}]
											}]
										}]
									}]
								}],
								inscalumcostoDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#ffffff","border":"3,3,3,3","width":"50%"}, {}, {
									inscalumcostoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"right","readonly":true}, {"onSuccess":"l_matriculas_inscalumcostoLiveVariable1","onBeginInsert":"inscalumcostoLiveForm1BeginInsert","onBeginUpdate":"inscalumcostoLiveForm1BeginUpdate","onCancelEdit":"inscalumcostoLiveForm1CancelEdit","onInsertData":"inscalumcostoLiveForm1InsertData","onUpdateData":"inscalumcostoLiveForm1UpdateData","onBeginDelete":"inscalumcostoLiveForm1BeginDelete","onDeleteData":"inscalumcostoLiveForm1DeleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcostoDataGrid1.selectedItem","expression":undefined}, {}],
											wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor2.dataOutput","expression":undefined}, {}],
											wire1: ["wm.Wire", {"targetProperty":"dataOutput.costos","source":"relatedEditor3.dataOutput","expression":undefined}, {}],
											wire2: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"relatedEditor2.dataOutput","expression":undefined}, {}]
										}],
										editPanel2: ["wm.EditPanel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"liveForm":"inscalumcostoLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2"}, {}, {
											savePanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												saveButton2: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
													}]
												}],
												cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
											}],
											operationPanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												newButton2: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
												updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
													}]
												}],
												deleteButton2: ["wm.RoundedButton", {"caption":"Eliminar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										idInscAlumCostoEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"22px","display":"Number","readonly":true,"formField":"idInscAlumCosto"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}],
										lookups: ["wm.Layers", {"height":"84px"}, {}, {
											layer2: ["wm.Layer", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"layer2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												relatedEditor3: ["wm.RelatedEditor", {"formField":"costos","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcostoDataGrid1.selectedItem.costos","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"costosLookup1.selectedItem","expression":undefined}, {}]
													}],
													costosLookup1: ["wm.Editor", {"caption":"Costos","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
														editor: ["wm._LookupEditor", {"required":true,"displayField":"nombreProducto","autoDataSet":false,"startUpdate":false,"displayExpression":"${nombreProducto}+\" - $ \"+${valor}","pageSize":50}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_matriculas_lista_costos","expression":undefined}, {}]
															}]
														}]
													}]
												}],
												relatedEditor2: ["wm.RelatedEditor", {"formField":"sy","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcostoDataGrid1.selectedItem.sy","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup1.selectedItem","expression":undefined}, {}]
													}],
													syLookup1: ["wm.Editor", {"caption":"Año Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
														editor: ["wm._LookupEditor", {"required":true,"displayField":"schoolYear","pageSize":30}, {}]
													}]
												}],
												personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona","lock":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcostoDataGrid1.selectedItem.persona","expression":undefined}, {}]
													}],
													personaLookup2: ["wm.Editor", {"caption":"Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
														editor: ["wm._NumberEditor", {"required":true}, {}]
													}]
												}],
												relatedEditor1: ["wm.RelatedEditor", {"formField":"sy","height":"15px","fitToContentHeight":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcostoDataGrid1.selectedItem.sy","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										inscritoEditor1: ["wm.Editor", {"caption":"Inscrito","width":"100%","height":"22px","display":"CheckBox","readonly":true,"formField":"inscrito","captionSize":"65%","displayValue":true,"emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										matriculas_box_nombreProducto: ["wm.TextEditor", {"width":"150%","caption":"Nombre del Producto","height":"22px","captionSize":"70%","readonly":true}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										matriculas_check_nuevo: ["wm.CheckBoxEditor", {"width":"90%","caption":"Nuevo / Antiguo","disabled":true,"height":"23px"}, {}, {
											editor: ["wm._CheckBoxEditor", {}, {}]
										}],
										matriculas_check_obligatorio: ["wm.CheckBoxEditor", {"width":"90%","caption":"Obligatorio / Opcional","disabled":true,"height":"23px"}, {}, {
											editor: ["wm._CheckBoxEditor", {}, {}]
										}],
										matriculas_check_anual: ["wm.CheckBoxEditor", {"width":"90%","caption":"Anual / Mensual","disabled":true,"height":"23px"}, {}, {
											editor: ["wm._CheckBoxEditor", {}, {}]
										}],
										operaciones: ["wm.Layers", {"height":"108px"}, {}, {
											layer10: ["wm.Layer", {"caption":"layer10","horizontalAlign":"right","verticalAlign":"top"}, {}, {
												matriculas_box_valorProducto: ["wm.NumberEditor", {"_classes":{"domNode":["wm_FontColor_Green","wm_TextDecoration_Bold"]},"height":"23px","width":"85%","caption":"Valor Producto [$COP]","readonly":true,"disabled":true,"captionSize":"85%"}, {"onchange":"matriculas_box_valorProductoChange"}, {
													editor: ["wm._NumberEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
												}],
												descuentoPorcentajeEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontColor_Red"]},"caption":"Porcentaje Dcto [%] ","width":"85%","height":"23px","display":"Number","readonly":true,"formField":"descuentoPorcentaje","captionSize":"85%"}, {"onchange":"descuentoPorcentajeEditor1Change"}, {
													editor: ["wm._NumberEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
												}],
												descuentoValorEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontColor_Green"]},"caption":"Valor Dcto [$COP]","width":"85%","height":"22px","display":"Number","readonly":true,"formField":"descuentoValor","captionSize":"85%","disabled":true}, {"onchange":"descuentoValorEditor1Change"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"${matriculas_box_valorProducto.dataValue}*${descuentoPorcentajeEditor1.dataValue}/100"}, {}]
													}],
													editor: ["wm._NumberEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
												}],
												valorFinalDescuentoEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontColor_Purple"]},"caption":"Total Valor [$COP]","width":"85%","height":"22px","display":"Number","readonly":true,"formField":"valorFinalDescuento","captionSize":"85%","disabled":true}, {}, {
													editor: ["wm._NumberEditor", {"required":true}, {}]
												}]
											}]
										}],
										fechaInicioEditor1: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaInicio","disabled":true,"showing":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
											}],
											editor: ["wm._DateEditor", {"required":true}, {}]
										}],
										fechaFinEditor1: ["wm.Editor", {"caption":"Fecha Fin","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaFin","disabled":true,"showing":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
											}],
											editor: ["wm._DateEditor", {"required":true}, {}]
										}],
										observacionEditor1: ["wm.Editor", {"caption":"Observacion","width":"100%","height":"26px","readonly":true,"formField":"observacion","showing":false}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}]
								}]
							}]
						}],
						l_Costos: ["wm.Layer", {"caption":"Costos y Servicios","horizontalAlign":"left","verticalAlign":"top"}, {"onShow":"l_CostosShow"}, {
							costos_top_panel: ["wm.Panel", {"height":"108px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								layers5: ["wm.Layers", {}, {}, {
									layer12: ["wm.Layer", {"caption":"layer12","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										costos_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
												}]
											}]
										}],
										costos_sel_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}]
									}]
								}],
								layers4: ["wm.Layers", {}, {}, {
									layer11: ["wm.Layer", {"caption":"layer11","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										costos_box_nombre: ["wm.TextEditor", {"width":"100%","caption":"Producto"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										costos_box_codigo: ["wm.TextEditor", {"width":"100%","caption":"Codigo"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										panel1: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											costos_butt_buscar: ["wm.Button", {"height":"100%","width":"100%","borderColor":"#c4161d","caption":"Buscar"}, {"onclick":"costosLiveVariable1"}],
											costos_butt_limpiar: ["wm.Button", {"height":"100%","width":"100%","borderColor":"#3652a4","caption":"Limpiar"}, {"onclick":"costos_butt_limpiarClick"}]
										}]
									}]
								}],
								layers6: ["wm.Layers", {}, {}, {
									layer13: ["wm.Layer", {"caption":"layer13","horizontalAlign":"left","verticalAlign":"top"}, {}]
								}],
								spacer3: ["wm.Spacer", {"height":"46px","width":"432px"}, {}]
							}],
							costosLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","layoutKind":"left-to-right"}, {}, {
								costosGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#ffffff"}, {}, {
									costosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"costosLiveVariable1","expression":undefined}, {}]
										}],
										idCosto1: ["wm.DataGridColumn", {"caption":" ","field":"idCosto","columnWidth":"36px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										codigo1: ["wm.DataGridColumn", {"caption":"Codigo","field":"codigo","columnWidth":"39px","index":1}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										nombreProducto1: ["wm.DataGridColumn", {"caption":"Nombre del Producto","field":"nombreProducto","columnWidth":"223px","index":2}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										valor1: ["wm.DataGridColumn", {"caption":"Valor Producto [$COP]","field":"valor","columnWidth":"86px","index":4,"display":"Number"}, {}, {
											format: ["wm.NumberFormatter", {}, {}]
										}],
										nuevo1: ["wm.DataGridColumn", {"caption":"Nuevo","field":"nuevo","columnWidth":"43px","index":5,"dataExpression":"if(${nuevo}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${nuevo}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										obligatorio1: ["wm.DataGridColumn", {"caption":"Obligatorio","field":"obligatorio","columnWidth":"59px","index":6,"dataExpression":"if(${obligatorio}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${obligatorio}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										positivo1: ["wm.DataGridColumn", {"caption":"Positivo","field":"positivo","columnWidth":"44px","index":7,"dataExpression":"if(${positivo}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${positivo}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										anual1: ["wm.DataGridColumn", {"caption":"Anual","field":"anual","columnWidth":"27px","index":8,"dataExpression":"if(${anual}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${anual}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column1: ["wm.DataGridColumn", {"caption":"Grado","field":"grado.grado","columnWidth":"60px","index":9}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column2: ["wm.DataGridColumn", {"caption":"Año Escolar","field":"sy.schoolYear","columnWidth":"63px","index":10}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}],
								costosDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario de Costos","captionClasses":"wm_BackgroundGradient_Blue wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px","margin":"0","borderColor":"#ffffff","width":"60%"}, {}, {
									costosLiveForm1: ["wm.LiveForm", {"height":"326px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onSuccess":"costosLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"costosDataGrid1.selectedItem","expression":undefined}, {}],
											wire1: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
											wire2: ["wm.Wire", {"targetProperty":"dataOutput.grado","source":"gradoRelatedEditor1.dataOutput","expression":undefined}, {}]
										}],
										idCostoEditor1: ["wm.Editor", {"caption":"ID Costo","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idCosto"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}],
										codigoEditor1: ["wm.Editor", {"caption":"Codigo Producto","width":"100%","height":"26px","readonly":true,"formField":"codigo"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										nombreProductoEditor1: ["wm.Editor", {"caption":"Nombre del Producto","width":"100%","height":"26px","readonly":true,"formField":"nombreProducto"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										descripcionEditor1: ["wm.Editor", {"caption":"Descripcion","width":"100%","height":"26px","readonly":true,"formField":"descripcion"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										valorEditor1: ["wm.Editor", {"caption":"Valor [$ COP]","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"valor"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}],
										nuevoEditor1: ["wm.Editor", {"caption":"Nuevo / Antiguo","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"nuevo","displayValue":true,"emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										obligatorioEditor1: ["wm.Editor", {"caption":"Obligatorio / Opcional","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"obligatorio","displayValue":true,"emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										positivoEditor1: ["wm.Editor", {"caption":"Positivo / Negativo","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"positivo","displayValue":true,"emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										anualEditor1: ["wm.Editor", {"caption":"Anual / mensual","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"anual","displayValue":true,"emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"costosDataGrid1.selectedItem.sy","expression":undefined}, {}],
												wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup2.selectedItem","expression":undefined}, {}]
											}],
											syLookup2: ["wm.Editor", {"caption":"Año Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","displayValue":"2012-2013"}, {}, {
												editor: ["wm._LookupEditor", {"required":true,"displayField":"schoolYear","autoDataSet":false,"startUpdate":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										gradoRelatedEditor1: ["wm.RelatedEditor", {"formField":"grado"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"costosDataGrid1.selectedItem.grado","expression":undefined}, {}],
												wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"gradoLookup1.selectedItem","expression":undefined}, {}]
											}],
											gradoLookup1: ["wm.Editor", {"caption":"Grado","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","displayValue":"TERCERO"}, {}, {
												editor: ["wm._LookupEditor", {"required":true,"displayField":"grado","autoDataSet":false,"startUpdate":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										editPanel3: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"costosLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3"}, {}, {
											savePanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												saveButton3: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel3.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
													}]
												}],
												cancelButton3: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel3.cancelEdit"}]
											}],
											operationPanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												newButton3: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel3.beginDataInsert"}],
												updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
													}]
												}],
												deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer4: ["wm.Layer", {"caption":"Personas","horizontalAlign":"left","verticalAlign":"top","showing":false}, {}],
						l_Promocion: ["wm.Layer", {"caption":"Promoción","horizontalAlign":"left","verticalAlign":"top","roles":["14","13","17"],"layoutKind":"left-to-right"}, {}, {
							panel6: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								search_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									promocion_apellido1: ["wm.TextEditor", {"width":"100%","caption":"1er Apellido"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									promocion_apellido2: ["wm.TextEditor", {"width":"100%","caption":"1er Apellido"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}]
								}],
								panel12: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									promocion_nombre1: ["wm.TextEditor", {"width":"100%","caption":"1er Nombre"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									promocion_nombre2: ["wm.TextEditor", {"width":"100%","caption":"2do Nombre"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}]
								}],
								panel11: ["wm.Panel", {"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									promocion_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar","captionSize":"65%"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
											}]
										}]
									}],
									promocion_codigo: ["wm.TextEditor", {"width":"100%","caption":"Código"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									promocion_buscar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"96px","borderColor":" #c4161d","margin":"0","caption":"Buscar"}, {"onclick":"promocionLiveVariable1"}]
								}],
								promocion_label: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"38px","width":"100%","border":"0","caption":"(*A-A)= Autorización Académica (*A-F)= Autorización Financiera  <br>(*A-P-A)= Autorización Promoción Anticipada (*A-CRA)= Autorización CRA","singleLine":false}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								promocionDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionLiveVariable1","expression":undefined}, {}]
									}],
									idPromocion1: ["wm.DataGridColumn", {"caption":" ","field":"idPromocion","columnWidth":"45px","index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									aprobado1: ["wm.DataGridColumn", {"caption":"Aprobado","field":"aprobado","columnWidth":"53px","index":4,"dataExpression":"if(${aprobado}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${aprobado}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									autorizadoAcademico1: ["wm.DataGridColumn", {"caption":"A-A","field":"autorizadoAcademico","columnWidth":"22px","index":6,"dataExpression":"if(${autorizadoAcademico}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoAcademico}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									autorizadoFinanciera1: ["wm.DataGridColumn", {"caption":"A-F","field":"autorizadoFinanciera","columnWidth":"22px","index":7,"dataExpression":"if(${autorizadoFinanciera}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoFinanciera}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									promovido1: ["wm.DataGridColumn", {"caption":"Promovido","field":"promovido","columnWidth":"57px","index":5,"dataExpression":"if(${promovido}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${promovido}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									autorizadoPromAnticipada1: ["wm.DataGridColumn", {"caption":"A-P-A","field":"autorizadoPromAnticipada","columnWidth":"32px","index":9,"dataExpression":"if(${autorizadoPromAnticipada}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoPromAnticipada}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column1: ["wm.DataGridColumn", {"caption":"Estudiante","field":"persona.nombre1","columnWidth":"188px","index":3,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}+\" \"+${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column2: ["wm.DataGridColumn", {"caption":"Código","field":"persona.codigo","columnWidth":"41px","index":2}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column3: ["wm.DataGridColumn", {"caption":" ","field":"sy.schoolYear","columnWidth":"63px"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column4: ["wm.DataGridColumn", {"caption":"A-CRA","field":"autorizadoCra","columnWidth":"50px","index":8,"dataExpression":"if(${autorizadoCra}==true){\t'<img src=\"resources/images/buttons/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoCra}==false){\t'<img src=\"resources/images/buttons/bad.gif\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}],
							promocionLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"width":"65%"}, {"onSuccess":"promocionLiveVariable1","onUpdateData":"promocionLiveForm1UpdateData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem","expression":undefined}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor2.dataOutput","expression":undefined}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor3.dataOutput","expression":undefined}, {}]
								}],
								idPromocionEditor1: ["wm.Editor", {"caption":"Id promocion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPromocion"}, {}, {
									editor: ["wm._NumberEditor", {"required":true}, {}]
								}],
								aprobadoEditor1: ["wm.Editor", {"caption":"Aprobado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"aprobado","disabled":true,"displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								commentaprobadoEditor1: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"60px","readonly":true,"formField":"commentaprobado","disabled":true,"showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								promovidoEditor1: ["wm.Editor", {"caption":"Promovido","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"promovido","disabled":true,"displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								commentpromovidoEditor1: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"60px","readonly":true,"formField":"commentpromovido","disabled":true,"showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								autorizadoAcademicoEditor1: ["wm.Editor", {"caption":"Autorización Académica","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoAcademico","disabled":true,"displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								commentcomiteEditor1: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"60px","readonly":true,"formField":"commentcomite","disabled":true,"showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								autorizadoFinancieraEditor1: ["wm.Editor", {"caption":"Autorización Financiera","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoFinanciera","captionSize":"80%","displayValue":true,"emptyValue":"false","roles":["13","14"]}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								commentfinancEditor1: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"80px","readonly":true,"formField":"commentfinanc","singleLine":false,"roles":["13","14"]}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								calificacionEditor1: ["wm.Editor", {"caption":"Calificacion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion","disabled":true,"showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								calificacionCharEditor1: ["wm.Editor", {"caption":"CalificacionChar","width":"100%","height":"26px","readonly":true,"formField":"calificacionChar","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								autorizadoPromAnticipadaEditor1: ["wm.Editor", {"caption":"Promoción Anticipada","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoPromAnticipada","disabled":true,"displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								checkBoxEditor1: ["wm.CheckBoxEditor", {"width":"100%","caption":"Autorización CRA","readonly":true,"emptyValue":"false","captionSize":"80%","roles":["17"],"formField":"autorizadoCra"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								textAreaEditor1: ["wm.TextAreaEditor", {"height":"80px","width":"100%","caption":"Comentario","singleLine":false,"readonly":true,"display":"Text","roles":["17"],"formField":"commentCra"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								panel13: ["wm.Panel", {"height":"55px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									syRelatedEditor2: ["wm.RelatedEditor", {"formField":"sy","lock":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.sy","expression":undefined}, {}],
											wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup4.selectedItem","expression":undefined}, {}]
										}],
										syLookup3: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}]
									}],
									personaRelatedEditor3: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.persona","expression":undefined}, {}],
											wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup4.selectedItem","expression":undefined}, {}]
										}],
										personaLookup3: ["wm.Editor", {"caption":"Estudiante","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}]
									}]
								}],
								editPanel4: ["wm.EditPanel", {"liveForm":"promocionLiveForm1","savePanel":"savePanel4","operationPanel":"operationPanel4","lock":false}, {}, {
									savePanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
										saveButton4: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel4.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formInvalid","expression":undefined}, {}]
											}]
										}],
										cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel4.cancelEdit"}]
									}],
									operationPanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										newButton4: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel4.beginDataInsert"}],
										updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
											}]
										}],
										deleteButton4: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel4.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer3: ["wm.Layer", {"caption":"Informes ● Reportes","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							panel7: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"114px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								layers9: ["wm.Layers", {}, {}, {
									layer16: ["wm.Layer", {"caption":"layer16","horizontalAlign":"right","verticalAlign":"top","padding":"5"}, {}, {
										label2: ["wm.Label", {"height":"32px","width":"100%","border":"0","caption":"Reporte: Total estudiantes matrículados por grado","singleLine":false}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										informes_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
												}]
											}]
										}],
										button1: ["wm.Button", {"height":"40px","width":"96px","caption":"Generar"}, {"onclick":"button1Click"}]
									}]
								}],
								layers8: ["wm.Layers", {}, {}, {
									layer15: ["wm.Layer", {"caption":"layer15","horizontalAlign":"right","verticalAlign":"top","padding":"5"}, {}, {
										label1: ["wm.Label", {"height":"40px","width":"100%","border":"0","caption":"Reporte: Tabla de Estudiantes Matrículados por Grado, con totales por estudiante y concepto.","singleLine":false,"roles":["7"]}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										spacer5: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
										informes_butt_generar_2: ["wm.Button", {"height":"40px","width":"96px","caption":"Generar","roles":["7"]}, {"onclick":"informes_butt_generar_2Click"}]
									}]
								}],
								layers7: ["wm.Layers", {}, {}, {
									layer14: ["wm.Layer", {"caption":"layer14","horizontalAlign":"right","verticalAlign":"top","padding":"5"}, {}, {
										selectEditor2: ["wm.SelectEditor", {"width":"150%","caption":"selectEditor2","showing":false}, {}, {
											editor: ["wm._SelectEditor", {}, {}]
										}],
										button3: ["wm.Button", {"height":"48px","width":"96px","showing":false}, {}],
										butt_reportes: ["wm.Button", {"height":"48px","width":"96px","caption":"Reportes","showing":false}, {"onclick":"butt_reportesClick"}],
										butt_graficos: ["wm.Button", {"height":"48px","width":"96px","caption":"Graficos","showing":false}, {"onclick":"butt_graficosClick"}]
									}]
								}]
							}],
							panel8: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"38px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
								informes_sel_tipo_documento: ["wm.SelectEditor", {"width":"300px","caption":"Tipo de Reportes a Generar","captionSize":"150%","height":"31px"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"PDF, XLS, DOCX","required":true}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}]
							}],
							charts: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}]
						}]
					}],
					Footer: ["wm.Template", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"36px","horizontalAlign":"center","verticalAlign":"middle","width":"100%","padding":"2","showing":false}, {}, {
						footerLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Blue","wm_TextAlign_Center","wm_FontSizePx_14px"]},"height":"100%","width":"100%","border":"0","align":"right","caption":"Aprendoz® Colegio Rochester","showing":false}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}