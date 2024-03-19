import React from "react";
import Pokemon from "../types/Pokemon";
import { Image, Text, View } from "react-native";
import styles from "../styles";

type FichaListaPokemonProps = {
    codigo: number;
    pokemones: Pokemon;
};
//https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/0.png
const FichaListaPokemon = (props: FichaListaPokemonProps) => {
    return (
        <View style = {styles.ContenedorFicha}>
            <Image
            style={styles.FotoPokemonEnFicha}
            source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${props.codigo}.png`,
            }}
            />
            <View>
                <Text style = {styles.NombreEnFicha}>Nombre: {props.pokemon.name}</Text>
            </View>
        </View>
    );
};

export default FichaListaPokemon;
