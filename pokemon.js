
const $btn = document.getElementById('btn-kick');
const $bts = document.getElementById('btn-kill');

class selectors{
    constructor(name){
        this.elHP= document.getElementById(`health-${name}`)
        this.elProgressbar= document.getElementById(`progressbar-${name}`)
    }
}

class Pokemon extends selectors{
    constructor({name,hp,type,selectors}){
        super(selectors);
        this.name = name;
        this.hp = {
            HP: hp,
            dmg: hp,
        };
        this.type = type;
        this.renderHP();
    }



     renderHP (){
        this.elHP.innerText = this.hp.dmg + '/' + this.hp.HP;
        this.elProgressbar.style.width = this.hp.dmg + '%';
    }
    
    

 
  cHP (count){

    if (this.hp.dmg <= count){
        this.hp.dmg = 0;
        alert (this.name + ' проиграл бой');
        $btn.disabled = true;
        $bts.disabled = true;
   
    }
    else{
    this.hp.dmg -= count;
    }
    


   this.renderHP(); 
}

 


    
}

export default  Pokemon;