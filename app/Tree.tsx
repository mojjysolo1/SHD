import { View, Text,FlatList,SectionList } from 'react-native'
import React from 'react'
import NodeList from './NodeList'

const Tree = ({data,deleteItem,updateItem}) => {

  return (
    <View>
       <FlatList
         data={data}
         renderItem={({item})=>(

             <NodeList node={item} deleteItem={deleteItem} updateItem={updateItem}/>
         )}

         keyExtractor={(item,index) => {
          // return item.key;
          return 'D' + index.toString();
           }}
         />
    </View>
  )
}

export default Tree