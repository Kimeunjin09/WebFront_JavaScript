// 아이디 - 영문 소문자 + 숫자 / 5글자 이상
document.getElementById("inputId").addEventListener("keypress", function() {
    const checkId = document.getElementById("checkId");
    const regEXP = /^[a-z0-9]{5,}$/;

    if(regEXP.test(this.value)) {
        checkId.innerText = "아이디 사용 가능";

    } else {
        checkId.innerText = "아이디 사용 불가능";
    }
})

// 비밀번호 + 확인 - 영문대/소문자 + 특수문자 + 숫자 / 8글자 이상
const inputPW = document.getElementById("inputPw");
const reinputPw = document.getElementById("reinputPw");

document.getElementById("inputPw").addEventListener("keypress", function() {
    const checkPw = document.getElementById("checkPw");
    const regEXP = /^[a-zA-Z0-9]~!@#$%^&*(){8,}$/;

})

// 이름 - 한글 2글자 이상

// 휴대폰번호 -숫자만 단, 010으로 시작

// 주민등록번호 - 단, 7번째 숫자는 1,2,3,4 만 가능 [  6글자  ] - [       ]

// 이메일 - @무조건 포함. 맨뒤는 .com 으로 끝날 것