
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 80,
    },
    square: {
      width: 200,
      height: 200,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#000',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    flavorsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20,
      justifyContent: 'center',
    },
    flavorRectangle: {
      width: 100,
      height: 40,
      backgroundColor: '#ccc',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flavorText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#aaa',
    },

    ContainerEndereco: {
      flexDirection: 'row',
      
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    foto: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: '#fff',
    },
    ContainerTexto: {
      marginLeft: 10,
    },
    nome: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
    },
    endereco: {
      fontSize: 16,
      color: '#555',
    },
    containerDetalhe:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#f5f5f5',
    },
    nomeDetalhe:{
      fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
    textTransform: 'uppercase',
    },
    logoDetalhe:{
      width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
    },
    detalheDetalhe:{
      fontSize: 16,
      textAlign: 'center',
      color: '#555',
      marginBottom: 20,
      fontStyle: 'italic'
    },
    callButtton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      fontSize: 16,
      color: 'blue',
    },
    phoneIcon: {
      marginRight: 5,
      fontSize: 18,
    },
    phoneNumber: {
      fontWeight: 'bold',
    },


  });
  
  export default styles;


  // import Banner from './Banner';