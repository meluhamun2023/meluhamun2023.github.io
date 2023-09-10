const lettercontent = document.getElementsByClassName("lettercontent");
const contactinfo = document.getElementsByClassName("contactinfo");
const contentinfohome = document.getElementsByClassName("contentinfohome");
const publicimg = document.getElementsByClassName("publicimg");

const ctteclass = document.getElementsByClassName("coml");
const ltitle = document.getElementById("ltitle");
const atitle = document.getElementById("atitle");

async function hideunhidethecontent(hideyesorno){
    if (hideyesorno === true){
        ltitle.style.display = "none";
        atitle.style.display = "none";
        document.getElementById("ctitle").style.display = "flex";
        document.getElementById("cdesc").style.display = "flex";
        for (var i = 0; i < lettercontent.length; i++) {
            lettercontent[i].style.display = "none";
        }
        for (var i = 0; i < contentinfohome.length; i++) {
            contentinfohome[i].style.display = "none";
        }
        for (var i = 0; i < publicimg.length; i++) {
            publicimg[i].style.display = "none";
        }
    }else if (hideyesorno === false){
        ltitle.style.display = "flex";
        atitle.style.display = "flex";
        document.getElementById("ctitle").style.display = "none";
        document.getElementById("cdesc").style.display = "none";
        for (var i = 0; i < lettercontent.length; i++) {
            lettercontent[i].style.display = "flex";
        }
        for (var i = 0; i < contentinfohome.length; i++) {
            contentinfohome[i].style.display = "flex";
        }
        for (var i = 0; i < publicimg.length; i++) {
            publicimg[i].style.display = "flex";
        }
    }
}

async function opencommite(variftrue){
    if (variftrue === true){
        hideunhidethecontent(true);
        for (var i = 0; i < ctteclass.length; i++) {
            ctteclass[i].style.display = "flex";
        }
    }else if (variftrue === false){
        hideunhidethecontent(false);
        for (var i = 0; i < ctteclass.length; i++) {
            ctteclass[i].style.display = "none";
        }
    }else{
        for (var i = 0; i < ctteclass.length; i++) {
            ctteclass[i].style.display = "none";
        } 
    }
}

async function opencontact(opencontactvar){
    if (opencontactvar === true){
        document.getElementById("ctitle").style.display = "none";
        document.getElementById("cdesc").style.display = "none";
        for (var i = 0; i < contactinfo.length; i++) {
            contactinfo[i].style.display = "flex";
        }
    }else{
        for (var i = 0; i < contactinfo.length; i++) {
            contactinfo[i].style.display = "none";
        }
    }
}

const burgerclass = document.querySelector(".burgerframe");

document.getElementById("ctte").addEventListener("click",function(){
    opencommite(true);
    opencontact(false)
})

document.getElementById("home").addEventListener("click",function(){
    opencommite(false);
    opencontact(false);
})

document.getElementById("mobilecb").addEventListener("click",function(){
    hideunhidethecontent(true);
    opencontact(true);
    opencommite();
    burgerclass.style.display = "none"
})

document.getElementById("mobhb").addEventListener("click",function(){
    hideunhidethecontent(false);
    for (var i = 0; i < ctteclass.length; i++) {
        ctteclass[i].style.display = "none";
    };
    opencontact(false);
    burgerclass.style.display = "none"
})

document.getElementById("contactbn").addEventListener("click",function(){
    hideunhidethecontent(true);
    opencontact(true);
    opencommite()
})

document.getElementById("mobcb").addEventListener("click",function(){
    opencontact(true);
    burgerclass.style.display = "none"
})

document.getElementById("home").addEventListener("click",function(){
    hideunhidethecontent(false);
    for (var i = 0; i < ctteclass.length; i++) {
        ctteclass[i].style.display = "none";
    };
    opencontact(false)
})

document.getElementById("burgericon").addEventListener("click",function(){
    if (burgerclass.style.display === "flex"){
        burgerclass.style.display = "none"
    }else{
        burgerclass.style.display = "flex"
    }
})

document.getElementById("logo").addEventListener("click",function(){
    window.location.href = "https://meluhamun2023.github.io"
})