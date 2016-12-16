(function() {
    'use strict';

    angular.module('TenrinhosApp', [])
        .controller('TenrinhosController', TenrinhosController);

    
    function TenrinhosController() {
        var tenr = this;

        tenr.showNome = false;
        tenr.showSobrnome = false;

        tenr.name="";
        tenr.sobrenome="";

        tenr.says = "";

        console.log(tenr.name);
        tenr.checkName = function() {
            tenr.show = false;
            tenr.showNome = (tenr.name.toLowerCase() === "vera") ? true : false;
            tenr.showSobrnome = (tenr.sobrenome.toLowerCase() === "jesus") ? true : false
            
            tenr.show = tenr.showNome && tenr.showSobrnome;

            if (tenr.show) {
                tenr.says = `Os primeiros Bit's que chegam ao CPU do Tenrinhos BOT é de que és uma PROFISSIONAL mas 
                            também chegam Bit's que dizem que és muito MEIGA! mas isto é o BOT a falar...
                            FELIZ NATAL!`;
            } else {
                tenr.show = true;
                tenr.says = `Os Bit's que chegam é que és um grande cromo, ou não estás a colocar nada
                            ou não entendes-te o "Verify"?!?!?!    ;P`;
            }
        }

    }


})();