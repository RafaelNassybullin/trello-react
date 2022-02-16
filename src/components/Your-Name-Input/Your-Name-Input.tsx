import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { IYourNameInputProps } from "../../types";
import { NameInput, NameTitle } from './Your-Name-Input.styled';

export const YourNameInput: FC<IYourNameInputProps> = ({modalCallback}) => {
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
      <NameInput placeholder={'Ваше имя'} onChange={inputHandler}/>
      <button type={'submit'} onClick={submitHandler}>Продолжить</button>
    </form>
  )
}

