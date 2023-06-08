//회원가입 페이지

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUpPage.css';
 
function LoginPage() {
    const [inputName, setInputName] = useState('')
    const [inputPhoneNumber, setInputphoneNumber] = useState('')
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputPwCheck, setInputPwCheck] = useState('')

	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputPhoneNumber = (e) => {
        setInputphoneNumber(e.target.value)
    }

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputPwCheck = (e) => {
        setInputPwCheck(e.target.value)
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
      <div className='signup-page'>
        <a href="/" className="logo">
          Traveling
        </a>

        {/* 회원가입 탭 메뉴 만들기 */}

        <div className='signin'>
            <h2>Sign Up</h2>
            <div class="jb-division-line"></div>

            <div className='text-filed'>
                <label htmlFor='input_pw_check'>이름 : </label>
                <input type='text' name='input_name' value={inputName} onChange={handleInputName} />
            </div>
            <div className='text-filed'>
                <label htmlFor='input_phone_number'>전화번호 : </label>
                <input type='number' name='input_phoneNumber' value={inputPhoneNumber} onChange={handleInputPhoneNumber} />
            </div>
            <div className='text-filed'>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                <div className='errorMessage_ID'>
                    중복된 아이디 입니다.
                </div>
            </div>
            <div className='text-filed'>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>

            <div className='text-filed'>
                <label htmlFor='input_pw_check'>PW Check : </label>
                <input type='password' name='input_pw_check' value={inputPwCheck} onChange={handleInputPwCheck} />
                <div className='errorMessage_PW'>
                    비밀번호가 일치하지 않습니다.
                </div>
            </div>



              <button className='submit-btn' type='button' onClick={onClickLogin}>다음</button>
            <div classname = "link_password">
              {/* <a href='/'>비밀번호를 잊어버리셨나요?</a> */}
            </div>
        </div>
      </div>
    )
}
 
export default LoginPage;