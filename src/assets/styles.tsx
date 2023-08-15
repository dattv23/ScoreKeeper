import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#322653',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    textColor: {
        color: '#FFD2D7'
    },
    marginTop8: {
        marginTop: 8,
    },
    marginBottom8: {
        marginBottom: 8,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    heading: {
        marginTop: 20,
        fontSize: 28,
    },
    button: {
        width: 200,
        alignItems: 'center',
        backgroundColor: '#9288F8',
        padding: 8,
        borderRadius: 8,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 8
    },
    register: {
        height: '100%',
        backgroundColor: '#322653',
    },
    formRegister: {
        width: 320,
        marginLeft: 32,
        marginRight: 32,
        marginTop: 32,
        padding: 8,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 8
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 14,
        marginVertical: 10,
        backgroundColor: '#012755',
        borderRadius: 20
    },
    boxTeams: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxName: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    boxScore: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    dashboard: {
        backgroundColor: '#8062D6',
        borderRadius: 16,
        padding: 16,
        width: '80%'
    }
});

export default styles;