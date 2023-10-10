import { View, Text,StatusBar,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Header from '../Header'
import Tree from '../Tree';

const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
        children: [
          {
            key: "1-0",
            label: "document1.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-0",
            label: "documennt-2.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
   
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
    title: "Downloads Folder",
  },
];


const home = () => {
  const [listData,setListData]=useState(treeData);


  return (
    <>
   
      <Header/>
      <View>
         <Tree data={listData}/>
      </View>
    </>
  )
}

export default home