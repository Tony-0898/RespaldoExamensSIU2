import { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import { useLoanCalculator } from '../../hooks/useLoanCalculator';
import { LoanForm } from '../../components/LoanForm';
import { styles } from '../../theme/styles';

export const LoanFormScreen = () => {
    const [loanDetails, setLoanDetails] = useState<{
        name: string,
        amount: number,
        annualInterestRate: number,
        months: number,
        startDate: Date,
        commisionPercentage: number,
    } | null>(null);

    //estado para saber si se esta enviando el formulario
    const [isSubmit, setIsSubmit] = useState(false);

    const {calculation} = useLoanCalculator(
        loanDetails?.amount || 0,
        loanDetails?.annualInterestRate || 0,
        loanDetails?.months || 0,
        loanDetails?.startDate || new Date(),
        loanDetails?.commisionPercentage || 0,
        isSubmit,
    );

    const handleSubmit = (details:{
        name: string,
        amount: number,
        annualInterestRate: number,
        months: number,
        startDate: Date,
        commisionPercentage: number,
    }) => {
        setLoanDetails(details);
        //se marca como true para que se ejecute el useEffect
        setIsSubmit(true);
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
