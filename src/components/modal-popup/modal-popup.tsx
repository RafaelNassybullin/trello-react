import React, {FC, useContext, useEffect, useRef} from 'react';
import styled from "styled-components";
import {ICards} from "interfaces";
import {DataContext} from "context/DataContext";

export interface props {
  cardsData?: ICards
}

export const ModalPopup: FC<props> = ({children, cardsData}) => {

  const myRef = useRef<HTMLDivElement>(null);

  const { closeModal } = useContext(DataContext);

  const close = (event: MouseEvent) => {
    if (myRef.current && !myRef.current.contains(event.target as HTMLDivElement)) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('click', close, true);
    return () => {
      document.removeEventListener('click', close, true);
    };
  }, []);


  return (
    <Overlay>
      <Popup ref={myRef}>
        {children}
      </Popup>
    </Overlay>
  )
}
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  display: grid;
  place-items: center;
  z-index: 25;
`
const Popup = styled.div`
  position: relative;
  padding: 20px 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: white;
`