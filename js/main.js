// Function
function changer(inputid){
    const inputfield = document.getElementById(inputid);
    const inputstring = inputfield.value;
    const inputValue = parseFloat(inputstring);
    return inputValue;
}
// player Expense
document.getElementById('calculate').addEventListener('click' , function(){
    const player = changer('player');
    const pleyerExpenses = player * 5 ;
    const playerE = document.getElementById('player-expens');
    playerE.innerText = pleyerExpenses;
    return pleyerExpenses;
})
// totl Expenses
document.getElementById('total-calculate').addEventListener('click' , function(){
    const manager = changer('manager');
    const coach = changer('coach');
    const playerE = document.getElementById('player-expens');
    const playercost = playerE.innerText ;
    const player = parseFloat(playercost) ;
    const total = manager + coach + player;
    const totalCalculation = document.getElementById('total');
    totalCalculation.innerText = total ; 
})
// player scelect
function scelect(scelectid){
    const playerlist = document.getElementById('playerlist');
    const scelectorid = document.getElementById(scelectid);
    const li = document.createElement('li');
    li.innerText = scelectorid.innerText;
    playerlist.appendChild(li);
    const lenght = document.getElementById("playerlist").getElementsByTagName("li").length;
    if(lenght > 5){
        alert("Now you are CROSSING the limit!!");
        return;

    };
      
    
}
console.log(length);
document.getElementById('lionelMessi-btn').addEventListener('click',function(){
    scelect('lionelMessi');
    document.getElementById("lionelMessi-btn").disabled = true;
});
document.getElementById('naymar-btn').addEventListener('click',function(){
    scelect('neymar');
    document.getElementById("naymar-btn").disabled = true;
});
document.getElementById('Kylian-btn').addEventListener('click',function(){
    scelect('Kylian');
    document.getElementById("Kylian-btn").disabled = true;
})
document.getElementById('Machado-btn').addEventListener('click',function(){
    scelect('Machado');
    document.getElementById("Machado-btn").disabled = true;
})
document.getElementById('Sergio-btn').addEventListener('click',function(){
    scelect('Sergio');
    document.getElementById("Sergio-btn").disabled = true;
})
document.getElementById('Cristiano-btn').addEventListener('click',function(){
    scelect('Cristiano');
    document.getElementById("Cristiano-btn").disabled = true;
}) 

