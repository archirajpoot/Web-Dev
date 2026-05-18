let frm=document.querySelector("#formData");
frm.addEventListener("submit",(e)=>{
    e.preventDefault();
     let data={
    name:frm[0].value,
    email:frm[1].value,
    pass:frm[2].value
    };
    localStorage.setItem("fromdata",JSON.stringify(data));  
});





   let formData= document.querySelector("#formData")
   formData.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(formData[0].value);
    // console.log(formData[1].value);
    // console.log(formData[2].value);
    let data={
        name:formData[0].value,
        email:formData[1].value,
        pass:formData[2].value,

    }
    localStorage.setItem("userData",JSON.stringify(data))
   })

 let LoginData=  document.querySelector("#LoginData")
 LoginData.addEventListener("submit",(e)=>{
    e.preventDefault()

    let login={
        email:LoginData[0].value,
        pass:LoginData[1].value,

    }
 let localStorageData= localStorage.getItem("userData")
   console.log(localStorageData);
 let mainData=JSON.parse(localStorageData)
 console.log(mainData);

 if(login.email===mainData.email && login.pass===mainData.pass){
    alert("aapne sab kuch sahi kiya haii...")
 }else{
    alert("kuch nhi ho sakta aapse...")
 }
 })
