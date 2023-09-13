// import axios from "axios"; > 가공되지 않은 엑시오스 API 안에 가공된거 가져오기
import api from '../axios/api';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinPage() {
  // 페이지 연결
  const navigate = useNavigate();

  // 아이디 input
  // json 방식으로 저장할거라 초기값 객체로!
  const [inputId, setInputId] = useState('');
  const onChangeInputId = (e) => {
    setInputId(e.target.value);
  };

  // 비밀번호 input
  const [inputPassword, setInputPassword] = useState('');
  const onChangeInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  // 회원가입 클릭 > onSubmitJoinInfoHandler로 대체!!!
  // const onClickJoinButton = () => {
  //   if (inputId === "" || inputPassword === "") {
  //     alert("아이디와 비밀번호 모두 입력하세요");
  //   } else {
  //     // navigate("/");
  //     // alert("회원가입이 완료!\n로그인 페이지로 이동합니다.");
  //   }
  // };

  // GET 조회 - 아디/비번 조회
  const fetchUsers = async () => {
    // const response = await axios.get('http://localhost:4000/users')
    // console.log(response)
    // 모든 데이터를 가지오고, 콘솔로 어떻게 가지고 오는지 확인하기
    /* axios 하고 나서 console.log에 Promise {<pending>} 으로 나오는데,
    await 문법 사용해서 응답을 받을 때까지 기다렸다가 콘솔로 넘어가게 설정 */
    // 구조분해 할당으로 data 부분만 받아옴!
    //   const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`)
    //   console.log('data', data)}
    // axios > api로 수정하고, api안에 url정보 있어서 ${process.env.REACT_APP_SERVER_URL} 삭제 가능
    const { data } = await api.get(`/users`)
    console.log('data', data)
  }

  // useEffect : 화면이 마운트될 때 수행
  // 처음 마운트되면 db로 부터 값을 가져와라!
  useEffect(() => {
    fetchUsers();
  }, [])


  // POST 추가 - 회원가입(아디/비번 추가)
  const onSubmitJoinInfoHandler = async () => {
    const joinInfo = {
      userId: inputId,
      userPassword: inputPassword
    };

    // 아디/비번 입력 안되면 alert, 입력되면 서버에 전달!
    if (inputId === "" || inputPassword === "") {
      alert("아이디와 비밀번호 모두 입력하세요");
    } else {
      api.post(`/users`, joinInfo)
      navigate("/");
      alert("회원가입이 완료!\n로그인 페이지로 이동합니다.");
    }

  }



  return (
    <>
      {/* 인풋 영역 = form태그 */}
      <form onSubmit={(e) => {
        // 버튼 누를때 리프레시 막아줌
        e.preventDefault();
        onSubmitJoinInfoHandler();
      }}>
        <h1>회원가입</h1>
        <p>아이디</p>
        <input
          type="text"
          value={inputId.userId}
          onChange={onChangeInputId}
        />
        <p>비밀번호</p>
        <input
          type="password"
          value={inputPassword.userPassword}
          onChange={onChangeInputPassword}
        />
        <div>
          {/* form 안 button은 type="submit"이 들어가 있어서 버튼 누르면 항상 새로고침됨
          form 태그에 onSubmit={(e) => {e.preventDefault();}} 줘서 새로고침 막기!! */}
          <button /*onClick={onClickJoinButton}*/>가입하기</button>
        </div>
      </form>
    </>
  );
}

export default JoinPage;
