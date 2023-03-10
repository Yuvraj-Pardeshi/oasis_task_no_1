let input = document.getElementById('input-box');
let btns = document.querySelectorAll('button');
console.log(btns);
let str = "";
let arr = Array.from(btns);
console.log(arr);
arr.forEach(btns =>{
    btns.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
          try{
            str = eval(str);
            input.value = str;
          }
          catch{
            alert("Invalid Operation");
          }
        }
        else if(e.target.innerHTML=="AC"){
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML=="DEL"){
            str = str.slice(0,-1);
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
}) 