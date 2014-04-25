Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%","verticalAlign":"middle"}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"280px","layoutKind":"left-to-right","padding":"10"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px","wm_BackgroundColor_White"]},"height":"267px","width":"320px","border":"1","padding":"5","borderColor":"#bbb"}, {}, {
				logo_aprendoz: ["wm.Picture", {"height":"80px","border":"0","width":"100%","source":"resources/images/logos/logo_aprendoz_nuevo.png","aspect":"v"}, {}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"28px","captionSize":"80px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"28px","captionSize":"80px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4"}, {}, {
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White","wm_BackgroundColor_White"]},"width":"100px","caption":"Acceder","borderColor":"#CD0000","margin":"0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer1: ["wm.Spacer", {"height":"18px","width":"96px"}, {}],
				loginErrorMsg: ["wm.Label", {"height":"96%","border":"0","caption":" ","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}]
	}]
}