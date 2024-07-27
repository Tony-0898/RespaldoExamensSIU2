import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from 'react-native';
import { LoanFormScreen } from '../screen/loanForm/LoanFormScreen';
import { AmortizationPlanScreen } from '../screen/amortizationPlan/AmortizationPlanScreen';

export type RootStackParams= {
  LoanForm: undefined;
  AmortizationPlan: undefined;
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
        <Stack.Screen name="LoanForm" component={LoanFormScreen} />
        <Stack.Screen name="AmortizationPlan" component={AmortizationPlanScreen} />
      </Stack.Navigator>
    );
  }
