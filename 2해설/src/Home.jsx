import styled from "styled-components";
import MonthNavigation from "./components/MonthNavigation";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

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

const Home = ({ expenses, setExpenses }) => {
  const [month, setMonth] = useState(1);

  // 정돈된 state를 넘겨보자 : filter
  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  return (
    <Container>
      <Section>지출을 입력하는 섹션</Section>
      <MonthNavigation month={month} setMonth={setMonth} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
};

export default Home;
