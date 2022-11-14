import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        backgroundColor: '#16202a',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderStyle: 'solid',
        borderColor:'grey',
        borderBottomWidth: 1,
        padding: 15,
        },

    fotoUsuario:{
        width: '20%',
        paddingTop: 15,
        },
        gatinho:{
                height: 50,
                width: 50,
                borderRadius: 50,
        },

        headerPost:{
            width: '78%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',

        },
       
        nomeUsuario:{
            flexDirection:'row',
        },
        nome:{
            color: 'white',
            fontWeight:'bold',
        },

        usuario:{
            paddingLeft: 5,
            color: 'grey'
        },
        textoPost:{
            width: '78%',
        },

        texto:{
        color: 'white',
        },

        containerInteracoes:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingTop: 10,
            paddingRight: 20,
        },
        textInt:{
            color: 'grey',
            fontWeight:'400',

        }

})