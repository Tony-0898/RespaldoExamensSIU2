import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigation';
import { styles } from '../../theme/styles';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'Home'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>

      {/* Botón para navegar a LoanForm */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoanForm')}
      >
        <Text style={styles.buttonText}>Ir al Formulario de Préstamo</Text>
      </TouchableOpacity>

      {/* Botón verde para navegar a CalculationsScreen */}
      <TouchableOpacity
        style={[styles.button, localStyles.greenButton]} // Combina estilos
        onPress={() => navigation.navigate('Explicacion')} // Actualizado
      >
        <Text style={[styles.buttonText, localStyles.greenButtonText]}>Fórmulas de Cálculo</Text>
      </TouchableOpacity>
    </View>
  );
};


const localStyles = StyleSheet.create({
  greenButton: {
    backgroundColor: '#55AD9B', // Color verde
    marginTop: 20, // Separación del primer botón
  },
  greenButtonText: {
    color: '#FFFFFF', // Texto blanco
  },
});


export default HomeScreen;

