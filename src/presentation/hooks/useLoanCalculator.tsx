import { useEffect, useState } from 'react';
import {Text, View} from 'react-native';

export const useLoanCalculator = (
  amount: number, 
  annualInterestRate: number,
  months: number,
  startDate: Date,
  commisionPercentage: number,
  //dependencia para que se ejecute el useEffect
  isSubmit: boolean,
) => {

  //esto es para que se muestre el calculo
  const [calculation, setCalculation] = useState<{
    monthlyPayment: number,
    commision: number,
    totalPayment: number,
  } | null>(null);

  useEffect(() => {
    //si no se ha enviado el formulario no se hace nada
    if (!isSubmit) return;

    //calcular la tasa de interes mensual
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    //calcular la cuota nivelada
    const numer = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
    const denom = Math.pow(1 + monthlyInterestRate, months) - 1;
    const monthlyPayment = amount * (numer / denom);

    //calcular la comision
    const commision = amount * (commisionPercentage / 100);

    //calcular el total a pagar
    const totalPayment = monthlyPayment * months + commision;

    // Mostrar los resultados en la consola
    console.log('Monto del préstamo:', amount);
    console.log('Tasa de interés anual:', annualInterestRate);
    console.log('Plazo en meses:', months);
    console.log('Fecha de inicio del préstamo:', startDate);
    console.log('Porcentaje de comisión:', commisionPercentage);
    console.log('Cuota mensual calculada:', monthlyPayment);
    console.log('Comisión total:', commision);
    console.log('Pago total (cuota + comisión):', totalPayment);

    //actualizar el estado
    setCalculation({
      monthlyPayment,
      commision,
      totalPayment,
    });

  }, [amount, annualInterestRate, months, startDate, commisionPercentage, isSubmit]);

  
  return {
    //properties
    calculation,
    //methods
    
  };
};
