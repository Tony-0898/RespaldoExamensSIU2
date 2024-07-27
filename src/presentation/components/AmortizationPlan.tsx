import {Text, View} from 'react-native';
import { styles } from '../theme/styles';

interface Props {
  calculation: {
    monthlyPayment: number,
    commision: number,
    totalPayment: number,
  } | null;
}

export const AmortizationPlan = ({calculation}: Props) => {
  //esto es por si no se ha hecho el calculo
  if (!calculation) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan de Amortizacion</Text>
      <Text style={styles.label}>Cuota mensual calculada: ${calculation.monthlyPayment.toFixed(2)}</Text>
      <Text style={styles.label}>Comisión total: ${calculation.commision.toFixed(2)}</Text>
      <Text style={styles.label}>Pago total (cuota + comisión): ${calculation.totalPayment.toFixed(2)}</Text>
    </View>
  );
};
