import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
<<<<<<< HEAD
import { RootStackParams } from '../../routes/Navigation'; // Ajusta la ruta según sea necesario
import { styles } from '../../theme/styles'; // Ajusta la ruta según sea necesario
=======
import { RootStackParams } from '../../routes/Navigation';
import { styles } from '../../theme/styles';
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'Home'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
<<<<<<< HEAD
      
      {/* Botón para navegar a LoanForm */}
=======
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoanForm')}
      >
        <Text style={styles.buttonText}>Ir al Formulario de Préstamo</Text>
      </TouchableOpacity>
<<<<<<< HEAD

      {/* Botón verde para navegar a ExplicacionScreen */}
      <TouchableOpacity
        style={[styles.button, localStyles.greenButton]} // Combina estilos
        onPress={() => navigation.navigate('Explicacion')}
      >
        <Text style={[styles.buttonText, localStyles.greenButtonText]}>Formulas de calculos</Text>
      </TouchableOpacity>
    </View>
  );
};

// Agrega estos estilos a tu archivo de estilos
const localStyles = StyleSheet.create({
  greenButton: {
    backgroundColor: '#55AD9B', // Color verde
    marginTop: 20, // Separación del primer botón
  },
  greenButtonText: {
    color: '#FFFFFF', // Texto blanco
  },
});

const combinedStyles = StyleSheet.flatten([styles, localStyles]);

// Exporta el componente con estilos combinados
export default () => <HomeScreen />;




=======
    </View>
  );
};
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
