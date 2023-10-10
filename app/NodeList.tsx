import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Tree from './Tree';
import { FontAwesome } from '@expo/vector-icons';

const NodeList = ({node}) => {
      const[visible,setVisible]=useState(false);

    const hasChild=node.children?true:false;

    const dropDownIndicator=()=>{
        if(!hasChild)
           return '';
       return visible?'chevron-down':'chevron-right'
    }

  return (
    <>
        {(<TouchableOpacity 
        style={styles.listItem}
        onPress={()=>setVisible(!visible)}
        >
            <View style={styles.listItemView}>

                <FontAwesome size={15} style={{marginTop:7}} name={dropDownIndicator()}/>
                <Text style={styles.listItemText}>
                    {node.label}
                    </Text>
            </View>     
        </TouchableOpacity>)
        }

         {hasChild && visible && (<TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
            <Text style={styles.listItemText}>
                <Tree data={node.children} />
            </Text>
                {/* <Icon name="remove" onPress={()=>removeItem(item.id)} size={20} color="firebrick"/> */}
            </View>     
        </TouchableOpacity>)
        }

    </>
    
  )
}
const styles=StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listItemView:{
        flexDirection:'row',
    },
    listItemText:{
        fontSize:18,
        color:'#000',
        marginLeft:2
    }
})
export default NodeList