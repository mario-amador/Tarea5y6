import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import Pokemon from "../types/Pokemon";
import axios from "axios";
import PokemonResults from "../types/PokemonResults";
import FichaListaPokemon from "../components/FichaListaPokemon";
import styles from "../styles";

const ArregloPokemonInicial: Pokemon[] = [];
export const urlBase = 'https://pokeapi.co/api/v2/';
const Inicio = ({navigation}) => {
    const [pokemones, setPokemones] = useState (ArregloPokemonInicial); 
    const [count, setCount]  = useState(0);
    const [next, setNext] =  useState('');
    const [previous, setPrevious] =  useState('');
    const [cargando, setCargando] =  useState(false);
    const refScroll = useRef(null);

    const CargarPokemones = async () => {
        const resultados = await axios.get(`${urlBase}pokemon`);
        if (resultados.data) {
            const datos: PokemonResults = resultados.data;
            setCount(datos.count);
            if (datos.next == null)
            {
                setNext("");
            }else{
                setNext(datos.next);
            }
            if (datos.previous == null) {
                setPrevious('');
                } else {
                    setPrevious(datos.previous as string);
                    }
                    setPokemones(datos.results);
        }
    };

    const CargarSiguientePagina = async () => {
        if(next !== ''){
            setCargando(true);
            const  resultado = await axios.get(next);
            if (resultado.data){
                const datos: PokemonResults = resultado.data;
                if  (datos.next == null) {
                    setNext('');
                } else {
                    setNext(datos.next);
                }
                if  (datos.previous == null) {
                    setPrevious('');
                } else {
                    setPrevious(datos.previous as  string);
                }
                setPokemones([...pokemones, ...datos.results]);
            }
        }
    };


    const isCloseToBotton = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return (
            layoutMeasurement.height + contentOffset.y >= 
            contentSize.height - paddingToBottom
        );
    };

    const handleScroll =  ({ nativeEvent }) => {
        if (isCloseToBotton (nativeEvent)) {
            if (!cargando){
                console.log("Iniciando Carga");
                CargarSiguientePagina();
            }
        }
    }

    useEffect(() => {
        CargarPokemones();
        }, []);
    
    useEffect(() => {
        console.log("Finzalizando Carga");
        setCargando (false);
    } , [pokemones]);

    const handlePressIrInicio = () => {
        refScroll.current.scrollTo({x: 0, y: 0, animated: true});
    };

    const handlePressPokemon = (codigo:  number) =>{
        navigation.navigate('Detalle de Pokémon', { codigo : codigo });
    };
    return (
        <SafeAreaView style={styles.contenedorScroll}>
            <ScrollView style={{height: '97%'}} onScroll={handleScroll} ref={refScroll}>
            {pokemones.map((p, index) => {
                return (
                    <Pressable onPress={() => handlePressPokemon (index + 1)}>
                    <FichaListaPokemon 
                    key={`pokemon-${index + 1}`} 
                    codigo={index + 1} 
                    pokemon={p} 
                    />
                    </Pressable>
                    );
            })}
            {cargando && <ActivityIndicator size= {'large'}/>}
            </ScrollView>
            <Pressable onPress={handlePressIrInicio}>
                <View style={styles.botonIrInicio}>
                    <Text style={styles.TextoBotonIrInicio}>Ir al Inicio</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default Inicio;