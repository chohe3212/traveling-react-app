import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginPage.css';
 
function LoginPage() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
      <div className='login-page'>
        <div className='signin'>
            <h2>Sign In</h2>
            <div className='text-filed'>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div className='text-filed2'>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
              <button className='submit-btn' type='button' onClick={onClickLogin}>Login</button>
            <div classname = "link_password">
              <a href='/'>비밀번호를 잊어버리셨나요?</a>
            </div>
        </div>
      </div>
    )
}
 
export default LoginPage;