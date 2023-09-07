const lettercontent = document.getElementsByClassName("lettercontent");
const contentinfohome = document.getElementsByClassName("contentinfohome");
const publicimg = document.getElementsByClassName("publicimg");

const ctteclass = document.getElementsByClassName("cttecontent");

async function hideunhidethecontent(hideyesorno){
    if (hideyesorno === true){
        for (var i = 0; i < lettercontent.length; i++) {
            lettercontent[i].style.display = "none";
        }
        for (var i = 0; i < contentinfohome.length; i++) {
            contentinfohome[i].style.display = "none";
        }
        for (var i = 0; i < publicimg.length; i++) {
            publicimg[i].style.display = "none";
        }
    }else{
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

document.getElementById("ctte").addEventListener("click",function(){
    hideunhidethecontent(true);
    for (var i = 0; i < ctteclass.length; i++) {
        ctteclass[i].style.display = "block";
    }
})

document.getElementById("home").addEventListener("click",function(){
    hideunhidethecontent(false);
    for (var i = 0; i < ctteclass.length; i++) {
        ctteclass[i].style.display = "none";
    }
})