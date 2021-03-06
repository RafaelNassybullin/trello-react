import React, {FC, useContext, useEffect} from 'react';
import GlobalStyles from "../styles/globalStyles";
import {MainBoard} from "./main-board";
import {DataContext} from "../context/DataContext";


export const App: FC = () => {
  return (
    <>
      <GlobalStyles/>
      <MainBoard/>
    </>
  );
}

