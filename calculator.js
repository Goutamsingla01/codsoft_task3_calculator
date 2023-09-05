let button=document.querySelectorAll('#button')
let input=document.querySelector('input')
let string='';
for(let i=0; i<=19;i++){
    button[i].addEventListener('click',update) 
}

function update(elem){
    let buttonId=elem.currentTarget.textContent;
    if(buttonId=='='){
        string=eval(string)
        input.value=string
        string=input.value;
     }
     else if(buttonId=='AC'){
        string=''
        input.value=string 
     }
     else if(buttonId=='C'){
        string=string.substring(0,string.length-1)
        input.value=string 
     }
     else{
    string=string+buttonId
    input.value=string    
     }
}
