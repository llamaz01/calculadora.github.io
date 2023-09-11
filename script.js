const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VOL = document.getElementById('vol');



CALCULAR.addEventListener('click', () => {
    //utiliza el id de peso dentro del input
    const DATO = document.getElementById('peso').value
    //Toma el valor seleccionado por el doctor 
    const SELECTOR = parseFloat(document.getElementById("selector").value); 
    //validamos el dato en consola
    console.log('Dato se ingreso correctamente',DATO, SELECTOR)
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO,SELECTOR);
        let mantenimiento = (Math.round(flujo)*1.5);
        let volumen= (flujo * 24);
        VOL.innerHTML="Volumen cc: "+Math.round(volumen);
        FLU.innerHTML = "Mantenimiento: "+ Math.round(flujo) + ' cc/hr';
        MAN.innerHTML = 'm+m/2 : ' + mantenimiento + ' cc/hr';
        VOL.style.display='block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso,selector){
    let resto = peso;
    let flujo = 0;
    //mientras que sea menor que 10 y igual que 10
    if(resto>0 && resto<=10){
        flujo=(resto*100);
    //mientras que sea mayor a 10 y menor o igual a 20
    }
    else if(resto>10 && resto<=20){
         let aux= resto-10;   
        flujo= (1000 +aux*50);
    }
    //mientras que sea mayor a 20 y menor o igual a 30
    else if (resto>20 && resto<=30){
    let aux= resto-20;   
    flujo= (1500 +aux*20);
    } 
    //mientras que sea mayor a 30 aplicamos formula distinta  
    else if (resto>30){
        console.log("Es mayor que 30 ")
        console.log(selector)//controlamos que funcione de manera correcta 
        let a = ((resto * 4) + 7);
        let b= parseFloat(resto) + 90;
        flujo = ( a/b) *selector ;
        
    }
    
    return (flujo/24);
}
