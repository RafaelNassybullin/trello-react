import React, { FC } from 'react';
import { IModalPopupProps } from "../../types";
import { Overlay, Popup } from './Modal-Popup.styled';

export const ModalPopup: FC<IModalPopupProps> = ({children}) => {
  return (
    <Overlay>
      <Popup>
        {children}
      </Popup>
    </Overlay>
  )
}


