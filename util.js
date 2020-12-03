const random = (num) => {
    return Math.ceil(Math.random() * num);
};

const randomat = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

const  click =(i,z,x) =>{
    x=z--
    return function (n =0,btn )
    {
      
      if  (i < z){
       i+=n;
       console.log('Кликов по кнопкам =',i,'Осталось кликов=',x-i);
      }
       else{
          i+=n;
          btn.disabled = true;
          console.log('Кликов по кнопкам =',i,'Осталось кликов=',x-i);
       } 
  
    } 
  
  }

const rlog = (FPerson,SPerson,count)=>{
    const { name: FPname , hp:{HP,dmg}} = FPerson; 
    const { name: SPname } = SPerson; 
    
    const logs = [
        `${FPname} вспомнил что-то важное, но неожиданно ${SPname}, не помня себя от испуга, ударил в предплечье врага. -${count} [${dmg}/ ${HP}]`,
        `${FPname} поперхнулся, и за это ${SPname} с испугу приложил прямой удар коленом в лоб врага. -${count} [${dmg}/ ${HP}] `,
        `${FPname} забылся, но в это время наглый ${SPname}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${dmg}/ ${HP}]`,
        `${FPname} пришел в себя, но неожиданно ${SPname} случайно нанес мощнейший удар. -${count} [${dmg}/ ${HP}]`,
        `${FPname} поперхнулся, но в это время ${SPname} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${dmg}/ ${HP}]`,
        `${FPname} удивился, а ${SPname} пошатнувшись влепил подлый удар. -${count} [${dmg}/ ${HP}]`,
        `${FPname} высморкался, но неожиданно ${SPname} провел дробящий удар. -${count} [${dmg}/ ${HP}]`,
        `${FPname} пошатнулся, и внезапно наглый ${SPname} беспричинно ударил в ногу противника -${count} [${dmg}/ ${HP}]`,
        `${FPname} расстроился, как вдруг, неожиданно ${SPname} случайно влепил стопой в живот соперника. -${count} [${dmg}/ ${HP}]`,
        `${FPname} пытался что-то сказать, но вдруг, неожиданно ${SPname} со скуки, разбил бровь сопернику. -${count} [${dmg}/ ${HP}]`
    ];
    const $p = document.createElement('p');
    $p.innerText = logs[random(logs.length)-1];
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($p,$logs.children[0]);
    }
    
  

export default {random,randomat,rlog,click,print};