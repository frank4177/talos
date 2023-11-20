import React from "react";
import styled from "styled-components";

const Buttonn = styled.button`
  width: 100%;
  max-width: ${(props) => props.maxwidth}px;
  height: ${(props) => props.height}px;
  border-radius: 7px;
  gap: 2px;
  color: white;
  display: flex;
  align-items: center;
  justify-content:center;
  /* background-color: rgb(124 58 237); */
  background-color: ${(props) => (props.disabled ? '#ddd' : 'rgb(124, 58, 237)')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const Button = ({title, loader, loading, height, width, disabled}) => {
  return (
    <>
      <Buttonn disabled={disabled} maxwidth={width} height={height}>
        <span>{title}</span> {loading ? loader : null}
      </Buttonn>
    </>
  );
};

export default Button;
