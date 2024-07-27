import { useEffect, useState } from 'react';

// Hook para calcular los pagos y otros valores
export const useLoanCalculator = (
  amount: number,
  annualInterestRate: number,
  months: number,
  startDate: string,
  commisionPercentage: number,
  isSubmit: boolean,
) => {
  const [calculation, setCalculation] = useState<{
    monthlyPayment: number;
    commision: number;
    totalPayment: number;
    svsd: number;
    defaultInterest: number;
  } | null>(null);

  const [isCalculation, setIsCalculation] = useState(false);

  useEffect(() => {
    if (!isSubmit) return;

    setIsCalculation(true);

    // Calcular la tasa de interés mensual
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    // Calcular la cuota nivelada
    const numer = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
    const denom = Math.pow(1 + monthlyInterestRate, months) - 1;
    const monthlyPayment = amount * (numer / denom);

    // Calcular la comisión
    const commision = amount * (commisionPercentage / 100);

    // Calcular el total a pagar
    const totalPayment = monthlyPayment * months + commision;

    // Calcular el SVSD
    const svsd = amount * 0.0015; // 0.15% del saldo principal

    // Calcular el interés moratorio
    // Supongamos que el principal vencido es el monto del préstamo
    // y que los días en mora son 31 días como en el ejemplo dado
    const overduePrincipal = amount; // Por simplificación
    const daysOverdue = 31;
    const defaultInterest = (overduePrincipal * (annualInterestRate * 0.5 / 360)) * daysOverdue;

    setCalculation({
      monthlyPayment,
      commision,
      totalPayment,
      svsd,
      defaultInterest,
    });

    setIsCalculation(false);
  }, [amount, annualInterestRate, months, startDate, commisionPercentage, isSubmit]);

  return {
    calculation,
    isCalculation,
  };
};

