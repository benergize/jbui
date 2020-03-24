jbui = {
	registry: {},
	data: {},
	set: function(varv,val) {
		if(typeof jbui.data[varv] != "undefined") {

			jbui.data[varv] = val;

			jbui.update();
		}
	},
	get: function(varv) {

		if(typeof jbui.data[varv] != "undefined") {
			return jbui.data[varv];
		}
		else {

			return undefined;
		}
	},
	init: function() {

		Array.from(document.getElementsByClassName('jbui')).forEach(function(el) {

			if(typeof el.dataset.template == "undefined") {
				jbui.registry[el.dataset.jbuiName] = el;
				el.remove();
			}
			else {
				el.outerHTML=jbui.create(el.dataset.template,{}).outerHTML;
			}

		});

		jbui.select('.jbind').forEach(el=>{
			console.log(el);
			el.addEventListener("keydown",ev=>{ jbui.data[el.dataset.bind] = el.value; jbui.update(); });
			el.addEventListener("keyup",ev=>{ jbui.data[el.dataset.bind] = el.value; jbui.update(); });
			el.addEventListener("change",ev=>{ jbui.data[el.dataset.bind] = el.value; jbui.update(); });
		});

		jbui.update();

	},
	update: function(){

		jbui.select('.jmodel').forEach(el=>{

			if(typeof jbui.data[el.dataset.innerhtml] != "undefined") { el.innerHTML = jbui.data[el.dataset.innerhtml]; }
			if(typeof jbui.data[el.dataset.value] != "undefined") { el.value = jbui.data[el.dataset.value]; }
		});
		jbui.select('.jbind').forEach(el=>{
			el.value = jbui.data[el.dataset.bind];
		});
	},

	register: function(templateName, templateData) {

		if(typeof jbui.registry[templateName] != "undefined") { console.warn("Template '" + templateName + "' was already defined."); }

		let holderDiv = document.createElement("div");
		holderDiv.innerHTML = templateData.html;
		jbui.registry[templateName] = holderDiv.children[0];

		var funkyProto = Object.create(HTMLElement.prototype);
		funkyProto.createdCallback = function() { this.outerHTML = templateData.html; };
		document.registerElement(templateName, {prototype: funkyProto});
	},

	create: function(componentToCreate, inputs) {

		let newElement = jbui.registry[componentToCreate].cloneNode(true);
		let sarray = Array.from(newElement.getElementsByClassName('jbuiElement')).concat(newElement);

		sarray.forEach(function(thisElement) {

			for(v in inputs) { 

				if(thisElement.dataset.jbuiName === v) {

					let thisInput = inputs[v];

					for(property in thisInput) {

						if(property === "data" || property === "dataset") { for(dataProperty in thisInput[property]) { thisElement.dataset[dataProperty] = thisInput[property][dataProperty]; } }
						else if(property === "style") { for(styleProperty in thisInput[property]) { thisElement.style[styleProperty] = thisInput[property][styleProperty]; } }
						else { thisElement[property] = thisInput[property]; }
					}

				}
			}
		});

		return newElement;

	},

	select:function(el) {

		let result = document.querySelectorAll(el);
		if(el.indexOf("#") !== -1) { return result[0]; }
		else { return Array.from(result); }
	}
}
