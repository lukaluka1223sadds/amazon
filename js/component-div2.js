let componentArr=["bestseller","amazon basics","novita","offerte","prime","musica","libri","moda","casa e cucina","informatica"]

for (let i=0;i<10;i++){
    document.write(`<p class="container-2-component-${i}">${componentArr[i]}</p>`)
    const getElement=document.getElementsByClassName(`container-2-component-${i}`)[0]
    getElement.onmouseover=()=>{
       getElement.classList.add("container2js")
       
    }
    getElement.onmouseout=()=>{
        getElement.classList.remove("container2js")
    }
    
}

const getElement1=document.getElementsByClassName("container-2-component-11")[0]

console.log(getElement1)
getElement1.onmouseover=()=>{
       getElement1.classList.add("container2js1")
}
getElement1.onmouseout=()=>{
        getElement1.classList.remove("container2js1")
}

