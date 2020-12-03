import{pokemons} from "./pokemons.js"
import util from "./util.js";
import Pokemon from "./pokemon.js";
import main from "./main.js"

const initp1 = ()=>{
let p1 = pokemons[util.random(pokemons.length)-1];
let $img = document.getElementById('img-player1');
let $name = document.getElementById('name-player1');
$img.src = p1.img;
$name.innerText = p1.name;
let player1 = new Pokemon({
    ...p1,
    selectors: 'player1'
})
return player1
 
 }
 const initp2 = ()=>{
 let p2 = pokemons[util.random(pokemons.length)-1];
 let $img2 = document.getElementById('img-player2');
 let $name2 = document.getElementById('name-player2');
 $img2.src = p2.img;
 $name2.innerText = p2.name;
 let player2 = new Pokemon({
    ...p2,
   selectors: 'player2'
})
 return player2;
}

const game = (p1,p2)=>{
    console.log(p2)
    if  (p1.hp.dmg <= 0){
        const allbtn = document.querySelectorAll('.control .button');
        allbtn.forEach($item => $item.remove())
        const $control = document.querySelector('.control');
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = 'Reset game';
        $control.appendChild($btn);
        $btn.addEventListener('click',function(){  
            $btn.remove();
            main.start();
            
         })
        return false
        
    } 
    if  (p2.hp.dmg <= 0){
         return true
    } 
}
 
 
export default {initp1,initp2,game};