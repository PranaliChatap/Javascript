
//Hide todos list
function hidetodolist(){
    document.querySelector('ol').style.display = 'none';
 }

//Show todos list
function showtodolist(){
   document.querySelector('ol').style.display = '';         //block element
}


//First method
// function alldata(){

//     //store the input in data variable
//    const data = document.getElementById('todoinput');
//     //console.log(data.value);

//    //Add todo in ordered list
//    const todo = document.querySelector('ol');
//    todo.innerHTML += `<li>${data.value}</li>`;
 
// }


// const ol = document.querySelector("ol");
// const newtodoitem = document.createElement("li")
// const newtodoitemtext = document.createTextNode("Javascript Learning");
// newtodoitem.append(newtodoitemtext);
// ol.append(newtodoitem);



//Second method
function alldata(){

   //access input value in data variable
   const data = document.getElementById('todoinput').value;
   
   //access ol in ol variable
   const ol = document.querySelector("ol");

   //create element  li  and store it in newtodoitem
   const newtodoitem = document.createElement("li");

   //using createTextNode stored the data of input in newtodoitemtext
   const  newtodoitemtext = document.createTextNode(data);


   //create element button and store it in newtodobtn
   const newtodobtn = document.createElement("button");

   //give inner text to newtodobtn
   newtodobtn.innerHTML = "Delete";

   //add class to newtodobtn for css
   newtodobtn.classList.add("btn");
     
   
   //append the newtodoitemtext(data) in newtodoitem(li) 
   newtodoitem.append(newtodoitemtext);

   //append the newtodobtn in newtodoitem
   newtodoitem.append(newtodobtn);

   //now append newtodoitem in ordered list
   ol.append(newtodoitem);


}












