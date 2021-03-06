"use strict ";


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#register-btn")

registerBtn.addEventListener("click",register);

// 이 로직은 프로트 엔드에서만 처리해주면 되서 비밀번호 확인 필요 x
function register(){
    if(!id.value) return alert("아이디를 입력하여 주세요")
    if(!name.value) return alert("이름을 입력하여 주세요")
    if(!password.value) return alert("비밀번호를 입력하여 주세요")
    if(!confirmPassword.value) return alert("비밀번호를 확인해 주세요")

    if (password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다")
    }

    const req = {
        id: id.value,
        name: name.value,
        password : password.value,
        
    };
   
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) =>{
        if (res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"))
    });
}