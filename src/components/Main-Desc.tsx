import React, {FC, useContext} from "react";
import {ColumnLists} from "./Column-Lists";
import {ModalPopup} from "./Modal-Popup";
import {YourNameInput} from "./Your-Name-Input";
import {IMainDescProps} from "../types";


export const MainDesc: FC<IMainDescProps> = () => {
  return (
    <>
      <ColumnLists/>
      <ModalPopup>
        <YourNameInput/>
      </ModalPopup>
    </>
  );
}