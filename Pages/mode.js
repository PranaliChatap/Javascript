//Class List 

// const classlistelement = document.querySelector(".container");
// console.dir(classlistelement.classList);
// classlistelement.classList.remove("container");
// classlistelement.classList.remove("container-font");
// classlistelement.classList.add("bg-light");

//Light Mode

function lightmode(){
    const element = document.querySelector("body");
    element.classList.remove("dark");
    element.classList.add("light");

   const lightmode = document.querySelector(".lightmode");
    lightmode.classList.add("hide");
 
    const darkmode = document.querySelector(".darkmode");
    darkmode.classList.remove("hide");

 }
 
 //Dark Mode
 
 function darkmode(){
    const element = document.querySelector("body");
    element.classList.remove("light");
    element.classList.add("dark");
    
 
    const lightmode = document.querySelector(".lightmode");
    lightmode.classList.remove("hide");
 
    const darkmode = document.querySelector(".darkmode");
    darkmode.classList.add("hide");

 
 }
 
 //Hide todos list
function hidetodolist(){
   document.querySelector('ol').style.display = 'none';
}

//Show todos list
function showtodolist(){
  document.querySelector('ol').style.display = '';         //block element
}


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
   // newtodoitem.append(newtodobtn);

   //now append newtodoitem in ordered list
   ol.append(newtodoitem);
   ol.append(newtodobtn);


}



