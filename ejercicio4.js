const prompt = require('prompt');
prompt.start();
prompt.get ( ['Sumando1', 'Sumando2'], function (err, result) {
   let resultadoTotal =  prompt.parseInt (result.Sumando1 + result.Sumando2);

    console.log('el resultado de la suma es:');
    console.log ( resultadoTotal);
  });

