import styled from "styled-components";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

const Home = () => {
  return (
    <Container>
      <h1>여기가 진짜 HOME</h1>
      <Section>지출 입력 섹션</Section>
      <Section>캘린더 버튼 섹션</Section>
      <Section>지출 내역 섹션</Section>
    </Container>
  );
};

export default Home;
