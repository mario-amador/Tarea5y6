import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    ContenedorFicha: {
        height: 120,
        backgroundColor: '#DFFFBA',
        display: 'flex',
        flexDirection:'row',
        marginBottom: 10,
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor:  '#000000',
        borderRadius: 48,
    },
    ContenedorDatos: {
        display: 'flex',
        flexDirection: 'column',
    },
    NombreEnFicha:{
        fontSize: 20,
        color: '#332811',
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 20,
        padding: 5,
    },
    FotoPokemonEnFicha: {
        height: 100,
        width: 80,
        marginRight: 15,
    },
    contenedorScroll: {
        display: 'flex',
        flexDirection: 'column',
    },
    botonIrInicio: {
        backgroundColor: '#2a0c75',
        borderRadius: 15,
        height: 50,
    },
    TextoBotonIrInicio: {
        color: '#cab6fa',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    FotoPokemon: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    TextoTituloInfo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: -45,
        padding: 10,
        color: '#002AFE',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor:  '#000000',
        borderRadius: 150,
        textAlign: 'center',
      },
      TextoInfo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 9,
        marginTop: -10,
        padding: 20,
        lineHeight: 15,
        color: '#000000',
        marginLeft: 35,
      },
      TextoTituloHab: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: -8,
        padding: 10,
        color: '#002AFE',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor:  '#000000',
        borderRadius: 150,
        textAlign: 'center',
      },
      TextoTituloEst: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: -8,
        padding: 10,
        color: '#002AFE',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor:  '#000000',
        borderRadius: 150,
        textAlign: 'center',
      },
      TextoTituloSpecies: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: -8,
        padding: 10,
        color: '#002AFE',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor:  '#000000',
        borderRadius: 150,
        textAlign: 'center',
    },
    progressBar: {
        marginTop: -30,
        marginLeft: 55,
        width: "80%",
        padding: 10,
      },
      TextoTituloMoves: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: -8,
        padding: 10,
        color: '#002AFE',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor:  '#000000',
        borderRadius: 150,
        textAlign: 'center',
    },
    MovimientosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      MovimientoItem: {
        width: '50%',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
      },
      TextoInfoMo: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 4,
        marginTop: -33,
        padding: 20,
        lineHeight: 13,
        color: '#000000',
        marginLeft: 20,
      },
});

export default styles;