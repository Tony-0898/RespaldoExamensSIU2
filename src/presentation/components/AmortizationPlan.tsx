import { Pressable, Text, View, ScrollView } from 'react-native';
import { styles } from '../theme/styles';

interface Props {
  name: string;
  amount: number;
  annualInterestRate: number;
  months: number;
  startDate: string;
  commissionPercentage: number;
  monthlyPayment: number;
  commission: number;
  totalPayment: number;
  svsd: number;
  defaultInterest: number;
  onNavigateBack: () => void;
}

export const AmortizationPlan = ({
  name = 'Name not provided',
  amount = 0,
  annualInterestRate = 0,
  months = 0,
  startDate = 'Start date not provided',
  commissionPercentage = 0,
  monthlyPayment = 0,
  commission = 0,
  totalPayment = 0,
  svsd = 0,
  defaultInterest = 0,
  onNavigateBack,
}: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Amortization Plan</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Client Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Loan Amount:</Text>
          <Text style={styles.value}>${amount.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Annual Interest Rate:</Text>
          <Text style={styles.value}>{annualInterestRate.toFixed(2)}%</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Term in Months:</Text>
          <Text style={styles.value}>{months}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Loan Start Date:</Text>
          <Text style={styles.value}>{startDate}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Commission Percentage:</Text>
          <Text style={styles.value}>{commissionPercentage.toFixed(2)}%</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Calculated Monthly Payment:</Text>
          <Text style={styles.value}>${monthlyPayment.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Total Commission:</Text>
          <Text style={styles.value}>${commission.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Total Payment (payment + commission):</Text>
          <Text style={styles.value}>${totalPayment.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Life Insurance Balance Debtor (SVSD):</Text>
          <Text style={styles.value}>${svsd.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Default Interest:</Text>
          <Text style={styles.value}>${defaultInterest.toFixed(2)}</Text>
        </View>
        <Pressable style={styles.button} onPress={onNavigateBack}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};



