const $btn = document.getElementById('btn-kick');
const $bts = document.getElementById('btn-kill');
const charter = {
    name: 'Pikachu',
    HP: 100,
    dmg: 100,   
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

}
const enemy = {
    name: 'Charmandar',
    HP: 100,
    dmg: 100,   
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click',function(){
    console.log('Kick');    
    cHP(random(20),charter);
    cHP(random(20),enemy);
})

$bts.addEventListener('click',function(){
    console.log('Kick');    
    cHP(100,enemy);
})

function init(){
    console.log('start');

}



function renderHp(person){
   person.elHP.innerText = person.dmg + '/' + person.HP;
}

function rendebar(person){
    person.elProgressbar.style.width = person.dmg + '%';
}

function cHP(count,person){
    if (person.dmg <= count){
        person.dmg = 0;
        alert (person.name + ' проиграл бой');
        $btn.disabled = true;
        $bts.disabled = true;
    }
    else{
    person.dmg -= count;
    }
    renderHp(person)
    rendebar(person)
 
}

function random(num){
    return Math.ceil(Math.random() * num);
}
init();