import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

{/* <Detail2></Detail2>
class Detail2 extends React.Component {
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
} */}

function Detail2() {

}

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`
// let NewBtn = styled.button(YellowBtn)`

// `

let Box = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props) {

    useEffect(() => {
        // 여기 적은 코드는 컴포넌트 로드 & 업데이트 마다 실행
        for (let i = 0; i < 10000; i++) {
            console.log(i);
        }
    })
    
    // setTimeout(() => { 
    //     let alerts = document.getElementsByClassName("alert");
    //     for(let i=0; i<alerts.length; i++){
    //         alerts[i].style.display="none";
    //     }
    // }, 2000);

    setTimeout(()=>{
        document.getElementsByClassName("alert")[0].setAttribute("style", "display : none;");
    }, 2000);

    let [count, setCount] = useState(0);

    let {id} = useParams();
    console.log(id);

    let 찾은상품 = props.shoes.find(function(x) {
        return x.id == id;
    })

    return(
        <div className="container">
            <div className="alert alert-warning">
                2초 이내 구매 시 할인
            </div>
            {count}
            <button onClick={() => { setCount(count + 1)}}>버튼</button>
            <Box>
            <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn>
            </Box>
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        </div> 
    )
}

export default Detail;