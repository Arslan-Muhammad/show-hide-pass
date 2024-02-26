import React from 'react'
import Styled from 'styled-components'
import { useState } from 'react';
export default function Form(props) {
    const [showPass, setShowPass] = useState(false);
    let btnStyle = {
        backgroundColor: "green",
        color: "white",
    };
    let btnClasses = ['btn', 'mt-2', 'm-1']
    let btnText, passcodeType;
    const showPassHandler = () => {
        if (showPass === false) {
            btnText = "Show Password";
            passcodeType = "password";
            btnClasses.push('btn-success')
        } else {
            btnStyle.backgroundColor = 'red';
            btnText = "Hide Password";
            passcodeType = "text";
            btnClasses.push('btn-danger')
            setShowPass(false);
        }
    };
    const StyledButton = Styled.button`
    display: ${(props) => (props.flag ? 'inline-block' : 'block')};
    padding: 5px 10px;
    background-color: ${(props) => (props.bgcolor)};
    color: white;
    margin: 5px;;
    border: none;
    width:${(props) => (props.flag === '1' ? '40%' : '100%')};
    cursor: pointer;
    border-radius: 5px;`;
    const StyleRegContainer = Styled.div`
    width: 500px;
    &:hover{
        box-shadow: 0px 0px 5px grey;
    };
    @media (min-width: 0px) and (max-width:700px){
        width: 300px;
    }
    `;
    return (
        <StyleRegContainer className='container card p-3 mt-2'>
            <h3 className='text-center'>Registration Form</h3>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>email:</label>
                    <input type='email' id='email' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type={passcodeType} id='password' required className='form-control' />
                </div>
                <button className='btn btn-primary mt-2 m-1' type='button' onClick={props.submit}>Register</button>
                <button type='button' className={btnClasses.join(' ')} style={btnStyle} onClick={showPassHandler}>{btnText}</button>
                <br />
                <StyledButton type='button' bgcolor='green' flag='1'>New Button</StyledButton>
                <StyledButton type='button' bgcolor='blue' flag='1'>New Button</StyledButton>
            </form>
        </StyleRegContainer>
    )
}
