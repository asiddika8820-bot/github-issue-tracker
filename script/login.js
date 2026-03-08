//console.log("hello");
 document.getElementById("Signin-btn").addEventListener("click",function()
 {
    //console.log("login button clicked");
//get the mobile number
const userName =document.getElementById("user-name");
const userId=userName.value;
console.log(userId);


//get the pin
const inputPass = document.getElementById("input-pass");
const pass = inputPass.value;
console.log(pass);
//match pin ,mobile number

if(userId==="admin" && pass === "admin123")
{
    alert("login success");
    window.location.assign("home.html")
} 
else{
    alert("login failed");
    return;
}
//alert 


}); 