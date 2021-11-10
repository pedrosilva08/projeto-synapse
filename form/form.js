let modal = document.querySelector('.modal');
let close = document.querySelector('span');
let btn = document.querySelector('.button_int');
let checkbox = document.getElementById('accept');
let btnInt = document.querySelector('.button_interest');
btn.addEventListener('click', () => {
    modal.style.display = "block";
});
btnInt.addEventListener('click',()=>{
    if(checkbox.checked){
        modal.style.display = "none";
    }else{
        alert("Você não concordou com os termos de uso");
    }
})
close.addEventListener('click', () => {
    modal.style.display = "none";
});
window.addEventListener('click', (event) => {
    if(event.target === modal){
    modal.style.display = "none";
    }
});