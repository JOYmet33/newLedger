import { Section } from "../Home";

// const NoExpenseMessage = styled.div`
//   text-align: center;
//   font-size: 16px;
//   color: #888;
//   padding: 20px;
//   background-color: #f9f9f9;
//   border-radius: 8px;
// `;

// const ExpenseItemList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const ExpenseItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 20px;
//   border-radius: 8px;
//   background-color: #f9f9f9;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.02);
//   }

//   span {
//     font-size: 16px;
//     color: #333;
//   }

//   span:last-child {
//     font-weight: bold;
//     color: #007bff;
//     flex-shrink: 0;
//   }
// `;

// const ExpenseDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   flex-grow: 1;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   span {
//     &:first-child {
//       margin-bottom: 5px;
//       color: #666;
//       font-size: 14px;
//     }

//     &:last-child {
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       max-width: 100%;
//     }
//   }
// `;

const ExpenseList = ({ expenses, setExpenses }) => {
  return (
    <Section>
      <div>
        {expenses.map((element) => {
          return <div key={element}>{expenses}</div>;
        })}
      </div>
    </Section>
  );
};

export default ExpenseList;
