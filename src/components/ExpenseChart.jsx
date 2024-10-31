  import {VictoryPie, VictoryLabel} from 'victory'
  import { useGlobalState } from "../context/GlobalState";


  export function ExpenseChart() {
      const {transactions} = useGlobalState();

      const totalIncome = transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0);
      
      const totalExpenses = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
    
    const totalExpensesPercentage = Math.round((totalExpenses / totalIncome ) * 100);
    const totalIncomePercentage = 100 - totalExpensesPercentage;
    
    return (
      <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage},
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 200
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
      <VictoryLabel
        angle={45}
        style={{
          fill: "white",
        }}
      />}
    />
  );
}

export default ExpenseChart;