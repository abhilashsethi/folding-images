const pannels = document.querySelectorAll('.pannel');

pannels.forEach((pannel) => {
    pannel.addEventListener("click", ()=>{
        removeActive()
        pannel.classList.add('active');
    })
})

function removeActive(){
    pannels.forEach((pannel) => {
        pannel.classList.remove('active');
    })
}