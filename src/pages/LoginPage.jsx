import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>로그인</h1>
      <p>아이디</p>
      <input type='text' />
      <p>비밀번호</p>
      <input type='password' />
      <div>
        <button onClick={() => { navigate("/main"); }}>로그인</button>
        <button onClick={() => { navigate("/join"); }}>회원가입</button>
      </div>
    </div>
  )
}

export default LoginPage