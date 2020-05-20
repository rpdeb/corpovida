      var paciente = document.querySelectorAll(".paciente");
      var i;
     
      for (i = 0; i < paciente.length; i++) {
       
        var tdPeso = paciente[i].querySelector(".info-peso");
        var peso = tdPeso.textContent;
        
        var tdAltura = paciente[i].querySelector(".info-altura");
        var altura = tdAltura.textContent;
          
        var imc = peso / (altura * altura);
        paciente[i].querySelector(".info-imc") = imc;
        console.log(imc).textContent;
      }
      
       
