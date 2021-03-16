import styled from "styled-components";

export const Wrapper = styled.li`
  background-color: ${({ selected }) => (selected ? "#bbb" : "transparent")};
  border-bottom: 1px solid #eee;
  cursor: pointer;
  padding: 8px 16px;

  :hover {
    background-color: #ccc;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
  padding: 8px 0 0;
`;
