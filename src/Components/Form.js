import React from 'react'
import Styled from 'styled-components'
export default function Form(props) {
    let btnStyle = {
        backgroundColor: "green",
        color: "white",
    };
    let btnClasses = ['btn', 'mt-2', 'm-1']
    let btnText, passcodeType;
    if (props.showPass === true) {
        btnStyle.backgroundColor = 'red';
        btnText = "Hide Password";
        passcodeType = "text";
        btnClasses.push('btn-danger')
    } else {
        btnText = "Show Password";
        passcodeType = "password";
        btnClasses.push('btn-success')
    }

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
                    <input type='text' value={props.nameValue} id='name' required className='form-control' onChange={props.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>email:</label>
                    <input type='email' value={props.emailValue} id='email' required className='form-control' onChange={props.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type={passcodeType} value={props.passwordValue} id='password' required className='form-control' autoComplete='true' onChange={props.password} />
                </div>
                <button className='btn btn-primary mt-2 m-1' type='button' onClick={props.submit}>Register</button>
                <button type='button' className={btnClasses.join(' ')} style={btnStyle} onClick={props.showPassToggle}>{btnText}</button>
                <br />
                <StyledButton type='button' bgcolor='green' flag='1'>New Button</StyledButton>
                <StyledButton type='button' bgcolor='blue' flag='1'>New Button</StyledButton>
            </form>
        </StyleRegContainer>
    )
}
