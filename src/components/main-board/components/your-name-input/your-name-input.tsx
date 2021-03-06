import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import styled from "styled-components";

interface props {
  modalCallback: (name: string) => void
}

export const YourNameInput: FC<props> = ({modalCallback}) => {
  const [name, setName] = useState<string>('')

  const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const submitHandler = (e:SyntheticEvent) => {
    e.preventDefault()
    localStorage.setItem('name', name)
    modalCallback(localStorage.getItem('name') || '')
  }

  return (
    <form>
      <NameTitle>Как вас зовут?</NameTitle>
      <NameInputWrapper>
         <NameInput placeholder={'Ваше имя'} onChange={inputHandler}/>
          <NameBtn type={'submit'} onClick={submitHandler}>Продолжить</NameBtn>
      </NameInputWrapper>
    </form>
  )
}
const NameTitle = styled.h2`
  text-align: center;
  font-size: 48px;
  margin-bottom: 20px;
`
const NameInput = styled.input`
  max-width: 300px;
  width: 100%;
  height: 42px;
  outline: none;
  padding: 0 10px;
  border-radius: 6px;
  border: 2px solid #CCCCCC;
  font-size: 20px;

  &:focus {
    border: 2px solid #89cea5;
  }
`
const NameBtn = styled.button`
  width: 100px;
  height: 42px;
  background: tomato;
  outline: none;
  border: none;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0 8px;
`
const NameInputWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`