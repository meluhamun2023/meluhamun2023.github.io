const e = require("express");

const errortext = document.getElementById("errorbox");
const subbutton = document.getElementById("submit");
const pcode = document.getElementById("pincodeinput");
let pcodetogive = "mmun#23";

function showerror(errorname,cleartext){
    if (cleartext === true){
        pcodenput.value = ""
    }
    subbutton.style.margin = "10px 15%";
    errortext.textContent = errorname
    errortext.style.display = "inline"
    subbutton.style.backgroundColor = "#49a65b"
}

subbutton.addEventListener("click",function(){
    if (pcode.value !== ""){
        if (pcode.textContent == pcodetogive){
            window.location.href = "dashboard.html"
        }else{
            showerror("Wrong Pincode",true)
        }
    }else{
        showerror("No email input given",false)
    }
})