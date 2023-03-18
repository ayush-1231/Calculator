let input= document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string ="";
let arr=Array.from(buttons);
input.style.color="white";

arr.forEach(buttons =>{
    buttons.addEventListener('click',(e) => {
        try{
            
        if(e.target.innerHTML =='='){ // equal 
            string=eval(string);
        }
        else if(e.target.innerHTML=='AC'){ // clear
            string="";
        }
        else if(e.target.innerHTML== 'Del'){  // delete
            let del = (String)(string);
            string=del.substring(0,del.length-1);
        }
        else{ // button
            console.log(e.target.value);
            string+=e.target.innerHTML;

            
        }
        input.value=string;
        }catch(err){

            input.value="Invalid Operation";
            String ="";
        }
        
    })
})