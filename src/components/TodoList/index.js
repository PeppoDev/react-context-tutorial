import React from "react";
import styled from "styled-components";
// import { Container } from './styles';

export default function TodoList({ theme }) {
  const List = styled.ul`
    background: ${theme.background};
    color: ${theme.color};
    font-family: sans-serif;
    font-size: 18px;

    li {
      line-height: 36px;
    }
  `;
  return (
    <>
      <List>
        <li>Fazer café</li>
        <li>Entrar na Rocket</li>
        <li>Estudar ReactJS</li>
      </List>
    </>
  );
}
