
//Hide todos list
function hidetodolist(){
    document.querySelector('ol').style.display = 'none';
 }

//Show todos list
function showtodolist(){
   document.querySelector('ol').style.display = '';         //block element
}



function alldata(){

    //store the input in data variable
   const data = document.getElementById('todoinput');
    //console.log(data.value);

   //Add todo in ordered list
   const todo = document.querySelector('ol');
   todo.innerHTML += `<li>${data.value}</li>`;
 
}












