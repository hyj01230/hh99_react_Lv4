import React from 'react'
import { useNavigate } from 'react-router-dom'

function JoinPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>회원가입</h1>
      아이디<input />
      비밀번호<input />
      <div>
        <button onClick={() => { navigate("/"); }}>회원가입 완료</button>
        <button onClick={() => { navigate("/"); }}>로그인하기</button>
      </div>
    </div>
  )
}

export default JoinPage