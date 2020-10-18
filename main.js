const $btn = document.getElementById('btn-kick');
const $bts = document.getElementById('btn-kill');
const charter = {
    name: 'Pikachu',
    type: 'Electric',
    weak: ['fighting','water','some'],
    resistance: ['steel'], 
    hp:{HP: 100,
    dmg: 100,
    },   
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

}

const enemy = {
    name: 'Charmandar',
    type: 'fire',
    weak: ['fighting','water','some'],
    resistance: ['water'], 
    hp:{HP: 100,
    dmg: 100,
    },   
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

const {name,...rest} = charter;
console.log(name,rest);
const {name: Ename,...Erest} = enemy;
console.log(Ename,Erest);


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
   this.elHP.innerText = this.hp.dmg + '/' + this.hp.HP;
}

function renderbar1(){
    this.elProgressbar.style.width = this.hp.dmg + '%';
}
i = 0;
function cHP(count){

    if (this.hp.dmg <= count){
        this.hp.dmg = 0;
        alert (this.name + ' проиграл бой');
        $btn.disabled = true;
        $bts.disabled = true;
    }
    else{
    this.hp.dmg -= count;
    }
    
    const log = this === enemy ? rlog(this,charter,count): rlog(this,enemy,count);
    console.log(log); 
    
    const $p = document.createElement('p');

    $p.innerText = log;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($p,$logs.children[0]);

    renderHP.call(this) 
}


const $p = document.createElement('p');




function random(num){
    return Math.ceil(Math.random() * num);
}
init();