/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.mainBg};
    background-color: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

export default function input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>

  );
}
