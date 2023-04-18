import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  // document.querySelector('h4').innerHTML(post); // 예전에 사용했던 방식

  let post = '강남 우동 맛집';

  let [a, b] = useState(['여름 코트 추천', '역삼 우동동 맛집', '리액트 독학']);
  // let [c, d] = useState('역삼 우동 맛집');
  // let [e, f] = useState('리액트 독학');

  let [logo, setLogo] = useState('ReactBlog');

  let [따봉, 따봉변경] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false); // ui 현재상태 : 열림, 닫힘,보임, 1, true ....

  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // 모든 array 뒤에 map() 사용 가능
  // array의 자료 개수만큼 함수 안의 코드 실행해줌
  // 함수의 파라미터는 array 안에 있는 자료임
  // return에 뭐 적으면 array 담아줌
  [1,2,3].map(function(a) {
    return '123321';
    console.log(a);
  });

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      
      <Nav/>

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

      
      {/* 
      <div className='list'>
        <h4>{ a[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>🎃</span> { 따봉 } </h4>
        <p>4월 13일 발행</p>
      </div>
      <div className='list'>
        <h4>{ a[1] }</h4>
        <p>4월 13일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={ () => { 
          // 방법1. modal == false ? setModal(true) : setModal(false) 
          // 방법2. setModal(!modal);
          // 방법3.
          if (modal == true) { // 현재 모달이 열려있다면
            setModal(false); 
          } else { // 현재 모달이 닫혀있다면
            setModal(true);
          }

        } }>{ a[2] }</h4>
        <p>4월 13일 발행</p>
      </div> 
      */}
      
      {
        a.map(function(글, i) { // b: 순차적으로 접근한 요소 / i: 인덱스 : 0
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal); setTitle(i)}}>{ a[i] }
                <span onClick={ (e) => { 
                  e.stopPropagation(); // 이벤트 버블링 막아주는 메소드
                  // 따봉변경(따봉 + 1) 
                  let newLike = [...like]; // [0, 0, 0]
                  newLike[i]++;
                  setLike(newLike);
                // } }>🎃</span> { 따봉 }
                } }>🎃</span> { like[i] }
              </h4>
              <p>4월 13일 발행</p>
              <button onClick={() => {
                let copy = [...a];
                copy.splice(i, 1);
                b(copy);
              }}>삭제</button>
            </div>
          )
        })

        /*
        응용1. 글에 아무것도 입력안해도 추가버튼 누르면 추가 잘됨 => 막기

        응용2. 따봉버튼 수정 (추가, 삭제)

        응용3. 날짜 state로 만들어서 현재 날짜
        */
      }

      <input onChange={(e) => {
        입력값변경(e.target.value); // ''
        console.log(입력값); // 'ㅎ'
      }}/>

      <button onClick={() => {
        let copy = [...a]; // [,,,]
        copy.push(입력값); // [,,,ㅎ]
        b(copy);
      }}>추가</button>

      {/* <Modal></Modal> */}
      {/* <Modal/> */}

      { // 자바스크립트 쓰려면 {} 이거 열기
        // if (조건식) { // if문 쓸 수 없음.. => 삼항연산자 사용하기
        //   <Modal></Modal>
        // }
        // 삼항연산자
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        // 1 == 1 ? '맞음' : '틀림'
        modal == true ? <Modal color={'skyblue'} title={title} b={b} a={a} /> : null
      }

      <Modal2></Modal2>

      {/* 
        * 리액트에서 동적인 UI(원래 없었는데 생기는거) 만드는 STEP
        1. HTML,CSS로 미리 UI 디자인 해놓기
        2. UI의 현재 상태를 state로 저장해두기
        3. state의 상태에 따라서 UI가 어떻게 보일지 조건문 작성

        ** 챌린지 : 글제목을 클릭하면 모달창이 보이게
        ** 힌트 : 글제목 누르면 html 보이게 해주세요(x)
                  글제목 누르면 state의 값을 변경해주세요 (o)

        ** 챌린지 2탄 : 글제목 한 번 더 누르면 모달창 닫히게
       */} 이윤화 빠큐.ㅗㅗㅗㅗㅗㅗㅜㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ
    </div>
  );
}

/*
* 컴포넌트(축약한 HTML 덩어리) 만드는 법
1. function 만들고
2. return() 안에 html 담기
3. <함수명></함수명> 쓰기

* 컴포넌트 만들 때 주의사항
1. component 작명할 땐 영어 대문자로 시작하게 작명
2. return(<div></div>) 안에 html 태그들이 평행하게 여러개 들어가면 x
3. function App(){} 내부에 만들면 안된다

* 어떤 HTML들을 Component로 만드는게 좋을까?
- 사이트에 반복해서 출현하는 HTML 덩어리
- 긴 코드를 축약
- 다른 곳에서 코드 재사용 할 때
- 복잡한 코드를 작은 기능으로 나눌 때

* 컴포넌트의 단점
- 한 function 안에 있는 변수를 다른 function 호출할 수 없음
- props 문법을 이용해서 state <Modal>까지 전달해줘야 사용할 수 있음

* 챌린지 : 연습삼아 다른 컴포넌트 1개 만들기
*/

/*
  부모 -> 자식 state 전송하는 방법
  1. <자식컴포넌트 작명={state이름}> => 호출했던 곳
  2. props 파라미터 등록 후 props. 작명 사용 => 찐 컴포넌트

  챌린지1 : 글 수정 버튼 누르면 첫 글제목이 겨울코츠 추천으로 바뀌는
*/

function Modal(props) {
  return(
    <div className='modal' style={{background: props.color}}>
      <h4>{props.a[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ () => {
        let copy = [...props.a]; // ['여름 코트 추천', '역삼 우동동 맛집', '리액트 독학']
        copy[0] = '겨울코트 추천'; // ['겨울 코트 추천', '역삼 우동동 맛집', '리액트 독학']
        props.b(copy);                                                 
      }}>글수정</button>
    </div>
  )
}

// class를 이용한 옛날 React 문법
class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name : 'lee',
      age : 20
    }
  }
  render() {
    return(
      <div>안녕{this.state.age}
        <button onClick={() => {
          this.setState({age:21})
        }}>버튼</button>
      </div>
    )
  }
}

function Nav() {
  return(
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

        <h4>ReactBlog</h4>
      </div>
  )
}

export default App;
