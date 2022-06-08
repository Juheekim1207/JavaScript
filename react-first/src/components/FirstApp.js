import React from "react"; //리액트 연결
import './MyStyle.css'; //현재폴더 ./ & css파일 연결 
import img9 from '../9.jpg';
import s4 from '../image/s4.JPG';

const FirstApp=()=>{
    //style을 변수에 저장 
    const styleImg={
        width: '200px',
        border: '5px inset gray',
        marginLeft: '100px',
        marginTop: '20px'
    };
    return(
        //반드시 하나의 태그로 전체를 감싸줘야 한다 : 보통 div로
        <div>
            {/* h2의 클래스 적용 */}
            <h2 className="line" style={{fontFamily:'East Sea Dokdo'}}>First App Component!!!</h2>
             <div style={{fontSize:'25px',color:'green',marginLeft:'100px',fontFamily:'Gowun Batang'}}> {/*css를 직접 줄 때는 중괄호 두개 사용 */}
                안녕하세요 반가워요!!!
            </div>
            <h3>src 영역의 이미지는 직접 호출할 수 없어 import 해와야 한다</h3>
            <img src={img9} style={styleImg} alt=""/> {/*img태그 사용시 필수 : alt="" */}
            <img alt="" src={s4} style={{width: '200px', border: '5px solid black', borderRadius: '100px'}}/>
            <h3>Public 영역의 이미지는 직접 호출 가능</h3>
            <img src="../s5.JPG" alt=""/>
        </div>
    )
}

export default FirstApp;