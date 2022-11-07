const user = {
        username : "shailesh",
        age      : 23,
        email    :"gokhale@gmail.com",
        "mobile numbers":[82078645671,3573216735],
        address      :"nagpur",
        "persional details":{
            f_member:5,
            DOB     : 22-5-2020
        }
    }


    // for(let key in user){
    //         document.write(`key is ${key} and values is  ${user[key]}`)
    //     }

     
    //user is not iterable so first store values in another variable then iterate
    const values = Object.values(user)
    // console.log(values)               //it gives array
    for(let val of values){        // it is not giving array
        console.log(val)
    }
          

    
    //Object.enteries 
    //    for(let [key,value] of Object.entries(user)){
    //        console.log(key + " : " + value)
    //     }
        
        // for(let key of Object.keys(user)){
        //      console.log(key +"    "+user[key])
        //  }
       

    //for in      
        // let keys = Object.keys(user)
        //  for(let key in keys){
        //     console.log(key +"    "+keys[key])
        // }
      
       

  
        
    //destructuring    
    // let {username, age, email, address} = user;
    // console.log(username);
    // console.log(email);
    // console.log(address);

    
    
    

        




