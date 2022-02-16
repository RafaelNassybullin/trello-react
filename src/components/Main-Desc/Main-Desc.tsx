import React, {FC, useState} from "react";
import {ColumnLists} from "../Column-Lists/Column-Lists";
import {ModalPopup} from "../Modal-Popup/Modal-Popup";
import {YourNameInput} from "../Your-Name-Input/Your-Name-Input";
import {IMainDescProps} from "../../types";

export const MainBoard: FC<IMainDescProps> = () => {
  const [showModal, setShowModal] = useState<string>('')
  const modalCallback = (name:string) => setShowModal(name)

  return (
    <>
      <ColumnLists/>
      {
        !showModal && !localStorage.getItem('name') && <ModalPopup>
          <YourNameInput modalCallback={modalCallback}/>
        </ModalPopup>
      }
    </>
  );
}