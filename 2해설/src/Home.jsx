import styled from "styled-components";
import MonthNavigation from "./components/MonthNavigation";
import { useState } from "react";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

const Home = () => {
  const [month, setMonth] = useState(1);
  console.log(month);
  return (
    <Container>
      <Section>지출을 입력하는 섹션</Section>
      <MonthNavigation month={month} setMonth={setMonth} />
      <Section>지출을 리스팅하는 섹션</Section>
    </Container>
  );
};

export default Home;
