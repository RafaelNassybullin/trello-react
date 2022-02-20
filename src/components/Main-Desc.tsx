import React, {FC, useState} from "react";
import {ColumnLists} from "./Column-Lists";
import {ModalPopup} from "./Modal-Popup";
import {YourNameInput} from "./Your-Name-Input";

interface props {}

export const MainBoard: FC<props> = () => {
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