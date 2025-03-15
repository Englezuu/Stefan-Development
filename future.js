/*************************************/
/*       Future JS version 0.1       */
/* Created by Stefan Development SRL */
/*************************************/

/* ENG: This is a private Javascript framework and need a license to use, all unauthorized uses are illegaly! The license can be bought only from https://stefan-development.ro/FutureJS or by visiting one of our location from Craiova, Dolj or Drobeta Turnu-Severin, Mehedinti (both from Romania), more details on web-site.
 
    !!!! If you have this code from a friend, company or other unauthorized source, please report to us and you get a free license to use !!!!
*/
/* RO: Acesta este un framework privat pentru Javascript si pentru a il folosi este necesara cumpararea unei licente, orice folosire neautorizata este total ilegala! Licenta poate cumparata doar de pe https://stefan-development.ro/FutureJS sau prin visitarea una dintre locatiile noastre din Craiova sau Drobeta Turnu-Severin, mei multe detalii pe web-site.

    !!!! Daca ai acest cod de la un prieten, firma sau alta sursa neautorizata, te rugam sa ne raportezi si vei primi o licenta de folosire gratis !!!!
*/

var FutureJS = {
    variables: {},
    
    Condition: function(callback) {
        var cond = function(options, resultCallback) {
            switch (options.type) {
                case "boolean":
                    if (options.value === options.need) {
                        resultCallback(true);
                    } else {
                        resultCallback(false);  
                    }
                case "string": 
                    if (options.value === options.need) {
                        resultCallback(true);
                    } else {
                        resultCallback(false);   
                    }
            }
        };
    
        callback(cond);
    },
    RegisterHTMLVar: function({id, value}) {
        this.variables[id] = value;
        this.updateHTMLVars();
    },

    updateHTMLVars: function() {
        // Replace placeholders in all HTML elements with corresponding values
        document.querySelectorAll("*").forEach((element) => {
            element.innerHTML = element.innerHTML.replace(/{{\s*([\w]+)\s*}}/g, (match, p1) => {
                return this.variables[p1] || "";
            });
        });
    },
};

// Example usage of FutureJS Condition


FutureJS["RegisterHTMLVar"]({id: "Text", value: "Acesta este un text"})

window.onload = function() {
    FutureJS.updateHTMLVars();
};

export const FutureJS = {
    variables: {},
    Condition: function(callback) { /* ... */ },
    RegisterHTMLVar: function({id, value}) { /* ... */ },
    updateHTMLVars: function() { /* ... */ },
};
