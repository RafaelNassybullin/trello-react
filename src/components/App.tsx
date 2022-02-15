import React, { FC } from 'react';
import GlobalStyles from "../styles/globalStyles";
import {MainDesc} from "./Main-Desc";

export const App: FC = () => {
  return (
    <>
      <GlobalStyles/>
      <MainDesc/>
    </>
  );
}

