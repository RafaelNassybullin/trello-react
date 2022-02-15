import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import {IYourNameInputProps} from "../types";
import styled from "styled-components";

export const YourNameInput: FC<IYourNameInputProps> = () => {
  const [name, setName] = useState<string>('')

  const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const submitHandler = (e:SyntheticEvent) => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <form>
      <NameTitle>Как вас зовут?</NameTitle>
      <NameInput placeholder={'Ваше имя'} onChange={inputHandler}/>
      <button type={'submit'} onClick={submitHandler}>Продолжить</button>
    </form>
  )
}

const NameTitle = styled.h2`
  text-align: center;
  font-size: 48px;
  margin-bottom: 30px;
`
const NameInput = styled.input`
  max-width: 300px;
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0 10px;
  border-radius: 6px;
  border: 2px solid #CCCCCC;
  font-size: 20px;

  &:focus {
    border: 2px solid #89cea5;
  }
`