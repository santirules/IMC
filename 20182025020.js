function hombre(){
    
    let  r=0;
    let Peso=document.getElementById('peso').value;
    let Estatura=document.getElementById('estatura').value;
    
         r=Peso/Estarura*Estatura

         document.getElementById('r').innerHTML=x;
       
         if(r<20){
            t=1;
            document.write("Bajo peso");

         }

         if(r>20 && r<24){

            t=2;
            document.write("normal");
         }
         if(r>24 && r<29){
            t=3;
            document.write("obesidad leve");

        }
        if(r>29 && r<40){

            t=4;
            document.write("obesidad severa");

        }
        if(r>40 ){

            t=5;
            document.write("obesidad muy severa");
        }

    }
 

function mujer(){
    
    let  r=0, t=0;
    let Peso=document.getElementById('peso').value;
    let Estatura=document.getElementById('estatura').value;
    
         r=Peso/Estarura*Estatura

         document.getElementById('r').innerHTML= x;
       
         if(r<20){
             t=1;
            document.write("Bajo peso");

        }

        if(r>20 && r<23){
            t=2;

            document.write("normal");
        }
        if(r>23 && r<28){

            t=3;
            document.write("obesidad leve");
       }
       if(r>28 && r<37){

        t=4;
        document.write("obesidad severa");

       }
       if(r>37 ){
           t=5;
           document.write("obesidad muy severa");
    }
 function texto(){


 }

