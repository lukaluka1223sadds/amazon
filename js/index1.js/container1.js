const backgroundImage=document.getElementsByClassName("container-1-backgroundImage")[0]
const arrayOfImg=["../../img/a1a381181962681.Y3JvcCwxODAwLDE0MDgsMCww.jpg","../../img/20326-fracomina-vestito-donna-fantasia-geometrica-060_01.jpg","../../bundle.jpg"]

console.log(backgroundImage.src)
const setImage=""
for (let i=0;i<2;i++){
    async function namea(params) {
        const promise=new Promise((resolve, reject) => {
            backgroundImage.src=arrayOfImg[i]
            resolve()
        },5000);
    }
    const asyn=namea
    asyn.then(
        ()=>{
            ""
        }
    )
}

