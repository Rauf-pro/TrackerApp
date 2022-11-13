import { FlatList, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSymmary";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary/>
      <ExpensesList/>
    </View>
  );
}

export default ExpensesOutput;
