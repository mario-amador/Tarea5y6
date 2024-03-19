import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Bienvenida = ({ navigation }) => {
    const handlesPressInicio = () => {
        navigation.navigate('Listado de Pokémon');
    };

    return (
        <SafeAreaView style={styles.Contenedor}>
            <Image
                source={require('./fondopoke.jpg')}
                style={styles.ImagenFondo}
            />
            <ScrollView contentContainerStyle={styles.ScrollContainer}>
                <View style={styles.InnerContainer}>
                    <Image
                        source={require('./poke.png')}
                        style={styles.Encabezado}
                    />
                    <Button title="Ingresar" onPress={handlesPressInicio} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1,
    },
    ImagenFondo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    ScrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    InnerContainer: {
        alignItems: 'center',
    },
    Encabezado: {
        width: 250,
        height: 100,
        marginBottom: 460,
    },
});

export default Bienvenida;