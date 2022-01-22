const elements = [document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3"),document.getElementById("b4"),document.getElementById("b5"),document.getElementById("b6"),document.getElementById("b7"),document.getElementById("b8"),document.getElementById("b9")];
let filds = ["", "", "", "", "", "", "", "", ""];
const menu = [document.getElementById("xwins"),document.getElementById("reset"),document.getElementById("owins")];
let abc = [0,0,0];
let moves = 1;
let winner = "";
let owins = 0;
let xwins = 0;

function test(ind){
    if(moves % 2 == 0)
    filds[ind] = "o";
    else{
        filds[ind] = "x";
    }
    testwin();
}
function testwin(){

    if(filds[0]===filds[1] && filds[1]===filds[2] && filds[1]!==""){
        win(0,1,2);   
    }
    if((filds[3]===filds[4] && filds[4]===filds[5])&&(filds[1]===filds[4] && filds[4]===filds[7]) && filds[4]!==""){
        win(3,4,5);
    }
    else if(filds[3]===filds[4] && filds[4]===filds[5] && filds[4]!==""){
        win(3,4,5);    
    }
    else if(filds[1]===filds[4] && filds[4]===filds[7] && filds[4]!==""){
        win(1,4,7);   
    }
    if(filds[6]===filds[7] && filds[7]===filds[8] && filds[7]!==""){
        win(6,7,8);     
    }
    if(filds[0]===filds[3] && filds[3]===filds[6] && filds[3]!==""){
        win(0,3,6);    
    }
    if(filds[2]===filds[5] && filds[5]===filds[8] && filds[5]!==""){
        win(2,5,8);   
    }
    if((filds[0]===filds[4] && filds[4]===filds[8]) && (filds[2]===filds[4] && filds[4]===filds[6]) && filds[4]!==""){
        win(0,4,8);   
    }
    else if(filds[0]===filds[4] && filds[4]===filds[8] && filds[4]!==""){
        win(0,4,8);   
    }
    else if(filds[2]===filds[4] && filds[4]===filds[6] && filds[4]!==""){
        win(2,4,6);   
    }
}

function win(a,b,c){
   elements[a].classList.add('win');
   elements[b].classList.add('win');
   elements[c].classList.add('win');
   abc[0] = a;
   abc[1] = b;
   abc[2] = c;
   if(moves % 2 === 0){
    winner = "o";
    owins++;
   }
   else{
    winner = "x";
    xwins++;
   }
   menu[0].innerHTML = "x win " + xwins + " times";
   menu[2].innerHTML = "o win " + owins + " times";
   console.log(winner);
}

 function click(element, index, array)
{
  array[index].onclick = function(){
      if(filds[index] === "" && winner ===""){
        test(index);
        array[index].innerHTML = filds[index]; 
        moves++;
      }
  }
}

menu[1].onclick = function(){
    moves = 1;
    filds.forEach(clear);
    winner = "";
    elements[abc[0]].classList.remove('win');
    elements[abc[1]].classList.remove('win');
    elements[abc[2]].classList.remove('win');
    elements.forEach(clearfilds);
    console.log("clear");
}
function clearfilds(element, index, array){
    array[index].innerHTML = "";
}
function clear(element, index, array){
    array[index] = "";
}

elements.forEach(click);





