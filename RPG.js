let allEl = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'.split("")

let newPassEl = document.getElementById("pass-el")

let passwordGen = document.getElementById("pass-Gen")

passwordGen.addEventListener("click",function passGen(){

    let newPass =""
    for(let i=0;i<=8;i++){
        let pickerEl = Math.floor(Math.random()* allEl.length)
        newPass +=  allEl[pickerEl]

    }

    return newPassEl.value=newPass

})




