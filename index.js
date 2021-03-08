const containerElement=document.getElementById('container');
const addtable=document.getElementById('tables');
const arr=[" ","ones","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
addtable.addEventListener('click',tables);
function tables(e){
    e.preventDefault();
    
        return new Promise(resolve => {
            
            resolve();
    
        }).then((val)=>{
            const number=document.getElementById('tab').value;
            const creatediv=document.createElement('div');
            creatediv.classList.add('carddiv');
            for(let i=1;i<=12;i++)
            {
                const createp=document.createElement('p'); 
                createp.classList.add('cardp'); 
                setTimeout(()=>{
                    const newnum=number * i;
                    console.log(newnum);
                    //arr.push(newnum);
                    createp.innerText=`${number} ${arr[i]} are ${newnum}`;
                },i*2000)
               
                creatediv.appendChild(createp);
                
            }  
        containerElement.appendChild(creatediv);
    
            //console.log(val);
        });
        
   
}

   

