let itens = document.querySelector('.comp_Item');
let border = document.querySelector('.border');
let border1 = document.querySelector('.border-1');
let border2 = document.querySelector('.border-2');
let border3 =  document.querySelector('.border-3');
let border4 = document.querySelector('.border-4')

border1.addEventListener('click', alteraBorda1);
border2.addEventListener('click', alteraBorda2);
border3.addEventListener('click', alteraBorda3);
border4.addEventListener('click', alteraBorda4);

function alteraBorda1(){
    border1.classList.add('show'); 
    border2.classList.remove('show');
    border3.classList.remove('show');
    border4.classList.remove('show');
}

function alteraBorda2(){
    border1.classList.remove('show'); 
    border2.classList.add('show');
    border3.classList.remove('show');
    border4.classList.remove('show');
}

function alteraBorda3(){
    border1.classList.remove('show'); 
    border2.classList.remove('show');
    border3.classList.add('show');
    border4.classList.remove('show');
}
function alteraBorda4(){
    border1.classList.remove('show'); 
    border2.classList.remove('show');
    border3.classList.remove('show');
    border4.classList.add('show');
}
function alteraCompetencia(index){ 
    let para = document.querySelector('.comp_item_content p');
    if(index === 1){
        para.innerHTML = '';
        para.innerHTML = 'Suspendisse nec enim sodales, lacinia leo nec, gravida dui. Phasellus interdum laoreet tellus, non porta dolor. Sed vestibulum velit lacus, vel finibus mauris dignissim lacinia. Mauris volutpat massa.';
    }else if(index === 2){
        para.innerHTML = '';
        para.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.';
    }else if(index === 3){
        para.innerHTML = '';
        para.innerHTML = 'Mauris egestas aliquet ornare. Vivamus fringilla urna quis felis pretium, a ullamcorper mi feugiat.dignissim lacinia. Mauris volutpat massa. eu dignissim leo tristique vel.consectetur adipiscing elit.';
    }else if(index === 4){
        para.innerHTML = '';
        para.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus justo, eu dignissim leo tristique vel.lacinia leo nec, gravida dui. Phasellus interdum laoreet tellus, Bibendum est ut. ';
    }
}
