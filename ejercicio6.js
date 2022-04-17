const prompt = require('prompt');
prompt.start();
prompt.get ( ['numero1', 'numero2', 'numero3'], function (err, result) {
 numero1= parseInt (result.numero1);
 numero2 =parseInt (result.numero2);
 numero3= parseInt (result.numero3);
   if (numero1 < numero2 && numero2 < numero3) {
       console.log ("el numero  " + numero3 + "  es mayor")}

  else if (numero3< numero2 && numero2 < numero1) {
      console.log (" el numero  " + numero1 +  "  es mayor")
  }
else {
    console.log (" el numero  " + numero2 + "  es mayor")
}
 

});