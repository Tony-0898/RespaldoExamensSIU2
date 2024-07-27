import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home/HomeScreen';
import { LoanFormScreen } from '../screen/loanForm/LoanFormScreen';
import { AmortizationPlanScreen } from '../screen/amortizationPlan/AmortizationPlanScreen';
import ExplicacionScreen from '../screen/calculation/ExplicacionScreen';
import { RootStackParams } from '../../types'; // Ajusta la ruta según sea necesario

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
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
};


