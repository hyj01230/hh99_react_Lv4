import React from 'react'
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인페이지</h1>
      <div>
        <button onClick={() => { navigate("/"); }}>로그아웃</button>
      </div>
    </div>
  )
}

export default MainPage