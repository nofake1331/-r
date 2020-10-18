function rlog(FPerson,SPerson,count){
const logs = [
    `${FPerson.name} вспомнил что-то важное, но неожиданно ${SPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} поперхнулся, и за это ${SPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}] `,
    `${FPerson.name} забылся, но в это время наглый ${SPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} пришел в себя, но неожиданно ${SPerson.name} случайно нанес мощнейший удар. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} поперхнулся, но в это время ${SPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} удивился, а ${SPerson.name} пошатнувшись влепил подлый удар. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} высморкался, но неожиданно ${SPerson.name} провел дробящий удар. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} пошатнулся, и внезапно наглый ${SPerson.name} беспричинно ударил в ногу противника -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} расстроился, как вдруг, неожиданно ${SPerson.name} случайно влепил стопой в живот соперника. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`,
    `${FPerson.name} пытался что-то сказать, но вдруг, неожиданно ${SPerson.name} со скуки, разбил бровь сопернику. -${count} [${FPerson.hp.dmg}/ ${FPerson.hp.HP}]`
];
return logs[random(logs.length)-1];
}

