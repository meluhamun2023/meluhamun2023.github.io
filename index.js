const dgabutton = document.getElementById("dga");
const alb = document.getElementById("atr");
const pja = document.getElementById("pja");

const gba = document.getElementById("ipa");
let statusretireved = null;

async function getdatastatus(){
    if (statusretireved === null){
        try{
            const response = await fetch("https://meluhamun.aakashgudivada.repl.co/g2");
            if (!response.ok){
                throw new Error("welp")
            }
            const data = await response.json();
            statusretireved = data;
            return data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }else{
        return statusretireved
    }
}

alb.addEventListener('click',function(){
    window.location.href = "Allocationhtml.html";
});

dgabutton.addEventListener("click",async function(){
    dgabutton.textContent = 'Loading..';
    try{
        const apidata = await getdatastatus();
        if (apidata[1] !== false){
            window.location.href = apidata[1]
        }else{
            dgabutton.textContent = "Delegate Applications are not open yet!";
        };
    }catch(error){
        console.log(error);
    }
});

pja.addEventListener("click",async function(){
    pja.textContent = 'Loading..';
    try{
        const apidata = await getdatastatus();
        if (apidata[3] !== false){
            window.location.href = apidata[3]
        }else{
            pja.textContent = "PhotoJournalism Applications are not open yet!";
        };
    }catch(error){
        console.log(error);
    }
});

gba.addEventListener("click",async function(){
    gba.textContent = 'Loading..';
    try{
        const apidata = await getdatastatus();
        if (apidata[2] !== false){
            window.location.href = apidata[2]
        }else{
            gba.textContent = "International Press Applications are not open yet!";
        };
    }catch(error){
        console.log(error);
    }
});

document.getElementById("ow").addEventListener("click",function(){
    window.location.href = "mainpage.html";
})

document.getElementById("sdga").addEventListener("click",function(){
    window.location.href = "https://docs.google.com/forms/d/10BX5u26IkstEJEsU-21b2SdA7AsMUVMlG_3tapWbUjc";
})

document.getElementById("af").addEventListener("click",function(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdkYdb0Qcj3Z0klq-8d3m-x11oIGjwliwsYDhFfKQNL4QgV2w/viewform";
})

document.getElementById("tf").addEventListener("click",function(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdGNBnv8Oy5jQSD0jSya6yab4iIAonHPcV1Bm5uOKbxdLIDTQ/viewform";
})

document.getElementById("gmailbutton").addEventListener("click",function(){
    window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=lqrsljbfLvDFVhTpqmRzbMntHSCLQBwDkcWjckTPbtpCmFwpxlWgHrZZxWKxQbCQPTDRVSlRHFPsMnczp";
})

document.getElementById("instabutton").addEventListener("click",function(){
    window.location.href = "https://www.instagram.com/meluhamun2023/";
})