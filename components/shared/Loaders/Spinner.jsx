import React from "react";
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

const Spinner = ({height, width}) => {


  return (
    <>
      <Loader width={width} height={height}/>
    </>
  );
};

export default Spinner;
