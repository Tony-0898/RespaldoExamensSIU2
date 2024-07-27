import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../theme/styles';

interface Props {
  onSubmit: (details: {
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: Date;
    commisionPercentage: number;
  }) => void;
}

export const LoanForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [months, setMonths] = useState('');
  const [startDate, setStartDate] = useState('');
  const [commisionPercentage, setCommisionPercentage] = useState('');

  const handleSubmit = () => {

    const data = {
      name,
      amount: parseFloat(amount),
      annualInterestRate: parseFloat(annualInterestRate),
      months: parseInt(months),
      startDate: new Date(startDate),
      commisionPercentage: parseFloat(commisionPercentage),
    };

    // Enviar datos
    onSubmit(data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingrese su nombre"
        placeholderTextColor={'#676666'}
      />

      <Text style={styles.label}>Monto del préstamo:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Ingresar por ejemplo: 10000"
        placeholderTextColor={'#676666'}
      />

      <Text style={styles.label}>Tasa de interés anual %:</Text>
      <TextInput
        style={styles.input}
        value={annualInterestRate}
        onChangeText={setAnnualInterestRate}
        keyboardType="numeric"
        placeholder="Ingresar por ejemplo: 10"
        placeholderTextColor={'#676666'}
      />

      <Text style={styles.label}>Plazo en meses:</Text>
      <TextInput
        style={styles.input}
        value={months}
        onChangeText={setMonths}
        keyboardType="numeric"
        placeholder="Ingresar por ejemplo: 12"
        placeholderTextColor={'#676666'}
      />

      <Text style={styles.label}>Fecha de inicio del préstamo (YYYY-MM-DD):</Text>
      <TextInput
        style={styles.input}
        value={startDate}
        onChangeText={setStartDate}
        placeholder="Ingresar por ejemplo: 2024-07-26"
        placeholderTextColor={'#676666'}
      />

      <Text style={styles.label}>Porcentaje de comisión:</Text>
      <TextInput
        style={styles.input}
        value={commisionPercentage}
        onChangeText={setCommisionPercentage}
        keyboardType="numeric"
        placeholder="Ingresar por ejemplo: 1"
        placeholderTextColor={'#676666'}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>
    </ScrollView>
  );
};
