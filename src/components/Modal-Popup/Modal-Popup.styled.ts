import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`
export const Popup = styled.div`
  position: relative;
  padding: 20px 30px;
  display: grid;
  place-items: center;
  border-radius: 30px;
  background: white;
`