// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적의 의미, 값/속성 추적x
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function calc(btn) {
    // op 에는  +, -, *, / , % 중 하나가 전달됨

    console.log(btn);

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    const op = btn.innerText; // 클릭된 버튼에 작성된 내용을 얻어옴
                              // _ - * / % 얻어온거

    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS 코드로 해석/수행하는 함수
    // -> 속도가 느림 + 보안 이슈로 인해 사용 지양(사용 금지)

    // result.innerText = eval(n1 + op +n2); 금지!

    // new Function() 사용

    result.innerText = new Function("return " + n1 + op + n2)();
    // 문자열 합치는거라 return 뒤에 쌍따옴표 띄어쓰기 해야함
}