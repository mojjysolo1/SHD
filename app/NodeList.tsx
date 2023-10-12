import { View, Text,TouchableOpacity,StyleSheet,Alert } from 'react-native'
import React,{useState} from 'react'
import Tree from './Tree';
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

const NodeList = ({node,deleteItem,updateItem}) => {
      const[visible,setVisible]=useState(false);
      const [visibleDialog,setvisibleDialog]=useState(false);
      const [updateInput,setUpdateInput]=useState('');

    const hasChild=node.employees?true:false;

    const dropDownIndicator=()=>{
        if(!hasChild)
           return node.icon;
       return visible?'chevron-down':'chevron-right'
    }

    // updateItem

    const update=()=>{
        setvisibleDialog(true);
    }

  return (
    <>
        {(
        <View>
            <TouchableOpacity 
            style={styles.listItem}
            onPress={()=>setVisible(!visible)}
            >
                <View style={styles.listItemView}>

                    <FontAwesome5 size={15} style={{marginTop:5,width:20}} name={dropDownIndicator()}/>
                    <Text style={styles.listItemText}>
                        {hasChild?node.role:node.name}
                    </Text>

                    {/* edit/update icon*/}
                    <FontAwesome5 size={18} color='black' style={{ backgroundColor:'#f3b481',marginRight:25}} onPress={()=>setvisibleDialog(true)}  name='edit'/> 

                    {/* delete icon*/}
                    <FontAwesome5 size={15} color='red' style={{ backgroundColor:'#f3b481',padding:5,borderRadius:12}} onPress={()=>deleteItem(node.key)}  name='minus'/>  

                </View>  
            </TouchableOpacity>

            <View style={styles.dialog}>  
                <Dialog.Container visible={visibleDialog}>
                    <Dialog.Title>{node.role??node.name}</Dialog.Title>
                    <Dialog.Input label="Update"
                    value={updateInput}
                    onChangeText={(text : string) =>setUpdateInput(text)}
                    ></Dialog.Input>
                    <Dialog.Button label="Submit" onPress={()=>update} />
                </Dialog.Container>
            </View>
        </View>
        )
        }

         {hasChild && visible && (<View style={{ padding:1,marginLeft:20 }}>
                <Tree data={node.employees} deleteItem={deleteItem} />
            </View>)
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
        flexDirection:'row'
    },
    listItemText:{
        flex:1,
        fontSize:18,
        color:'#000',
        marginLeft:5
    },
    dilaog:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})
export default NodeList