<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { LoanForm } from '../../components/LoanForm';
import { styles } from '../../theme/styles';
import { useLoanCalculator } from '../../hooks/useLoanCalculator';
=======
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useLoanCalculator } from '../../hooks/useLoanCalculator';
import { LoanForm } from '../../components/LoanForm';
import { styles } from '../../theme/styles';
import { AmortizationPlan } from '../../components/AmortizationPlan';
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigation';

export const LoanFormScreen = () => {
  const [loanDetails, setLoanDetails] = useState<{
<<<<<<< HEAD
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: string;
    commisionPercentage: number;
  } | null>(null);

  const [isSubmit, setIsSubmit] = useState(false);
=======
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
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'LoanForm'>>();

  const { calculation, isCalculation } = useLoanCalculator(
    loanDetails?.amount || 0,
    loanDetails?.annualInterestRate || 0,
    loanDetails?.months || 0,
<<<<<<< HEAD
    loanDetails?.startDate || '',
    loanDetails?.commisionPercentage || 0,
    !!loanDetails
  );

=======
    loanDetails?.startDate || '', // Convertir a cadena por el error
    loanDetails?.commisionPercentage || 0,
    !!loanDetails,
  );

  //este useEffect es para que se vaya a la siguiente pantalla
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
  useEffect(() => {
    if (!isCalculation && calculation && isSubmit) {
      navigation.navigate('AmortizationPlan', {
        name: loanDetails!.name,
        amount: loanDetails!.amount,
        annualInterestRate: loanDetails!.annualInterestRate,
        months: loanDetails!.months,
        startDate: loanDetails!.startDate,
        commisionPercentage: loanDetails!.commisionPercentage,
        monthlyPayment: calculation.monthlyPayment,
        commision: calculation.commision,
        totalPayment: calculation.totalPayment,
<<<<<<< HEAD
        svsd: calculation.svsd,
        defaultInterest: calculation.defaultInterest,
      });

      setLoanDetails(null);
=======
      });

      // Resetear el formulario
      setLoanDetails(null);
      // Resetea el estado de envío
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
      setIsSubmit(false);
    }
  }, [isCalculation, calculation]);

<<<<<<< HEAD
  const handleSubmit = (details: {
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: string;
    commisionPercentage: number;
=======
  //funcion para enviar el formulario
  const handleSubmit = (details: {
    name: string,
    amount: number,
    annualInterestRate: number,
    months: number,
    startDate: string,
    commisionPercentage: number,
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
  }) => {
    setLoanDetails(details);
    setIsSubmit(true);
  };

  return (
    <View style={styles.container}>
      <LoanForm onSubmit={handleSubmit} />
    </View>
  );
};


