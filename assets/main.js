document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        document.querySelector(".starting").classList.remove("starting");
    },3000)
    document.body.style.cssText="overflow: unset;";
})
document.addEventListener('scroll',function(){
if(window.scrollY>140){
    document.querySelector("nav").style.cssText="background-color: #F0F0F2 !important";
}
else
document.querySelector("nav").style.cssText="background-color: white !important";

if(window.scrollY>250){
    document.querySelector(".move-top").style.cssText="opacity: 1";
}
else
document.querySelector(".move-top").style.cssText="opacity: 0";
})

document.querySelector(".move-top").addEventListener('click',function(){
    window.scroll({
        top:0 ,
        behavior:"smooth"
        
    })
})