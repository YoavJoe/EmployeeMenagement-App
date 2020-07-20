import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#3498db',
        justifyContent: 'center'
    },
    title: {
        fontWeight:"bold",
        fontSize: 30,
        color:"#fff",
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    cardheder: {
        fontWeight:"bold",
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center'
    }, 
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 10

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    },
    card: {
        flex: 0.45,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: "black",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
      },
      cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
      },
      cardsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      rightAction: {
          justifyContent: 'center',
          alignItems: 'flex-end'
      },
      cardtext: {
        color: 'textSecondary',
        fontFamily: 'body2'
    }
});