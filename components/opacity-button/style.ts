import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    opacityButton: {
        marginHorizontal: 20,
        borderRadius: 28,
        border: 1,
        fontFamily: 'arial',
        fontSize: 20,
        padding: 16,
        textShadowOffset: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    enabled: {
        backgroundColor: '#7FFF00',
        color: '#ffffff',
    },
    disabled: {
        backgroundColor: 'grey',
        color: 'white',
    },
    text: {
        color: '#4F4E4E',
        fontSize: 17,
    }
});

export default style;
