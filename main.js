const $btn = document.getElementById('btn-kick');
const $bts = document.getElementById('btn-kill');
const charter = {
    name: 'Pikachu',
    type: 'Electric',
    weak: ['fighting','water','some'],
    resistance: ['steel'], 
    hp: {
        HP: 100,
        dmg: 100
      },
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP,
    cHP,  
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
    renderHP,
    cHP,  
}

const {name,...rest} = charter;
console.log(name,rest);
const {name: Ename,...Erest} = enemy;
console.log(Ename,Erest);


$btn.addEventListener('click',function(){
    console.log('Kick');    
    charter.cHP(random(20));
    enemy.cHP(random(20));
    count(1);
})

$bts.addEventListener('click',function(){
    console.log('Kick');    
    enemy.cHP(1);
    count(1);
})

const  click =(i) =>{
  return function (n =0 )
  {
    if  (i < 5){
     i+=n;
     
     console.log('Кликов по кнопкам =',i,'Осталось кликов=',6-i);
    }
     else{
        i+=n;
        $btn.disabled = true;
        $bts.disabled = true;
        console.log('Кликов по кнопкам =',i,'Осталось кликов=',6-i);
     } 

  } 

}
const count = click(0);





const init = ()=>{
    console.log('start');
    charter.renderHP();
    enemy.renderHP();
}

function renderHP(){
    this.elHP.innerText = this.hp.dmg + '/' + this.hp.HP;
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

   this.renderHP(); 
}


const $p = document.createElement('p');




const random = (num) =>{
    return Math.ceil(Math.random() * num);
}
init();