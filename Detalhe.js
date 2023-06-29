import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import * as React from 'react';
import Banner from './Banner';
import { sorveterias } from './Base';
import styles from './style';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-phone-call';
import call from 'react-native-phone-call';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import {
  Animated,
  Button,
  SafeAreaView,
} from 'react-native';


export default function Detalhe({ route }) {
    const telefone = route.params.telefone;
    const trigerCall = () => {
        const args = {
            number: telefone, // String value with the number to call - valor do telefone
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call - não o q isso faz
            skipCanOpen: true // Skip the canOpenURL check - não o q isso faz
        }

        call(args).catch(console.error)
    };
    const step = route.params.avaliacao;
    const Progresso = ({ steps, height }) => {
        const[width, setWidht] = React.useState(0);
        const animatedValue = React.useRef(new Animated.Value(-1000)).current;
        const reactive = React.useRef(new Animated.Value(-1000)).current;
        React.useEffect(() => {
            Animated.timing(animatedValue, {
                toValue: reactive,
                duration: 3000,
                useNativeDriver: true,
            }).start();
        }, []);
        React.useEffect(() => {
            reactive.setValue(-width + (width * step) / steps);
        }, [step, width]);

        return (
            <View>
                <Text>{step}% de {steps}%</Text>
                <View style={{
                    height,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: height,
                    overflow: 'hidden'
                }} >
                    <Animated.View style={{
                        height,
                        width: '100%',
                        borderRadius: height,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transform:[{
                            translateX: animatedValue
                        }]
                    }}
                    />
                </View>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.containerDetalhe}>

                <Text style={styles.nomeDetalhe}>{route.params.nome}</Text>

                <Image style={styles.logoDetalhe} source={route.params.foto}/>

                <Text style={styles.detalheDetalhe}> {route.params.detalhe}</Text>
            
                <Text onPress={trigerCall} style={styles.callButtton}>
                    <Text style={styles.phoneIcon}>📞</Text>
                    <Text style={styles.phoneNumber}>{route.params.telefone}</Text>
                </Text>

                <Progresso steps={100} height={20}/>

                <Text >{route.params.avaliacao}% dos nossso clientes gostaram da nossa sorveteria!!</Text>

            </View>
        </ScrollView>
    )
}
