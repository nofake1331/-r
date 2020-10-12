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
    cHP.call(charter, random(20));
    cHP.call(enemy, random(20));
})

$bts.addEventListener('click',function(){
    console.log('Kick');    
    cHP.call(enemy,100);
})

function init(){
    console.log('start');
    renderHP.call(charter);
    renderHP.call(enemy);
}

function renderHP(){
    renderHp1.call(this);
    renderbar1.call(this);
}

function renderHp1(){
   this.elHP.innerText = this.dmg + '/' + this.HP;
}

function renderbar1(){
    this.elProgressbar.style.width = this.dmg + '%';
}

function cHP(count){
    if (this.dmg <= count){
        this.dmg = 0;
        alert (this.name + ' проиграл бой');
        $btn.disabled = true;
        $bts.disabled = true;
    }
    else{
    this.dmg -= count;
    }
    renderHP.call(this) 
}

function random(num){
    return Math.ceil(Math.random() * num);
}
init();