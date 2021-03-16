import { Wrapper, HourMark, FlexDiv, Background, TimeBlock } from "./styles";

const TURNAROUND_TIME = 1.39;

const TimeLine = ({ timeBlocks }) => {
  return (
    <Wrapper>
      <FlexDiv>
        <HourMark>00:00</HourMark>
        <HourMark>12:00</HourMark>
        <HourMark>23:59</HourMark>
      </FlexDiv>
      <Background>
        {timeBlocks.map((timeBlock) => {
          const TURNAROUND_TIME_START =
            Number(timeBlock.size) + Number(timeBlock.start);
          return (
            <>
              <TimeBlock
                size={timeBlock.size}
                start={timeBlock.start}
                isFlight
              />
              <TimeBlock size={TURNAROUND_TIME} start={TURNAROUND_TIME_START} />
            </>
          );
        })}
      </Background>
    </Wrapper>
  );
};

export default TimeLine;
