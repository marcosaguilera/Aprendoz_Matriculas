wm.Control.extend({
    toHtml: function() {return "";},
    customToHtml: function(inWidth) {return "";},
    print: function() {
	var html = this.toHtml(725); // 725px wide page
	var csspath = "resources/css/print.css";
	html = "<html><head><title>Printing...</title><link rel='stylesheet' type='text/css' href='" + csspath + "' /></head><body onload='print()'>" + html + "</body><html>";
	var win = window.open("", "Printing");
	if (win) {
	    win.document.open("text/html");
	    win.document.write(html);
	    win.document.close();
	}
    }
});

wm.Container.extend({
    toHtml: function(inWidth) {
	if (this.customToHtml != this.constructor.prototype.customToHtml)
	    return this.customToHtml();
	var html = [];
	var count = 0;
	var hasContents = [];
	for (var i = 0; i < this.c$.length; i++) {
	    var c = this.c$[i];
	    if (this.layout.inFlow(c) ) {
		hasContents[i] = c.toHtml != wm.Control.prototype.toHtml;
		if (hasContents[i] && c.customToHtml != c.constructor.prototype.customToHtml) {
		    var testContent = c.toHtml(inWidth);
		    if (testContent === "" || testContent === undefined || testContent === null)
			hasContents[i] = false;
		}
		if (hasContents[i]) {
		    count++;
		}
	    }
	}


	if (this.layoutKind == "top-to-bottom" || count <= 1) {
	    html.push("<div id='" + this.domNode.id + "' class='wmPanelTopToBottom'>");
	    for (var i = 0; i < this.c$.length; i++) {
		if (hasContents[i]) {
		    var h = this.c$[i].toHtml(inWidth);
		    if (h) {
			var style = "";//"style='margin: " + this.margin + ";padding: " + this.padding + ";'";
			var classes = (this.c$[i]._classes && this.c$[i]._classes.domNode ? this.c$[i]._classes.domNode : []);
			classes = dojo.filter(classes, function(inClass) {return inClass.indexOf("wm_Font") == 0 || inClass.indexOf("wm_Text") == 0;});
			classes = classes.join(" ");
			html.push("<div id='" + this.c$[i].domNode.id + "_Outer' " + style + " class='" + classes + "'>" + h + "</div>");
		    }
		}
	    }
	} else {
	    var remainingWidth = inWidth-4; // things start wrapping if we don't have at least 4 extra px space
	    var totalPercent = 0;
	    var widths = [];
	    for (var i = 0; i < this.c$.length; i++) {
		if (hasContents[i]) {
		    var c = this.c$[i];
		    if (!c._percEx.w) {
			widths[i] = c.bounds.w;
			remainingWidth -= c.bounds.w;
		    } else {
			totalPercent += c._percEx.w;
		    }
		}
	    }
	    for (var i = 0; i < this.c$.length; i++) {
		if (hasContents[i]) {
		    var c = this.c$[i];
		    if (c._percEx.w) {
			var width = c._percEx.w/totalPercent * remainingWidth;
			widths[i] = width;
		    }
		}
	    }
	    html.push("<div id='" + this.domNode.id + "' class='wmPanelLeftToRight'>");
	    for (var i = 0; i < this.c$.length; i++) {
		var h = this.c$[i].toHtml(widths[i])
		if (h) {
		    var style = ""; //"style='margin-top: " + this.marginExtents.t + "px;margin-bottom: " + this.marginExtents.b + "px;padding-top: " + this.paddingExtents.t + "px;padding-bottom: " + this.paddingExtents.b + "px;'";
		    var classes = (this.c$[i]._classes && this.c$[i]._classes.domNode ? this.c$[i]._classes.domNode : []);
		    classes = dojo.filter(classes, function(inClass) {return inClass.indexOf("wm_Font") == 0 || inClass.indexOf("wm_Text") == 0;});
		    classes = classes.join(" ");
		    html.push("<div id='" + this.c$[i].domNode.id + "_Outer' style='width:" + widths[i] + "px;' " + style + " class='"+classes+"'>" + h + "</div>");
		}
	    }	    
	}
	html.push("</div>");
	return html.join("");
    }
});

wm.PageContainer.extend({
    toHtml: function() {
	if (this.page && this.page.root)
	    return this.page.root.toHtml();
	else
	    return "";
    }
});

wm.Picture.extend({
    toHtml: function() {
	return "<img class='wmpicture' style='width:" + this.bounds.w + "px;height:" + this.bounds.h + "px' src='" + this.img.src + "'/>";
    }
});

wm.FancyPanel.extend({
    toHtml: function(inWidth) {
	var remainingWidth = inWidth - 12; // this panel should have a 1px border; which costs 2 width; and a 5px margin costing 10px
	return "<div id='" + this.domNode.id + "' class='" + this.classNames + "'><div class='wmFancyPanel-labelWidget'>" + this.title + "</div><div class='wmFancyPanel-containerWidget'>" + this.containerWidget.toHtml(remainingWidth) + "</div></div>";
    }
});

wm.Label.extend({
    toHtml: function() {
	return "<div style='text-align:" + (this.align || "left") + ";' id='" + this.domNode.id + "'>" + (this.caption||"") + "</div>";
    }
});

