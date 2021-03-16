console.log('Hi');
let val,op;
//button k click hone par value lene k liye e.target.innerText and button ko acces karne k liye queryselectorAll
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button')
let screenValue="";
for( item of buttons){
item.addEventListener('click',(e)=>{
   buttonText=e.target.innerText;
   if(buttonText=='*')
  { buttonText='*';
  screenValue+=buttonText;
    screen.value=screenValue;


}
   else if(buttonText=="C")
   {screenValue=" ";
   screen.value=screenValue;

   }
   else if(buttonText=="=")
   {
       screen.value=eval(screenValue);
   }
   else
   {
       screenValue+=buttonText;
       screen.value=screenValue;
   }
  
})

}


