import React, {FC, useState} from "react";
import {ColumnLists} from "./components";
import {ModalPopup} from "../modal-popup";
import {YourNameInput} from "./components";

interface props {}

export const MainBoard: FC<props> = () => {

  const [showModal, setShowModal] = useState<string>('')
  const modalCallback = (name:string) => setShowModal(name)

  return (
    <>
      <ColumnLists/>
      {!showModal && !localStorage.getItem('name') && <ModalPopup>
          <YourNameInput modalCallback={modalCallback}/>
        </ModalPopup>}
    </>
  );
}