wm.AbstractEditor.extend({
    toHtml: function(inWidth) {
	var remainingWidth = inWidth - 4; // always seem to need a 4px buffer to avoid wrapping
	var margin = "2px 4px 2px 4px";
	remainingWidth -= 8; // margin for the wrapper div
	remainingWidth -= 2; // border for the editor
	var captionSize = 125;
	var topToBottomLayout =  (remainingWidth - captionSize < 100 || this.captionPosition == "top" || this.captionPosition == "bottom");
	if (this.caption && this.captionSize != "0px" && this.captionSize != "0%" && !topToBottomLayout) {
	    var captionPadding = 4;
	    var editorSize = remainingWidth - captionSize;
	    return "<div class='wmeditor' id='" + this.domNode.id + "' style='margin: " + margin + ";'><div class='wmeditor-label' style='width:" + (captionSize-captionPadding) + "px;padding-right:" + captionPadding + "px;display:inline-block;'>" + this.caption + "</div><div class='wmeditor-value' style='display: inline-block;width:" + editorSize + "px'>" + (this.getDisplayValue() || "&nbsp;") + "</div></div>";
	} else {
	    var html = [];
	    html.push("<div class='wmeditor' id='" + this.domNode.id + "' style='margin: " + margin + ";'>");
	    if (this.caption && this.captionSize != "0px" && this.captionSize != "0%") {
		html.push("<div class='wmeditor-label' >" + this.caption + "</div>");
	    }
	    html.push("<div class='wmeditor-value'>" + (this.getDisplayValue() || "&nbsp;") + "</div>");
	    html.push("</div>");
	    return html.join("\n");
	}
    }    
});


wm.Content.extend({
    toHtml: function() {
	return this.domNode.innerHTML;
    }
});

wm.getComponentStructure("wm.Html");
wm.Html.extend({
    toHtml: function() {
	return this.html;
    }
});

wm.getComponentStructure("wm.DojoGrid");
wm.DojoGrid.extend({
    toHtml: function() {
	var html = "<table border='0' cellspacing='0' cellpadding='0' class='wmdojogrid'><thead><tr>";
		dojo.forEach(this.columns, function(col, idx){
			if (!col.show)
				return;
		    html += "<th style='" + (col.width.match(/px/) ? col.width : "") + "'>" + col.title + "</th>";
		}, this);
	html += "</tr></thead><tbody>";

		var dataList = this.variable.getData();
	dojo.forEach(dataList, function(obj, rowId){
			dojo.forEach(this.columns, function(col, idx){
				if (!col.show)
					return;
			    try {
				var value = obj[col.field || col.id];
			    if (!value) {
				var value = obj;
				var colid = col.field || col.id;
				while(colid.indexOf(".") != -1) {
				    var index = colid.indexOf(".");
				    value = value[colid.substring(0,index)];
				    colid = colid.substring(index+1);

				}
				value = value[colid];
			    }
				if (col.expression){
					value = this.getExpressionValue(col.expression, idx, obj, true);
				} else if (col.formatFunc){
					switch(col.formatFunc){
						case 'wm_date_formatter':
					        case 'Date (WaveMaker)':				    
							value = this.dateFormatter(value);			
							break;
						case 'wm_localdate_formatter':
					        case 'Local Date (WaveMaker)':				    
							value = this.localDateFormatter(value);			
							break;
						case 'wm_time_formatter':
					        case 'Time (WaveMaker)':				    
							value = this.timeFormatter(value);			
							break;
						case 'wm_number_formatter':
					        case 'Number (WaveMaker)':				    
							value = this.numberFormatter(value);	
							break;
						case 'wm_currency_formatter':
					        case 'Currency (WaveMaker)':				    
							value = this.currencyFormatter(value);	
							break;
						case 'wm_image_formatter':
					        case 'Image (WaveMaker)':				    
					    // spreadsheet shouldn't be given HTML
							//value = this.imageFormatter(value);	
							break;
						case 'wm_link_formatter':
					        case 'Link (WaveMaker)':				    
					    // spreadsheet shouldn't be given HTML
					    //value = this.linkFormatter(value);	
							break;

						default:
							if (!this.isDesignLoaded())
							    value = dojo.hitch(this.owner, col.formatFunc)(value, rowId, idx, col.field || col.id, {}, obj);
							break;
					}
				}
			    } catch(e){value = "";}
			    html += "<td>" + value + "</td>";
			}, this);
		    html += "</tr>";
		}, this);
		
	return html += "</tbody></table>";
	}

});

wm.getComponentStructure("wm.IFrame");
wm.IFrame.extend({
    toHtml: function() {
	return "<iframe src='" + this.source + "'></iframe>";
    }
});

wm.getComponentStructure("wm.DojoGauge");
wm.DojoGauge.extend({
    toHtml: function() {
	return main.dojoGauge1.gauge.domNode.innerHTML;
    }
});
wm.getComponentStructure("wm.DojoChart");
wm.DojoChart.extend({
    toHtml: function() {
	return this.dojoObj.node.innerHTML;
    }
});

