import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { LoanForm } from '../../components/LoanForm';
import { styles } from '../../theme/styles';
import { useLoanCalculator } from '../../hooks/useLoanCalculator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigation';

export const LoanFormScreen = () => {
  const [loanDetails, setLoanDetails] = useState<{
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: string;
    commisionPercentage: number;
  } | null>(null);

  const [isSubmit, setIsSubmit] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'LoanForm'>>();

  const { calculation, isCalculation } = useLoanCalculator(
    loanDetails?.amount || 0,
    loanDetails?.annualInterestRate || 0,
    loanDetails?.months || 0,
    loanDetails?.startDate || '',
    loanDetails?.commisionPercentage || 0,
    !!loanDetails
  );

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
        svsd: calculation.svsd,
        defaultInterest: calculation.defaultInterest,
      });

      // Resetear el formulario y estado de envío
      setLoanDetails(null);
      setIsSubmit(false);
    }
  }, [isCalculation, calculation, isSubmit, loanDetails, navigation]);

  const handleSubmit = (details: {
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: string;
    commisionPercentage: number;
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


