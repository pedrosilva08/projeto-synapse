var content = document.querySelector('.comp_item_content p');
var b1 = document.querySelector('.border-1')
var b2 = document.querySelector('.border-2')
var b3 = document.querySelector('.border-3')
var b4 = document.querySelector('.border-4')
//-----adionando border nos itens------

function remove_all_class(show){
    var seletor = document.querySelectorAll('.' + 'show');
    seletor.forEach(function(itens){
        itens.classList.remove('show');
    });
}
b1.addEventListener('click',alteraBorda1);
b2.addEventListener('click',alteraBorda2);
b3.addEventListener('click',alteraBorda3);
b4.addEventListener('click',alteraBorda4);

function alteraBorda1() {
    remove_all_class('show');
    b1.classList.add('show');
}
function alteraBorda2() {
    remove_all_class('show');
    b2.classList.add('show');
}
function alteraBorda3() {
    remove_all_class('show');
    b3.classList.add('show');
}
function alteraBorda4() {
    remove_all_class('show');
    b4.classList.add('show');
}

//-----tornando o texto dinâmico------------------------------------------
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
    content.appendChild(para);
}

//-----------------------para mobile--------------------
var acc = document.querySelectorAll('.comp_accordeon');
var i;
for(i = 0; i < acc.length;i++){
    acc[i].addEventListener('click',function(){
        //se tiver essa class ele remove e retorna false senão adiciona e retorna true
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if(content.style.display === "none"){
            content.style.display = "block";
        }else{
            content.style.display = "none";
        }
    }
    )};
