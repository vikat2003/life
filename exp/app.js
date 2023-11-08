let menuInApp=document.querySelector("#menu");
let menuIcon2=document.querySelector('.menu');
let images=document.querySelectorAll(".img");
function close(){
   if(innerWidth<350)
   menuInApp.style.transform=`translateX(-100%)`
   svg1.style.display=`block`
   svg2.style.display=`none`
   menuInApp.style.margin=`${0}px`
}
let counter=1
menuIcon2.addEventListener('click',()=>{
    let svg1=document.querySelector('#svg1')
    let svg2=document.querySelector('#svg2')
    if(counter==1){
        counter--
        svg1.style.display=`none`
        svg2.style.display=`block`
        menuInApp.style.transform=` translateX(0)`
        menuInApp.style.margin=5+'px'
        setTimeout(close,10000)
    }
    else{
        counter++
        svg1.style.display=`block`
        svg2.style.display=`none`
        menuInApp.style.transform=`translateX(-100%)`
        menuInApp.style.margin=`${0}px`
    }
})
counter=0
images.forEach((value, index) => {
    value.style.left=index*100+'%'
})
function slideMove(){
    images.forEach((value) => {
        value.style.transform=`translateX(-${counter*100}%)`
        value.style.transition=`all 1s ease-in`
    })
}
function next(){
    counter++
  if(counter==5)
    counter-=5
    slideMove()
}
function prev(){
    counter--
    if(counter==-1)
    counter+=5
    slideMove()
}


