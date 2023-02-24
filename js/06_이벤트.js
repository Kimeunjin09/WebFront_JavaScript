// 인라인 이벤트 모델 확인하기
function fnTest1(btn) { // this로 button자체가 넘겨져옴
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}

// 고전 이벤트 모델 확인하기
document.getElementById("btn1").onclick = function() {
                                        // 익명함수
    alert('버튼 클릭됨')

    // 고전/표준 이벤트모델 장점
    // -> 이벤트 제거가 가능함

    // 요소의 속성 중 on 이벤트명 속성에 함수대신 null을 대입하여
    // 이벤트 삭제 (변수에 값을 새로 대입하여 덮어쓰기하는 원리)
    // 익명함수 내에 작성된거!
    document.getElementById("btn1").onclick = null;
}

// 제거 뿐만 아니라 이벤트 추가도 가능함

document.getElementById("btn1").onmouseover = function() {
    // 마우스가 요소 위로 올라왔을 때
    document.getElementById("btn1").style.backgroundColor = 'red';
}

document.getElementById("btn1").onmouseout = function() {
    // 마우스가 요소 밖으로 나갔을 때
    document.getElementById("btn1").style.backgroundColor = 'yellow';
}

// 고전 이벤트 모델 단점
// -> 한 요소에 동일한 이벤트 리스너에 대한
//    다수의 이벤트 핸들러를 작성할 수 없다
//    (여러개의 함수작성 불가, 마지막으로 대입된 이벤트 핸들러만 적용)
// -> 해결 방법 : 표준 이벤트 모델 사용

// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");

// btn2.addEventListener("이벤트명", 함수);

btn2.addEventListener("click", function() {

    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소
    console.log(this); // 이 this는 btn2임

    this.style.backgroundColor = 'pink';
    this.style.border = "3px solid red";
    this.style.padding = "10px";
    this.style.display = "block";
})

// 고전 이벤트 모델의 단점 보완한것 확인해보기
btn2.addEventListener("click", function() {
    this.style.fontSize = "20px";
    this.style.color = "red"
    this.style.fontWeight = "bold";
}) // click 중복함수 넣어도 다 실행됨

// 배경색이 입력한 값으로 변하는 박스
document.getElementById("input1").addEventListener("keyup", function() {
    // 박스 요소 선택

    const div1 = document.getElementById("div1");

    div1.style.backgroundColor = this.value; // this는 input박스
})

document.getElementById("input1").addEevntListener