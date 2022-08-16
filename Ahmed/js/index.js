let cont=document.querySelector('.navegation2');
let icon=document.querySelector(".fa-thin");
let link=document.querySelectorAll('.link');

function show11(e){
    cont.style.display="inline";
    
}
function show12(e){
    cont.style.display="none";
    
}

icon.addEventListener('mouseover',show11);
link.forEach(element => {
    element.addEventListener('mouseover',show11)
});
link.forEach(element => {
    element.addEventListener('mouseout',show12)
});



