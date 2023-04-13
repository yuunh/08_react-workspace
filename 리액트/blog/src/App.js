import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // document.querySelector('h4').innerHTML(post); // 예전에 사용했던 방식

  let post = '강남 우동 맛집';

  let [a, b] = useState(['여름 코트 추천', '역삼 우동동 맛집', '리액트 독학']);
  // let [c, d] = useState('역삼 우동 맛집');
  // let [e, f] = useState('리액트 독학');

  let [logo, setLogo] = useState('ReactBlog');

  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    console.log(1);
  }


  return (
    <div className="App">
      <div className="black-nav">
        {/* 
          ** JSX 문법
          1. 리액트에서는 class 말고 className 이라고 쓰자
          => 왜 리액트에서는 JSX 문법을 사용할까?
          원래 : 리액트 <div> 만들고자 하면
          React.createEletmemt('div', 'helloworld');
          이런 식으로 어렵게 코드 짜야했음

          2. 변수 넣을 때 {중괄호}

          3. style 넣을 땐 style={ {속성 : 속성값 }}
          => ex) font-size : 뺄셈처럼 인식 => fontSize

          4. return() 안에 병렬로 태그 2개 이상 기입 금지

          - state 만드는 법
          1. import {useState}
          2. useState(보관할 자료)
          3. let [작명, 작명]

          ** state 사용하는 이유
          => 변수로 선언한 경우 : 변수 내용 바뀌게 되면, 변수 내용 바뀌었으니까 html도 고쳐달라 => 생자바스크립트
          => state로 선언한 경우 : state 변경이 일어나면, state가 포함된 html을 자동으로 재랜더링 해준다.

          // 전부 다 state로 선언하면 될까?
          => state 이점 : 자주 변경되는 데이터 (로고, 대메뉴 ..)
          => 상품명, 글제목, 가격 이런 것처럼 자주 변할 것 같은 데이터들

          ** 자주 변경 되는 데이터 state에 저장해놨다가 html {데이터바인딩}
          1. 변경할 일이 없는 데이터들
          2. 굳이 html에 표기가 필요없는 데이터 그냥 변수에 저장

          - onClick={} 안에 함수 이름을 넣어야함
          <div onclick="실행할 구문"></div> => 원래 방식
          <div onClick={실행할 함수명}</div>
          => Click 대문자!
          => {} 중괄호 사용!
          => 그냥 코드가 아니라 함수를 넣어야 동작함
          => 함수 만드는 문법 바로 넣어도 상관 없음
          
          let[따봉, 따봉변경] = useState(0);
          사용법
          따봉변경(새로운값)
          => state 변경 함수는 () 안에 넣은 걸로 state를 갈아치워주는 함수
          따봉변경(따봉 = 따봉 + 1); // 이런 거 안됨
          따봉변경(따봉 + 1);

          // 오늘 배운 내용 정리
          1. 클릭시 뭔가 실행하고 싶으면 onClick={함수} 이렇게 이벤트 핸들러를 담아서 사용해라
          2. state를 변경하시려면 state 변경 함수를 꼭 이용해라
          => state 변경 함수는 () 안에 입력한 걸로 기존 state를 갈아치워준다
          => 중요하니 외우셈!!

          글제목변경('가을 코트 추천') => 이거 왜 안되나요?
          기존 state를 갈아 치워주기 때문에 
          ['여름 코트 추천', '역삼 우동동 맛집', '리액트 독학']
          글제목변경(['가을 코트 추천', '역삼 우동동 맛집', '리액트 독학'])

          [...복사할데이터] => 독립적인 복사본을 생성해줌 (깊은 복사)
          => 리액트에서 array, object state를 수정하고 싶으면
          독립적인 카피본을 만들어서 수정
          [...기존state]

          ** 응용문제 : 가나다순 정렬버튼
        */}

        <h4>{ logo }</h4>
      </div>

      <button onClick={ () => { 
          // 글제목 변경
          // b(['가을 코트 추천', '역삼 우동동 맛집', '리액트 독학'])

          let copy = [...a]; // ... 새로운 주소값 부여
          copy[0] = '가을 코트 추천';
          b(copy);

        }}>글제목 변경</button>

        <button onClick={ () => { 
          let copy = [...a].sort();
          b(copy);

        }}>정렬</button>

      <div className='list'>
        <h4>{ a[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>🎃</span> { 따봉 } </h4>
        <p>4월 13일 발행</p>
      </div>
      <div className='list'>
        <h4>{ a[1] }</h4>
        <p>4월 13일 발행</p>
      </div>
      <div className='list'>
        <h4>{ a[2] }</h4>
        <p>4월 13일 발행</p>
      </div>
    </div>
  );
}

export default App;
