import styled from "styled-components";

export const Wrapper = styled.li`
  align-items: flex-start;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 16px;
  padding: 16px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const RouteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  width: 100%;
`;
