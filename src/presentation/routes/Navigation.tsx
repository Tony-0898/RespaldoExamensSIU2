import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { LoanFormScreen } from '../screen/loanForm/LoanFormScreen';
import { AmortizationPlanScreen } from '../screen/amortizationPlan/AmortizationPlanScreen';
import { HomeScreen } from '../screen/home/HomeScreen';
import ExplicacionScreen from '../screen/calculation/ExplicacionScreen';

export type RootStackParams = {
  Home: undefined;
  LoanForm: undefined;
  //actualizar el tipo de la propiedad
  AmortizationPlan: {
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: string;
    commisionPercentage: number;
    monthlyPayment: number;
    commision: number;
    totalPayment: number;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      //se oculta el header en el stack
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoanForm" component={LoanFormScreen} />
        <Stack.Screen name="AmortizationPlan" component={AmortizationPlanScreen} />
        <Stack.Screen name="Explicacion" component={ExplicacionScreen} />

    </Stack.Navigator>
  );
}

