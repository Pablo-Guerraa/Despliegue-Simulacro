import styled from "styled-components"

const primary = "#f78d97";

export const StyledTable = styled.table`
  width: 90%;
  margin: 0 auto;
  
  `;
export const StyledTr = styled.tr`
  border-collapse: collapse;
  border: green 5px solid;
  background-color: ${primary};
`


export const StyledImg = styled.img`
  max-height: 100px;
`
export const StyledTdImg = styled.td`
  background: black;
  display: flex;
  justify-content: center;

`;

export const StyledTd = styled.td`
  text-align: center;
`

export const StyledButtonDelete = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  background-color: pink;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: red;
  }

`
// export const Styled = styled.div``