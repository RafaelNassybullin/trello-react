import React, {FC} from 'react';
import styled from "styled-components";

export interface props {
}

export const ModalPopup: FC<props> = ({children}) => {
  return (
    <Overlay>
      <Popup>
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
  display: grid;
  place-items: center;
`
const Popup = styled.div`
  position: relative;
  padding: 20px 30px;
  display: grid;
  place-items: center;
  border-radius: 30px;
  background: white;
`