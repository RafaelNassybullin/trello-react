import React, {FC, useState} from "react";
import {ColumnLists} from "../column-lists";
import {ModalPopup} from "../modal-popup";
import {YourNameInput} from "../your-name-input";

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