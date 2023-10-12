import { View, 
  Text,
  StyleSheet,
  Pressable,
} from 'react-native'
import React from 'react'


const Header = ({propAddRole}) => {

 
  return (
    <>
        <View style={styles.container}>
            <Pressable 
            style={styles.bar_btn}
            android_ripple={{ color:'#dddddd' }}
            onPress={propAddRole}
            >
              <Text style={styles.bar_text}>Add Staff</Text>
            </Pressable>
        </View>
      
    </>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#7a3a05',
      maxHeight:100
    },
    bar_btn:{
      marginTop:'10%',
      marginLeft:2,
      marginBottom:5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      borderRadius: 4,
      backgroundColor: 'black',
    },
    bar_text:{
      fontSize: 18,
      lineHeight: 18,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },

  });
export default Header