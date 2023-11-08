let menu=document.querySelector("#menu");
let menuIcon=document.querySelector('.menu');
let hfont=document.querySelector('#hfont');
const tview=(elem,size,wper=1,hper=1)=>{
    let vw=(window.innerWidth/100)
    let vh=(window.innerHeight/100)
    elem.style.transition=`all .5s ease-in-out`
    if(wper!=0)
    elem.style.width=`${(size*vw)*wper}px`
    else
    elem.style.width=`auto`
    if(hper==0)
    elem.style.height=`auto`
    else
    elem.style.height=`${(size*vh)*hper}px`
}
const tfont=(elem,min,avg,max)=>{
   if(innerWidth<350){
    elem.style.fontSize=min+'px'
   }
   if(innerWidth>350&&innerWidth<700){
    elem.style.fontSize=avg+'px'
   }
   if(innerWidth>700&&innerWidth<1500){
    elem.style.fontSize=max+'px'
   }
}
const tArrayView=(elem,size1,wper1=1,hper1=1)=>{
    elem.forEach((value) => {
        tview(value,size1,wper1,hper1)
    })
}
const runner=()=>{
    tview(menu,100,1,0)
    if(innerWidth<350){
        tview(menu,100,.5,0)
    }else if(innerWidth>350){
        menu.style.transform=` translateX(0)`
    } 
    tfont(hfont,16,19,24)
}
setInterval(runner,100)
