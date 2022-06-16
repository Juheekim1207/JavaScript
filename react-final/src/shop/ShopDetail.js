import React,{useState,useEffect} from "react";
import '../App.css';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ShopDetail=()=>{
    const {num}=useParams();
    const [data,setData]=useState('');
    const Navi=useNavigate();

    //삭제 다이얼로그에 대한 코드 추가 
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    //url
    let detailUrl="http://localhost:9001/shop/detail?num="+num;
    let photoUrl="http://localhost:9001/save/";
    let deleteUrl="http://localhost:9001/shop/delete?num="+num;

    //스프링으로부터 num에 해당하는 data 받기
    const onDataRecieve=()=>{
        axios.get(detailUrl)
        .then(res=>{
            console.log(res.data.sangpum);
            setData(res.data);
        })
    }

    //삭제시 호출할 함수
    const onDelete=()=>{
        // console.log("delete");
        axios.delete(deleteUrl)
        .then(res=>{
            //삭제후 목록으로 이동
            Navi("/shop/list");
        })     
        handleClose(); //다이얼로그 닫기
    }

    //처음 렌더링시 위의 함수 호출
    useEffect(()=>{
        onDataRecieve();
    },[]);

    return(
        <div className="detail">
            {/* 삭제 확인 다이얼로그 */}
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                <h4>상품 삭제 확인</h4>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <h5>"{data.sangpum}" 상품을 삭제하려면 [확인]을 누르세요</h5>

                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={onDelete} autoFocus>
                    확인
                </Button>
                </DialogActions>
            </Dialog>
           <h3 className="num">[{num}]</h3>
            <img src={photoUrl+data.photo}  alt=""/>
             
            <div className="d_title">
                <h1>{data.sangpum}</h1> 
                <br/>
                <h3>수 량 : {data.su}개</h3>
                <h3>단 가 : {data.dan}원</h3>
                <h3>일고일 : {data.ipgoday}</h3>
            </div>
            <div className="d_btn">
            <button type="button" className="btn" onClick={()=>{
                Navi("/shop/list");
            }}>목록</button>
            <button type="button" className="btn" onClick={()=>{
                // Navi("/shop/list");
            }}>수정</button>
            <button type="button" className="btn" onClick={handleClickOpen}>삭제</button>
            <button type="button" className="btn" onClick={()=>{
                Navi("/shop/form");
            }}>추가</button>
            </div>
        </div>
    )
}

export default ShopDetail;