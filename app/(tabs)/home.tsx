/* @ts-nocheck */
/* eslint-disable */
import { View, Text,Modal,
  StyleSheet,
  Pressable,
  Button,
  TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import Header from '../Header'
import Tree from '../Tree';
import { FontAwesome5 } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

const company = [
  {
    key: 1,
    role: "CEO",
    icon: "fa fa-folder",
    employees: [
      {
        key: 11,
        icon: "user-tie",
        name: "Ben Okwile",
        reports_to: "",
      },
    ],
   
  },
  {
    key: 2,
    role: "Receptionist",
    icon: "fa fa-folder",
    employees: [
      {
        key: 21,
        icon: "user-tie",
        name: "Justine Loveless",
        reports_to: "CEO",
      },
    ],
  },
  {
    key: 3,
    role: "Software Developers",
    icon: "fa fa-folder",
    employees: [
      {
        key: 31,
        icon: "user-tie",
        name: "Achin latos",
        reports_to: "CTO",
      },
      {
        key: 32,
        icon: "user-tie",
        name: "Elon Dan",
        reports_to: "CTO",
      },
    ],
   
  },
  
];


const home = () => {
  const [listData,setListData]=useState(company);
  const [visibleModal,setvisibleModal]=useState(false);
  const [formData,setFormData]=useState({role:'',name:'',reports_to:''})

  const addRole=()=>{
       setvisibleModal(true);
  }

  const formHandler=(type,textVal)=>{
    switch(type){
       case 'role':
        setFormData(prevFormData=>{
          return {...prevFormData,role:textVal}
       });
       break;

       case 'name':
        setFormData(prevFormData=>{
          return {...prevFormData,name:textVal}
       });
       break;

       case 'reports_to':
        setFormData(prevFormData=>{
          return {...prevFormData,reports_to:textVal}
       });
       break;
    }
      
  }

  const register=(update=false)=>{
    
    listData.map((items)=>{
        if(items.role==formData.role){
            let update_data={key:Math.floor(Math.random() * 9),icon:"user-tie",name:formData.name,reports_to:formData.reports_to};
            items.employees.push(update_data);
            update=true;
        }
    })

    if(!update){

      let insert_data={key:Math.floor(Math.random() * 9),role:formData.role,icon:"fa fa-folder",employees:[{key:Math.floor(Math.random() * 9),icon:"user-tie",name:formData.name,reports_to:formData.reports_to}]};

      listData.push(insert_data);
    }
     
  }

  const deleteItem=(key_id,new_list=[])=>{
  
    let map_list=listData.map(item=>{
                      if(item=='undefined' || !item) return false;
         if(item.key!=key_id){
             let obj1={key:item.key,role:item.role,icon:item.icon,employees:[]};
              let emp_array=Array.from(item.employees);

              for(i in emp_array){
                if(emp_array[i]=='undefined' || !emp_array[i]) continue;
                if(emp_array[i].key!=key_id){
                  obj1.employees=[emp_array[i],...obj1.employees];
                }

              }
                    
            return obj1;
         }else{
                 return '';
         }
       
    });
     setListData(map_list);
  }

  const updateItem=(key,obj)=>{
      
      let newlist=listData.map(item=>{
            if(item.key===key){
                return {...item,role:obj.role}
            }else{
              let emp_obj=[];
              let emp_array=Array.from(item.employees);

              for(i in emp_array){

                if(emp_array[i].key==key){
                   emp_obj.push({...emp_array[i],name:obj.name});
                  }else{
                    emp_obj.push(emp_array[i]);
                  }
              }
              let clean_item={...item,employees:[]};
              return {...clean_item,employees:emp_obj};
            }
      })

      setListData(newlist);
  }

  return (
    <>
      <Header propAddRole={addRole}/>
      <View>
         <Tree data={listData} deleteItem={deleteItem} updateItem={updateItem} />
      </View>

      <Modal 
      visible={visibleModal}
      animationType='slide'
      presentationStyle='pageSheet'>
            <View style={styles.modal_container}>

              <View style={styles.modal_header}>
                 <Text style={{fontSize:21,fontWeight:'bold' }}>
                     Add Staff
                  </Text>

                  <FontAwesome5 
                  onPress={()=>setvisibleModal(false)}
                  size={22}
                  style={{marginTop:5}} name='window-close'
                  />
              </View>
              <View style={styles.modal_body}>

                {/* Add role */}
                  <TextInput
                        value={formData.role}
                        style={styles.modal_body_input}
                        onChangeText={(textValue)=>formHandler('role',textValue)}
                        placeholder='insert role'/>
                  {/*Ends Add role */}

                  {/* Add staff name */}
                  <TextInput
                         value={formData.name}
                        style={styles.modal_body_input}
                        onChangeText={(textValue)=>formHandler('name',textValue)}
                        placeholder='Staff names'/>
                  {/*Ends Add staff name */}

                  {/* Add reports to */}
                  <TextInput
                         value={formData.reports_to}
                        style={styles.modal_body_input}
                        onChangeText={(textValue)=>formHandler('reports_to',textValue)}
                        placeholder='Reports to'/>
                  {/*Ends Add reports to */}

              </View>
              <View style={styles.modal_footer}>
                {/* register */}
                   <Button 
                    onPress={register} 
                    color={'#7a3a05'} 
                    title='Register' 
                    />
              </View>
                
            </View>
      </Modal>
    </>
  )
}

const styles=StyleSheet.create({
  modal_container:{
    flexDirection:'column',
    flex:1,
    padding:10,
    // backgroundColor: 'rgba(0,0,0,0.1)'
},
modal_header:{  
  flexDirection:'row',
  justifyContent:'space-around',
  height:'10%'
  },
  modal_body:{
    flex:1,
    height:'20%',
},
modal_body_input:{
  borderBottomWidth:1,
  padding:10,
  width:'70%',
  margin:5,
},
modal_footer:{
  flex:1,
}
})

export default home