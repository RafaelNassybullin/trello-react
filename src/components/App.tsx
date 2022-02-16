import React, { FC } from 'react';
import GlobalStyles from "../styles/globalStyles";
import {MainBoard} from "./Main-Desc/Main-Desc";

export const App: FC = () => {
  return (
    <>
      <GlobalStyles/>
      <MainBoard/>
    </>
  );
}

