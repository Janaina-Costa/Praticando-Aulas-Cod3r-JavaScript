/**13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */
function weekDay(num){
    switch(num){
    case 1: return'Fim de semana';    
    case 2: return 'Dia útil';
    case 3: return 'Dia útil';
    case 4: return 'Dia útil';
    case 5: return 'Dia útil';
    case 6: return 'Dia útil';  
    case 7: return 'Fim de semana';
    default: return 'Dia inválido'
}
}
console.log(weekDay(5))