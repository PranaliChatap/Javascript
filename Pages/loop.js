// const element = document.querySelectorAll('p');
// console.log(element);

//Using simple for loop
// for(let ele = 0; ele < element.length ; ele++){
//    if(element[ele].innerText.includes("pannu")){
//       element[ele].innerText = "hello Pranali";
//       console.log("Yes using simple for loop", ele)
//    }
// }


//Using for each
// element.forEach((ele) => {
//     if(ele.innerText.includes("pannu")){
//         ele.innerText = "hello Pranali";
//         // console.log("Yes using for each", ele)
//      }
// })

//Using for of
// for(let ele of element){
//     if(ele.innerText.includes("pannu")){
//         ele.innerText = "hello Pranali";
//         console.log("Yes using for of", ele)
//      }
// }

const element = document.querySelectorAll('p');
console.log(element);

// Using for in
for(let ele in element){
    if(element[ele].innerText="pannu"){            //includes give typerror
        element[ele].innerText = "hello Everyone";
        console.log("Yes using for in", element[ele])
     }
}

