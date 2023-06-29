import { Text, View, TextInput, Button, StyleSheet, BackHandler } from 'react-native';
import React, {useState} from 'react';
import Loja from './Loja';
import Banner from './Banner';
import { sorveterias } from './Base';



 



function Signin({ navigation }) {
    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
       
    
    const handleLogin = () => {
        if (username =='viktor' && password =='123') {
          navigation.navigate('Cabeçalho de Página inicial');
        } else {
          alert('Nome de usuário ou senha inválidos');
        }
      };
    return (
        <View style={styles.containerlogin}>

            <View style={styles.rectangle}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input}  onChangeText={setUsername} placeholder="Nome de usuário" />
                <TextInput style={styles.input}  onChangeText={setPassword} placeholder="Senha" secureTextEntry={true} />
                <View style={{width:'50%', alignSelf:"center"}}>
                <Button color="#000" title="Entrar" onPress={handleLogin} />
                </View>
            </View>
           

        </View >


    );
}
const styles = StyleSheet.create({
    containerlogin: {
        backgroundColor: '#778beb',
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    rectangle: {
        backgroundColor: '#f8a5c2',
        borderRadius: 8,
        padding: 16,
        width: '80%',
        //   justifyContent: 'center',
        //   alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#303952',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,

        borderColor: '#f7d794',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
    },
    botao2: {
        color: '#000',
        width: '80%',
        alignSelf: 'center',
    },
});


export default Signin;
