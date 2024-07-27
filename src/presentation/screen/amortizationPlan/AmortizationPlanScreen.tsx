import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import { RootStackParams } from '../../routes/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../../theme/styles';

//se actualiza el tipo de la propiedad
type AmortizacionPlanScreenProps = RouteProp<RootStackParams, 'AmortizationPlan'>;

export const AmortizationPlanScreen = () => {
  //se obtienen los parametros de la pantalla anterior
  const route = useRoute<AmortizacionPlanScreenProps>();
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'AmortizationPlan'>>();

  //se obtienen los parametros de la pantalla anterior
  const {
    name,
    amount,
    annualInterestRate,
    months,
    startDate,
    commisionPercentage,
    monthlyPayment,
    commision,
    totalPayment,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan de Amortización para el cliente: {name}</Text>
      <Text style={styles.label}>Monto del préstamo: {amount.toFixed(2)}</Text>
      <Text style={styles.label}>Tasa de interés anual: {annualInterestRate.toFixed(2)}%</Text>
      <Text style={styles.label}>Plazo en meses: {months}</Text>
      <Text style={styles.label}>Fecha de inicio del préstamo: {startDate}</Text>
      <Text style={styles.label}>Porcentaje de comisión: { commisionPercentage.toFixed(2)}%</Text>
      <Text style={styles.label}>Cuota mensual calculada: {monthlyPayment?.toFixed(2)}</Text>
      <Text style={styles.label}>Comisión total: {commision?.toFixed(2)}</Text>
      <Text style={styles.label}>Pago total (cuota + comisión): {totalPayment?.toFixed(2)}</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('LoanForm')}>
        <Text style={styles.buttonText}>Volver</Text>
      </Pressable>
    </View>
  );
};
