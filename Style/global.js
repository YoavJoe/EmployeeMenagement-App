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
    cardtext: {
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
    },card: {
        borderRadius: 6,
        elevation: 6,
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
      },
      cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
      },
      cardsWrapper: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
      }

});