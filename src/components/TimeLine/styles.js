import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HourMark = styled.div`
  font-size: 20px;
`;

export const Background = styled.div`
  background: #ccc;
  height: 50px;
  position: relative;
  width: 100%;
`;

export const TimeBlock = styled.div`
  background-color: ${({ isFlight }) => (isFlight ? "green" : "purple")};
  left: ${({ start }) => start}%;
  height: 50px;
  position: absolute;
  width: ${({ size }) => size}%;
  z-index: 100;
`;
