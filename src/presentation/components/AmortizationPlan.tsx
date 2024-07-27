import {Pressable, Text, View} from 'react-native';
import { styles } from '../theme/styles';
import { ScrollView } from 'react-native-gesture-handler';


interface Props {
  name: string;
  amount: number;
  annualInterestRate: number;
  months: number;
  startDate: string;
  commisionPercentage: number;
  monthlyPayment: number;
  commision: number;
  totalPayment: number;
  onNavigateBack: () => void;
}

//se actualiza el tipo de la propiedad
export const AmortizationPlan = ({
  name,
  amount,
  annualInterestRate,
  months,
  startDate,
  commisionPercentage,
  monthlyPayment,
  commision,
  totalPayment,
  onNavigateBack,
}: Props) => {

  //tofixed es para que solo muestre dos decimales
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Plan de Amortización</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Nombre del Cliente:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Monto del préstamo:</Text>
        <Text style={styles.value}>${amount.toFixed(2)}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Tasa de interés anual:</Text>
        <Text style={styles.value}>{annualInterestRate.toFixed(2)}%</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Plazo en meses:</Text>
        <Text style={styles.value}>{months}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Fecha de inicio del préstamo:</Text>
        <Text style={styles.value}>{startDate}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Porcentaje de comisión:</Text>
        <Text style={styles.value}>{commisionPercentage.toFixed(2)}%</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Cuota mensual calculada:</Text>
        <Text style={styles.value}>${monthlyPayment.toFixed(2)}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Comisión total:</Text>
        <Text style={styles.value}>${commision.toFixed(2)}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Pago total (cuota + comisión):</Text>
        <Text style={styles.value}>${totalPayment.toFixed(2)}</Text>
      </View>
      <Pressable style={styles.button} onPress={onNavigateBack}>
        <Text style={styles.buttonText}>Volver</Text>
      </Pressable>
    </ScrollView>
    </View>
  );
};
