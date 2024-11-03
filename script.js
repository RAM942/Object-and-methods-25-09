// object one 
let validation = {
    name: "raghuram",
    age: 24,
    course: "fullstack",
  
    fee: 35000,
    address: {
      doorno: 517,
      district: "warangal",
      mandal: "rayaparthi",
    },
    pincode: 506314,
  };
  // object two
  let validation2 = {
      gender : "male",
      name:"rishikesh"
  };
  // let newvar = Object.assign(validation,validation2);
  // console.log(newvar);
  validation.age=24;
  // console.log(validation.address.mandal)
  // if(!validation.hasOwnProperty("surname")){
  //     validation.surname="Kunuru"
  // }
  // console.log(validation);
  
  
  for(i in validation2){
    count=0
    for(j in validation){
      if(i===j){
        count++
      }
    }
    if(count==1){
      console.log(i ,"is not present")
      validation[i]=validation2[i]
    }
  
  }
  console.log(validation);