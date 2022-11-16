import { View } from "react-native";
import Input from "./input";

function ExpenseForm() {
    function amountChangedHandler() {}
  return (
    <View>
      <Input label="Amount" textInputConfig={{
       keyboardType: 'decimal-pad',
       onChangeText:  amountChangedHandler,
      }}/>
      <Input label="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD'
      }}/>
      <Input label="Description"/>
    </View>
  );
}
export default ExpenseForm;
