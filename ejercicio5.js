const prompt = require('prompt');
prompt.start();
prompt.get ( ['numero1', 'numero2'], function (err, result) {
 numero1= parseInt (result.numero1);
 numero2 =parseInt (result.numero2);
   if (numero1 < numero2) {
       console.log ("el numero" + numero2 + " es mayor")}

  else {
      console.log ("el numero " + numero1 +  " es mayor")
  }

 

});
