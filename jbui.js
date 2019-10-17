jbui = {
    registry: {},
    init: function() {

        Array.from(document.getElementsByClassName('jbui')).forEach(function(el) {
            jbui.registry[el.dataset.jbuiName] = el.outerHTML;
            el.remove();
        });
    },

    create: function(componentToCreate, inputs) {

        let comp = jbui.registry[componentToCreate];
        let newDiv = document.createElement("div");
        newDiv.innerHTML = comp;

        Array.from(newDiv.getElementsByClassName('jbuiElement')).forEach(function(thisElement) {

            for(v in inputs) { 

                if(thisElement.dataset.jbuiName === v) {

                    let thisInput = inputs[v];

                    for(property in thisInput) {

                        if(property === "data" || property === "dataset") {

                            for(dataProperty in thisInput[property]) {

                                thisElement.dataset[dataProperty] = thisInput[property][dataProperty];
                            }
                            
                        }
                        else { thisElement[property] = thisInput[property]; }
                    }

                }
            }
        });

        return newDiv;

    }
}
