const display = document.querySelector('.display');
const resultado = document.querySelector('#resultado')
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');

numeros.forEach((btn) => {
    

    
    btn.addEventListener('click', ()=>{
// alert("soy un numero")
        switch (btn.className){

            case "numero uno":
                // alert('1');
                display.value += "1";

            break;

            

            case "numero dos":
                // alert('1');
                display.value+= "2";

            break;
    
 
            case "numero tres":
                // alert('1');
                display.value+= "3";

            break;
        
 
            case "numero cuatro":
                // alert('1');
                display.value+= "4";
            
            break;
            
 
            case "numero cinco":
                // alert('1');
                display.value+= "5";
                
            break;
                
 
            case "numero seis":
                // alert('1');
                display.value+= "6";
                    
            break;
                    
 
            case "numero siete":
                // alert('1');
                display.value+= "7";
                        
            break;
                        
 
            case "numero ocho":
                // alert('1');
                display.value+= "8";
                            
            break;
                            
 
            case "numero nueve":
                // alert('1');
                display.value+= "9";
                            
            break;
                                
 
            case "numero cero":
                // alert('1');
                display.value+= "0";
                
            break;
                     
            case "numero coma":
                // alert('1');
                display.value+= ".";
            
            break;
                                                                                                                                                                                     
        }

    })

})

operadores.forEach((btn) => {
    
    btn.addEventListener('click', ()=>{
        //  alert('soy un operador')

        switch (btn.className){

            case "operador C":

            display.value = " ";

            break;

            case "operador division":

            display.value += "  /  ";

            break;
            
            case "operador multiplicacion":

            display.value += "  *  ";

            break;

            
            case "operador suma":

            display.value += "  +  ";

            break;

            
            case "operador resta":

            display.value += "  -  ";

            break;

            
            case "operador porcentaje":

            display.value += "  %  ";

            break;

            case "operador borrar":

            display.value = display.value.slice(0, -1)

            break;

            case "operador igual":

                // resultado.value = eval(display.value);
                display.value = eval(display.value);


            break;
        }
    })
})