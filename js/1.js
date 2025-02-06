const imgArr=["../img/shop-for-clothing-clothes-shop-on-hanger-at-the-modern-shop-boutique-1-1024x683.jpg"  ,  "../img/bundle.jpg"  ,   "../img/sunamo.jpg"  ,  "../img/a1a381181962681.Y3JvcCwxODAwLDE0MDgsMCww.jpg"]
const backgroundcl=["colorGradientjs3","colorGradientjs2","colorGradientjs1","colorGradientjs"]

let cont1=0
let img

function container1onclick(){
    const container3=document.getElementsByClassName("container-3")[0]
    console.log(container3)
    if(cont1< imgArr.length -1){
    cont1=cont1+1
    }
    container3.style.backgroundImage= `url(${imgArr[cont1]})`;
    container3.style.backgroundRepeat = "no-repeat";
    container3.style.backgroundSize="100%, 100%";
    let a=document.getElementById("colorGradient")
    let b
    if (a !== null){
        if (a.id=="colorGradient"){ a.id="colorGradient1"}   
    }
    b=document.getElementById("colorGradient1")
    console.log(b)
    b.classList.remove(...backgroundcl );
    b.classList.add(`${backgroundcl[cont1]}`)
}

function container1onclick1(){
    const container3=document.getElementsByClassName("container-3")[0]
    if(cont1>0){
        cont1=cont1-1
           }
    container3.style.backgroundImage= `url(${imgArr[cont1]})`
    container3.style.backgroundRepeat = "no-repeat";
    container3.style.backgroundSize="100%, 100%";
    let a=document.getElementById("colorGradient")
    let b
    if (a !== null){
        if (a.id=="colorGradient"){ a.id="colorGradient1"}   
    }
    b=document.getElementById("colorGradient1")
    console.log(b)
    b.classList.remove(...backgroundcl );
    b.classList.add(`${backgroundcl[cont1]}`)
}


 function imgcambio(){const cont=new Promise((resolve, reject) => {
 setTimeout(()=>{
    if(cont1>0){
        return resolve()
    }
    if(cont1< imgArr.length -1){
        return reject()
    }
 },8000)
})

cont.then(
    resolve=>{
        cont1=cont1-1
        const container3=document.getElementsByClassName("container-3")[0]
        container3.style.backgroundImage= `url(${imgArr[cont1]})`
        let a=document.getElementById("colorGradient")
        if (a !== null){
            if (a.id=="colorGradient"){ a.id="colorGradient1"}   
        }
        const b=document.getElementById("colorGradient1")
        b.classList.remove(...backgroundcl );
        b.classList.add(`${backgroundcl[cont1]}`)
        imgcambio()
    }
).catch(
    reject=>{
        cont1=cont1+3
        const container3=document.getElementsByClassName("container-3")[0]
        container3.style.backgroundImage= `url(${imgArr[cont1]})`
        let a=document.getElementById("colorGradient")
        if (a !== null){
            if (a.id=="colorGradient"){ a.id="colorGradient1"}   
        }
        const b=document.getElementById("colorGradient1")
        b.classList.remove(...backgroundcl );
        b.classList.add(`${backgroundcl[cont1]}`)
        imgcambio()
    })
}

 imgcambio()
