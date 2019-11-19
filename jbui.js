jbui = {
    registry: {},
    init: function() {

        Array.from(document.getElementsByClassName('jbui')).forEach(function(el) {
            jbui.registry[el.dataset.jbuiName] = el;
            el.remove();
        });
    },

    create: function(componentToCreate, inputs) {

        let comp = jbui.registry[componentToCreate];
        let newDiv = jbui.registry[componentToCreate];//document.createElement(comp.tag);
        //newDiv.innerHTML = comp.src;

        Array.from(newDiv.getElementsByClassName('jbuiElement')).forEach(function(thisElement) {

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

        return newDiv;

    }
}
