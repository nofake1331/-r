import Pokemon from "./pokemon.js";
import util from "./util.js";
const $btn = document.getElementById('btn-kick');
const $bts = document.getElementById('btn-kill');

const player1 = new Pokemon({
    name:'Pikachu',
    type: 'electric',
    hp: 100,
    selectors: 'character'
})
const player2 = new Pokemon({
    name:'Charmander',
    type: 'fire',
    hp: 100,
    selectors: 'enemy'
})

 


$btn.addEventListener('click',function(){
    console.log('Kick');  
    let counts = util.random(20); 
    player1.cHP(counts);
    player2.cHP(counts);
    util.rlog(player2,player1,counts)
    count(1)
})

$bts.addEventListener('click',function(){
    console.log('Kick');    
    player2.cHP(1);
    util.rlog(player2,player1,1)
    count(1);
})


const count = util.click(0,10);

 