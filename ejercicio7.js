const prompt = require('prompt');
prompt.start();
prompt.get ( ['numero1'], function (err, result) {
 numero1= parseInt (result.numero1);
   if (numero1 % 2 == 0) {
       console.log ("el numero " + numero1 + " es divisible por 2")}

else  {
    console.log ("el numero " + numero1 + " no es divisible por 2")
}
 

});