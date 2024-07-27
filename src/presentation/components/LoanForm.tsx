import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

interface Props {
  onSubmit: (data: LoanData) => void;
}

interface LoanData {
  clientName: string;
  loanAmount: number;
  interestRate: number;
  term: number;
  disbursementDate: string;
}

export const LoanForm: React.FC<Props> = ({ onSubmit }) => {
  const [clientName, setClientName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [disbursementDate, setDisbursementDate] = useState('');

  const handleSubmit = () => {
    onSubmit({
      clientName,
      loanAmount: parseFloat(loanAmount),
      interestRate: parseFloat(interestRate),
      term: parseInt(term, 10),
      disbursementDate,
    });
  };

  return (
    <View>
      <Text>Client Name</Text>
      <TextInput value={clientName} onChangeText={setClientName} />
      <Text>Loan Amount</Text>
      <TextInput value={loanAmount} onChangeText={setLoanAmount} keyboardType="numeric" />
      <Text>Interest Rate</Text>
      <TextInput value={interestRate} onChangeText={setInterestRate} keyboardType="numeric" />
      <Text>Term (months)</Text>
      <TextInput value={term} onChangeText={setTerm} keyboardType="numeric" />
      <Text>Disbursement Date</Text>
      <TextInput value={disbursementDate} onChangeText={setDisbursementDate} />
      <Button title="Calculate" onPress={handleSubmit} />
    </View>
  );
};
