const prompt = require('prompt');
prompt.start();
prompt.get ( ['valor1'], function (err, result) {
     valor1 = parseInt (result.valor1);
     valor2 = 2;
    while 
    (valor1 % valor2 !== 0 && valor2 < valor1 / 2 ) {
        valor2++;
        }
        if (valor1 % valor2 !== 0) {
            console.log ("El número es primo");
            } 
            else {
            console.log ("El número no es primote");
            }


});