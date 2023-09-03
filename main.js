   

    let flag = 0;
    var input = document.querySelector(".header_card_input");
    let sumbit = document.getElementById("sumbit");
    let other = document.querySelectorAll(".header_card_other a");
    localStorage.setItem('input',input.innerHTML)
    sumbit.onclick = checkAcc;
    other[0].onclick = createClick;
    other[1].onclick = resetPassword;


    
var checkAcc = function(){
        
}
function createClick(){
    if(flag===1){
        input.innerHTML=localStorage.getItem('input')
        other[0].innerHTML = "Create account"
        flag = 0
        return  
    }
    if(flag !== 0){
    input.innerHTML=localStorage.getItem('input')
    other[1].innerHTML="Reset Password"
    }
    let creatInput = document.createElement("input")
        creatInput.type = "password";
        creatInput.placeholder= "Enter your password"
        input.appendChild(creatInput);
        other[0].innerHTML="Back"
        document.querySelector(".header_card_title h1").innerHTML="Sign Up"
        flag=1;
}

function resetPassword(){
    if(flag === 2){
        input.innerHTML=localStorage.getItem('input')
        other[1].innerHTML="Reset Password"
        return
    }
    if(flag !== 0){
        input.innerHTML=localStorage.getItem('input')
        other[0].innerHTML = "Create account"
    }
    input.innerHTML=localStorage.getItem('input')
    input.removeChild(input.lastElementChild);
    other[1].innerHTML="Back"
    document.querySelector(".header_card_title h1").innerHTML="Reset Password"
    flag = 2;
}
console.log(flag)
window.onload



