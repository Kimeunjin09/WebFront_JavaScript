// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적의 의미, 값/속성 추적x
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus() {

    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행
    const n1 = Number(num1.value); // input값이 String으로 넘어오기 때문에 Number로 형변환 해주기
    const n2 = Number(num2.value);

    result.innerText = n1 + n2;
}
function minus() {
    // 위에는 풀어서 쓴거고 이렇게 쓸수도있음)
    result.innerText = Number(num1.value)-Number(num2.value);
}

function multi() {
    result.innerText = Number(num1.value)*Number(num2.value);
}

function div() {
    result.innerText = Number(num1.value)/Number(num2.value);
}

function mod() {
    result.innerText = Number(num1.value)%Number(num2.value);
}