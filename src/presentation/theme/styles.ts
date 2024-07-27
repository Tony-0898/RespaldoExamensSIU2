import { Button, StyleSheet } from "react-native";

//AQUI van los estilos de la aplicacion
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
        color: '#333',
    },
    label2: {
        fontSize: 16,
        marginVertical: 8,
        color: '#676666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
      },
});