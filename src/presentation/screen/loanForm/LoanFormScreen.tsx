import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useLoanCalculator } from '../../hooks/useLoanCalculator';
import { LoanForm } from '../../components/LoanForm';
import { styles } from '../../theme/styles';
import { AmortizationPlan } from '../../components/AmortizationPlan';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigation';

export const LoanFormScreen = () => {
  const [loanDetails, setLoanDetails] = useState<{
    name: string,
    amount: number,
    annualInterestRate: number,
    months: number,
    startDate: string,
    commisionPercentage: number,
  } | null>(null);

  //estado para saber si se esta enviando el formulario
  const [isSubmit, setIsSubmit] = useState(false);

  //se agrega esto para poder ir a la siguiente pantalla
  //const navigation = useNavigation();
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'LoanForm'>>();

  const { calculation } = useLoanCalculator(
    loanDetails?.amount || 0,
    loanDetails?.annualInterestRate || 0,
    loanDetails?.months || 0,
    loanDetails?.startDate || '', // Convertir a cadena por el error
    loanDetails?.commisionPercentage || 0,
    isSubmit,
  );

  const handleSubmit = (details: {
    name: string,
    amount: number,
    annualInterestRate: number,
    months: number,
    startDate: string,
    commisionPercentage: number,
  }) => {
    setLoanDetails(details);
    //se marca como true para que se ejecute el useEffect
    setIsSubmit(true);

    //est if es para que se vaya a la siguiente pantalla
    if (calculation) {
      navigation.navigate('AmortizationPlan', {
        name: details.name,
        amount: details.amount,
        annualInterestRate: details.annualInterestRate,
        months: details.months,
        startDate: details.startDate,
        commisionPercentage: details.commisionPercentage,
        monthlyPayment: calculation.monthlyPayment,
        commision: calculation.commision,
        totalPayment: calculation.totalPayment,
      });

      // Resetear el formulario
      setLoanDetails(null);
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    if (isSubmit) {
      // Resetear isSubmitted para evitar cálculos continuos
      setIsSubmit(false);
    }
  }, [calculation]);

  return (
    <View style={styles.container}>
      <LoanForm onSubmit={handleSubmit} />
    </View>
  );
};
