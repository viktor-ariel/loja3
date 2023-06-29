import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import Banner from './Banner';
import {sorveterias} from './Base';
import styles from './style';
import Detalhe from './Detalhe';




export default function Loja({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                {sorveterias.map(item =>
                    <TouchableOpacity key={item.nome} onPress={() => navigation.navigate('Detalhes',{...item}) }>
                        <Banner key={item.nome} props={item} />
                    </TouchableOpacity>
                    )}
            </View>
        </ScrollView>
    )

}
// options={{headerTransparent:true,title:'',}} deixar o titulo editavel.