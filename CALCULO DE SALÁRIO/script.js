let nome = document.getElementById("nome");
let fixo = document.getElementById("fixo");
let appLoja = document.getElementById("appLoja");
let appSetor = document.getElementById("appSetor");
let vale = document.getElementById("vale");
let checkboxVale = document.getElementById("checkboxVale");
let fgts = document.getElementById("fgts");
let checkboxFgts = document.getElementById("checkboxFgts");
let resultado = document.getElementById("resultado")

 vale.style.display = "none";
 fgts.style.display = "none";
  
 checkboxVale.addEventListener("change", myFunctionVale);
 checkboxFgts.addEventListener("change", myFunctionFgts);

 function myFunctionVale(){
  if(checkboxVale.checked != true){
    vale.style.display = "none";
  }else{
    vale.style.display = "block"
  }
 }

 function myFunctionFgts(){
  if(checkboxFgts.checked != true){
    fgts.style.display = "none";
  }else{
    fgts.style.display = "block";
  }
 }

 function calcular(){
   let inputName = nome.value;
   let inputFixo = fixo.value;
   let inputAppLoja = appLoja.value;
   let inputAppSetor = appSetor.value;
   let inputVale = vale.value;
   let inputFgts = fgts.value;
   let inputResultado = resultado;
   
   let salario; 
     
   if(salario = calculoFgtsVale(inputFixo,inputAppLoja,inputAppSetor,inputVale,inputFgts)){
     
    inputResultado.innerHTML = `<p> FUNCIONÁRIO: ${inputName}</p>`
    inputResultado.innerHTML += `<p> SALÁRIO: ${salario}</p>`

   }else if(salario = calculoVale(inputFixo,inputAppLoja,inputAppSetor,inputVale)){
    
    inputResultado.innerHTML = `<p> FUNCIONÁRIO: ${inputName}</p>`
    inputResultado.innerHTML += `<p> SALÁRIO: ${salario}</p>`

   }else if(salario = calculoFgts(inputFixo,inputAppLoja,inputAppSetor,inputFgts)){
    
    inputResultado.innerHTML = `<p> FUNCIONÁRIO: ${inputName}</p>`
    inputResultado.innerHTML += `<p> SALÁRIO: ${salario}</p>`
  
  }else if(salario = calculoSalario(inputFixo,inputAppLoja,inputAppSetor)){
    
    inputResultado.innerHTML = `<p> FUNCIONÁRIO: ${inputName}</p>`
    inputResultado.innerHTML += `<p> SALÁRIO: ${salario}</p>`
  }

  



   
     function calculoSalario(inputFixo,inputAppLoja,inputAppSetor){
      return parseInt(inputFixo) + (1* inputAppLoja) + (5* inputAppSetor); 
    }
   
    function calculoVale(inputFixo,inputAppLoja,inputAppSetor,inputVale){
      
      return parseInt(inputFixo) + (1* inputAppLoja) + (5* inputAppSetor) - parseInt(inputVale)
      
    }
    function calculoFgts(inputFixo,inputAppLoja,inputAppSetor,inputFgts){

      return parseInt(inputFixo) + (1* inputAppLoja) + (5* inputAppSetor) - parseInt(inputFgts)  
    }
    function calculoFgtsVale(inputFixo,inputAppLoja,inputAppSetor,inputVale,inputFgts){

      return parseInt(inputFixo) + (1* inputAppLoja) + (5* inputAppSetor) - parseInt(inputVale) - parseInt(inputFgts)
    }
   }
   
   
 