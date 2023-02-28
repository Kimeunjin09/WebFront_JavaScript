// 배열 확인
document.getElementById("btn1").addEventListener("click", function () {
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "딸기", "바나나"];
  
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
  
    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 길이 증가
    arr1[0] = "김밥";
    arr1[1] = 5000;
    arr1[2] = true;
  
    // 중간 인덱스 건너뛰면, 건너 뛴 부분은 empty로 남음
    arr1[5] = 111; // 추가 가능
  
    console.log(arr1);
  
    // for문으로 배열 요소 반복 접근하기
  
    // 1. 일반 for문 - 배열, 컬렉션
    //   for (let i = 0; i < arr4.length; i++) {
    //     console.log(arr4[i]);
    //   }
  
    // 2. 배열.forEach( function(item, index){ 반복 수행할 코드 } ) - 배열만 가능
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스
  
    // * 여러 요소를 얻어온 경우(HTMLCollection, NodeLIst)는
    //   배열이 아니므로 forEach()문 쓸 수 없다.
    //   arr4.forEach(function (a, i) {
    //     console.log(i + ":" + a);
    //   });
  
    // 3. for( item of 배열(또는 컬렉션) ) {} - 배열, 컬렉션
    //            (Symbol.iterator 가 존재하는 객체에 사용 가능)
    // == Java 향상된 for문과 비슷하게 생김
    //   for (let item of arr4) {
    //     console.log(item);
    //   }
  
    // li 태그에 작성된 값 얻어와서 합 구하기
    // const list = document.getElementsByTagName("li"); // HTMLCollection
    const list = document.querySelectorAll("#test > li"); // NodeList
  
    let sum = 0;
    for (let item of list) {
      sum += Number(item.innerText);
    }
    console.log(`sum : ${sum}`);
  
    // 4. for (let key in 객체) - JS객체용 for문
  });
  
  // 배열 관련 함수 확인
  
  document.getElementById("btn2").addEventListener("click", function () {
    // 비어있는 배열 생성
    const arr = [];
  
    arr.push("홍");
    arr.push("길");
    arr.push("동");
    arr.push("천");
    arr.push("재");
  
    console.log(arr.toString());
  
    const temp = arr.pop();
    console.log(temp);
  
    console.log(arr.indexOf("천"));
    console.log(arr.indexOf("재"));
  
    console.log(arr.sort());
  
    const numArr = [5, 3, 2, 10, 1];
  
    console.log(numArr.sort());
    // 1, 10, 2, 3, 5
  
    console.log(
      numArr.sort(function (a, b) {
        return a - b;
      })
    );
    // * sort() 함수는 원본 배열의 순서를 정렬함
    // -> 원본 훼손 발생 (원치 않을 경우 깊은 복사를 이용해 해결)
    console.log(numArr);
  });
  
  document.getElementById("btn3").addEventListener("click", function () {
  // 1 ~ 45 난수
  
    const lotto = []; // 빈배열
  
    while (lotto.length < 6) {
      const ran = Math.floor(Math.random() * 45 + 1);
  
      if (lotto.indexOf(ran) == -1) { // 배열에 난수값이 없다면
        lotto.push(ran);
      }
    }
  
    lotto.sort(function (a, b) {
      return a - b;
    });
  
    console.log("로또번호 : " + lotto);
  });



  /*추가 ++

  ${ } 사이에 변수나 연산 등을 삽입할 수 있음
  ${ } 의 결과는 문자열로 자동 변환됨

  기존 따옴표 방식에서는 + 연산자로 여러번 이어 붙여야 했음
  ex) console.log(name + "의 구매가는 " + (price * num) + "원 입니다");

  ${ } 사용
  ex) console.log(`${5+10} 입니다`)  // 15 입니다

  */