enum abcd{
    "<b>Amazon Advertising</b><br> Trova, attira e coinvolgi i clienti",
    "<b>Amazon Music</b><br> Streaming di milioni dicanzoni",
    "<b>AbeBooks</b><br> Libri, arte e articoli da collezione",
    "<b>Audible</b><br> Download Audiolibri",
    "<b>Amazon Web Services </b><br> Servizi Cloud Scalabili",
    "<b>Amazon Seconda mano </b><br> I nostri prodotti usati e come nuovi",
    "<b>Kindle Direct Publishing </b><br>Pubblica i tuoi libri in formato elettronico",
    "<b>Shopbop </b><br> Designer, Marche, Fashion e stile",
    "<b>Amazon Business </b><br> Servizio per clienti business"
}
const dialog = document.querySelector(".container-4-component-3 dialog") as HTMLElement; 
const container4component3 = document.getElementsByClassName("container-4-component-3")[0] as HTMLDivElement

interface component4Dialog1{
    dialog:HTMLElement;
    containerelement:HTMLDivElement;
}
type component4DialogConstructor={(dialog:HTMLElement,containerelement:HTMLDivElement): void}

class component4Dialog implements component4Dialog1{
    dialog:HTMLElement;
    containerelement:HTMLDivElement;
    constructor(dialog:HTMLElement,containerelement:HTMLDivElement){
      this.dialog=dialog;
      this.containerelement=containerelement
    }
    add(){
       for(let i=0;i<9;i++){
        const a=abcd[i]
        const b=document.createElement("p")
        b.innerHTML=a
        this.dialog.appendChild(b)
        this.dialog.classList.add("component4Dialog")
       }
    }
}

const create=new component4Dialog(dialog , container4component3)
create.add()
