import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>로그인</h1>
      아이디<input />
      비밀번호<input />
      <div>
        <button onClick={() => { navigate("/main"); }}>로그인</button>
        <button onClick={() => { navigate("/join"); }}>회원가입ㄱㄱ</button>
      </div>
    </div>
  )
}

export default LoginPage