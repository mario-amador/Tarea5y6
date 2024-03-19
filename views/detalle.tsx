import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, ScrollView, ImageBackground, ProgressBarAndroid, StyleSheet } from "react-native";
import axios from "axios";
import Pokemon from "../types/Pokemon";
import styles from "../styles";
import { urlBase } from "./inicio";

const Detalle = ({ navigation, route }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [statsNature, setStatsNature] = useState<any[]>([]);
  const [pokemonSpecies, setPokemonSpecies] = useState<any>();
  const [moves, setMoves] = useState<any[]>([]); // Estado para almacenar los movimientos

  const cargarPokemones = async () => {
    const codigo = route.params.codigo;
    const resultados = await axios.get(`${urlBase}pokemon/${codigo}/`);
    if (resultados.data) {
      setPokemon(resultados.data);
      cargarStatsNature(resultados.data.id);
      cargarPokemonSpecies(resultados.data.species.url);
      cargarMovimientos(resultados.data.moves); // Llama a la función para cargar los movimientos
    }
  };

  const cargarStatsNature = async (pokemonId: number) => {
    const resultados = await axios.get(`${urlBase}pokemon/${pokemonId}/`);
    if (resultados.data) {
      setStatsNature(resultados.data.stats);
    }
  };

  const cargarPokemonSpecies = async (speciesUrl: string) => {
    const resultados = await axios.get(speciesUrl);
    if (resultados.data) {
      setPokemonSpecies(resultados.data);
    }
  };

  const cargarMovimientos = async (movesData: any[]) => {
    const movesPromises = movesData.map(async (move) => {
      const moveData = await axios.get(move.move.url);
      return moveData.data;
    });
    const movesInfo = await Promise.all(movesPromises);
    setMoves(movesInfo);
  };

  useEffect(() => {
    cargarPokemones();
  }, []);

  const renderProgressBar = (statValue: number) => {
    const progress = statValue / 100; // Assuming max stat value is 100
    return (
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        style={styles.progressBar}
        color="#4CAF50" // You can change the color here
      />
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("./pokemon___poke.jpg")}
        style={[styles.ImagenFondo, { resizeMode: "cover" }]}
        blurRadius={20}
      >
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.FotoPokemon}
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${route.params.codigo}.png`,
              }}
            />
            {pokemon && (
              <View>
                <Text style={styles.TextoTituloInfo}>Información del Pokémon</Text>
                <Text style={styles.TextoInfo}>Código: {pokemon.id}</Text>
                <Text style={styles.TextoInfo}>Nombre: {pokemon.name}</Text>
                <Text style={styles.TextoInfo}>Peso: {pokemon.weight}</Text>
                <Text style={styles.TextoInfo}>Altura: {pokemon.height}</Text>
                <Text style={styles.TextoInfo}>Tipo(s): {pokemon.types.map((type) => type.type.name).join(", ")}</Text>
                <Text style={styles.TextoTituloHab}>Lista de Habilidades</Text>
                <View>
                  {pokemon.abilities.map((ability, index) => (
                    <Text key={index} style={styles.TextoInfo}>Habilidad: {ability.ability.name}</Text>
                  ))}
                </View>
              </View>
            )}
            <View>
              <Text style={styles.TextoTituloEst}>Estadísticas de la Naturaleza</Text>
              {statsNature.map((stat, index) => (
                <View key={index}>
                  <Text style={styles.TextoInfo}>{stat.stat.name}: {stat.base_stat}</Text>
                  {renderProgressBar(stat.base_stat)}
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.TextoTituloSpecies}>Especies de Pokémon</Text>
              {pokemonSpecies && (
                <View>
                  <Text style={styles.TextoInfo}>Color: {pokemonSpecies.color.name}</Text>
                  <Text style={styles.TextoInfo}>Generación: {pokemonSpecies.generation.name}</Text>
                  <Text style={styles.TextoInfo}>Hábitat: {pokemonSpecies.habitat.name}</Text>
                </View>
              )}
            </View>
            <View>
              <Text style={styles.TextoTituloMoves}>Movimientos de los Pokémon</Text>
              <View style={styles.MovimientosContainer}>
                {moves.map((move, index) => (
                  <View key={index} style={styles.MovimientoItem}>
                    <Text style={styles.TextoInfoMo}>Identificación: {move.id}</Text>
                    <Text style={styles.TextoInfoMo}>Nombre: {move.name}</Text>
                    <Text style={styles.TextoInfoMo}>Exactitud: {move.accuracy}</Text>
                    <Text style={styles.TextoInfoMo}>PP: {move.pp}</Text>
                    <Text style={styles.TextoInfoMo}>Fuerza: {move.power}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Detalle;