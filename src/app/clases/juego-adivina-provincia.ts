import { Juego } from '../clases/juego';


export class JuegoAdivinaProvincia extends Juego  {


    arrayProvicias = [
        {
            path: "bariloche.jpg",
            opciones : ["Santa Cruz","Río Negro","La Pampa","Chubut"],
            opcionCorrecta: "Río Negro"
        },
        {
           path : "casa_tucuman.jpg",
           opciones : ["Tucumán","Buenos Aires","Santiago del Estero","La Rioja"],
           opcionCorrecta : "Tucumán"
        },
        {
            path : "cataratas-iguazu.jpg",
            opciones : ["Formosa","Chaco","Entre Rios","Misiones"],
            opcionCorrecta : "Misiones"
        },
        {
            path: "cerro-7-colores.jpg",
            opciones : ["Salta","Jujuy","San Luis","Corrientes"],
            opcionCorrecta : "Jujuy"
        },
        {
            path : "chubut.jpg",
            opciones : ["Santa Cruz","Chubut","Tierra del Fuego","Neuquén"],
            opcionCorrecta : "Chubut"
        },
        {
            path : "glaciar_moreno.JPG",
            opciones : ["Mendoza","Neuquén","Santa Cruz","Río Negro"],
            opcionCorrecta : "Santa Cruz"
        },
        {
            path : "mendoza.jpg",
            opciones : ["Mendoza","San Juan","Santa Fe","Catamarca"],
            opcionCorrecta : "Mendoza"
        },
        {
            path : "monumento_bandera.jpg",
            opciones : ["Buenos Aires","Santa Fe","Santiago del Estero","Formosa"],
            opcionCorrecta : "Santa Fe"
        },
        {
            path : "obelisco.jpg",
            opciones : ["La Pampa","Entre Rios","Buenos Aires","Córdoba"],
            opcionCorrecta : "Buenos Aires"
        },
        {
            path : "reloj_cucu.jpg",
            opciones : ["Córdoba","San Juan","Corrientes","Río Negro"],
            opcionCorrecta : "Córdoba"
        },
        {
            path : "salta.jpg",
            opciones : ["JuJuy","Misiones","Catamarca","Salta"],
            opcionCorrecta : "Salta"
        },
        {
            path : "tierra_del_fuego.jpg",
            opciones : ["Tierra del Fuego","Chubut","Santa Cruz","Mendoza"],
            opcionCorrecta : "Tierra del Fuego"
        }
    ];


    opcionCorrecta : string;
    opcionIngresada : string;
    opcionesMostradas : Array<string>;
    elementoAdivinar : any; 

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super(nombre, gano,jugador, intentos, resultado);  
        this.nombre = "Adivina la provincia";
      }

      public verificar()
    {
        
        if(this.opcionCorrecta == this.opcionIngresada)
            {
                this.gano = true;
            }
        if(this.gano)
            {
                
                return true;
            }
        else
            {
                return false;
            }
        
    }

    public generar()
    {
        console.log(this.arrayProvicias);
        let index = Math.floor((Math.random() * 11) +0);
        this.elementoAdivinar = this.arrayProvicias[index];
        this.opcionCorrecta = this.elementoAdivinar["opcionCorrecta"];
        this.opcionesMostradas = this.elementoAdivinar["opciones"];
        console.log(this.elementoAdivinar);
        console.log(this.elementoAdivinar["path"]);
        console.log(this.opcionesMostradas);
    }


}
