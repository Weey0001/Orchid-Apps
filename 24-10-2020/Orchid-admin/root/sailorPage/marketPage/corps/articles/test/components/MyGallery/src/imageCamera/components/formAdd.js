import React, 
{ 
  useContext, 
  useState, 
  forwardRef, 
  useRef,
  useEffect, 
} from 'react'
import * as Animatable from 'react-native-animatable';
import { 
  Dimensions, 
  Keyboard, 
  Picker,  
  TouchableWithoutFeedback,
  Text,
  TextInput, 
  ScrollView,  
  View,
  
} from 'react-native';
import { StateContext } from "../../../../../../../../../context/stateContext";
import axios from 'axios'
import * as ImageManipulator from "expo-image-manipulator";
import { ModalAddCat } from '../addCat/addCat';
import { BackBtn } from '../addCat/component/backbtn';
import ViewPager from '@react-native-community/viewpager';
import { ViewPagerImg } from './viewPager/viewPagerImg';
import { MyGalleryContext } from "../../../MyGalery";

const {width} = Dimensions.get('screen')

export const FormAdd = (props) => {

  let {
    isUri,
    setUri,
    close,
    setGallery,
    setSelectedItem
  } = props;
  let _name = useRef()
  let _price = useRef()
  let _desc = useRef()
  let {
    types,
    info,
    Api,
    loadItems,
    setLoad,
    load,
    loadTypes
  } = useContext(StateContext)

  let [value,setValue] = useState(false)
  let [isCategorie,setCategorie] = useState(false)

  let newItem = async() => {

    let startTime = new Date().getTime()
    let lenUri = isUri.length
    let numDone = 0

    console.log(info)
    console.log(isUri)

    let sendFile = async (data) => {
      let result = await axios({
        url: `${Api}/items/addMultImg`,
        method: 'POST',
        data: data,
        headers: {
          'Content-Type': "application/json"
        }
      })
      if(result.data==="done"){
        numDone++
        if(numDone!==lenUri){
          console.log('not equal')
          console.log("numDone: ", numDone)
          console.log('lenUri: ',lenUri)
          await ImageManipulator
            .manipulateAsync(
              isUri[numDone].uri,
              [{resize:{width:Number(isUri[numDone].width),height:Number(isUri[numDone].height)}}],
              {
                compress:1,
                format:ImageManipulator.SaveFormat.JPEG,
                base64:true
              }
            )
            .then( res =>{
              let idTime = new Date().getTime()
              let item = {
                base64:res.base64,
                id: `${idTime}`
                ,folder:`${startTime}`,
                info:info,
                name:_name.current._lastNativeText,
                price:_price.current._lastNativeText,
                type:value,
                description:_desc.current._lastNativeText,
              }
              sendFile(item)
            })
        }else{
          console.log('Updated')
          alert('Updated')
          _name.current.clear()
          _price.current.clear()
          _desc.current.clear()
          await setSelectedItem([])
          await setUri(false)
          await setValue(false)
          await loadItems(true)   
          await close()         
          await setLoad(!load)
          await loadTypes(true)

        }
      }
    }
    await 
     ImageManipulator
      .manipulateAsync(
        isUri[0].uri,
        [{resize:{width:Number(isUri[0].width),height:Number(isUri[0].height)}}],
        {
          compress:1,
          format:ImageManipulator.SaveFormat.JPEG,
          base64:true
        }
      )
      .then( res =>{
        let idTime = new Date().getTime()
        let item = {
          base64:res.base64,
          id: idTime,
          folder:`${startTime}`,
          shopId: `${info.shopId}`,
          info:info,
          name:_name.current._lastNativeText,
          price:_price.current._lastNativeText,
          type:value,
          description:_desc.current._lastNativeText,
        }
        sendFile(item)
      })

  }

  return (
    <Animatable.View
      useNativeDriver={true}
      style={{
        height:"100%",
        width:"100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      animation='bounceIn'

    >

      <View
        style={{
          width:width/6*5,
          height:width/6*5,
          marginTop:5,
          marginBottom:5,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >        
        <ViewPagerImg
          data={isUri}
        />

        <View style={{
          position: 'absolute',
          left:-20,
          top:width/3,             
          width:width/10,
          height:width/10,   
          backgroundColor:'#3396ff87',    
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:30,
          elevation:2
        }}>
          <Text style={{
            color:"#d6d6d6c9",
            fontSize:width/10,
            textAlign:"center",
            top:-2
          }}>
            {`<`}
          </Text>          
        </View>

        <View style={{
          position: 'absolute',
          right:-20,
          top:width/3,             
          width:width/10,
          height:width/10,   
          backgroundColor:'#3396ff87',   
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:30 ,
          elevation:2
        }}>
          <Text style={{
            color:"#d6d6d6c9",
            fontSize:width/10,
            textAlign:"center",
            top:-2
          }}>
            {`>`}
          </Text>        
        </View>




      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >        
        <MyPicker
          types={types}
          value={value}
          setValue={setValue}
          index={3}
          
        />
        <AddCategorie
          setVisible={setCategorie}
          index={2}
        />

      </View>

      <MyInp
        index={4}
        ref={_name}
        text="Nom du produit"
        onSubmitHandler={()=>{
          _price.current.focus()
        }}

        kb="default"
      />

      <MyInp
        index={5}
        ref={_price}
        text="Prix du produit"
        onSubmitHandler={()=>{
          _desc.current.focus()
        }}
        kb='numeric'
      />

      <MyInp
        index={6}
        ref={_desc}
        text="Decrire le produit"
        onSubmitHandler={null}
        kb="default"
      />
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <BackBtn
        source={require('./img/close.png')}
          onPress={close}
        />

        <BtnSave
          index={7}
          onPress={()=>{
            newItem()
          }}
        />      
      </View>

      <ModalAddCat
        isVisible={isCategorie}
        setVisible={setCategorie}
      />
      
    </Animatable.View>
  )
}

const MyInp = forwardRef((props,ref)=>{
  
  let {
    text,
    index,
    onSubmitHandler,
    kb
  } = props

  return(
    <Animatable.View
      useNativeDriver={true}
      animation='flipInX'
      delay={index*100}
      style={{
        margin:10
      }}
    >
      {
        index!==6
        &&
        <TextInput
          ref={ref}
          placeholder={text}
          style={{
            backgroundColor:'white',
            width:width/3*2,
            textAlign:'center',
            borderRadius:10
          }}
          onSubmitEditing={()=>{
            onSubmitHandler()
          }}
          keyboardType={kb}
        />        
      }

      {
        index===6
        &&
        <ScrollView
          style={{
            backgroundColor:"white",
            maxHeight:80,
            borderRadius:20
          }}
        >
          <TextInput
            ref={ref}
            placeholder={text}
            style={{
              width:width/3*2,
              textAlign:'center',
              borderRadius:10
            }}
            multiline={true}
            onBlur={()=>{
              Keyboard.dismiss()
            }}
          />        
        </ScrollView>

      }

    </Animatable.View>
  )
})

const MyPicker = (props) => {

   let {
     types,
     index,
     value,
     setValue
   } = props

  return(
    <Animatable.View
      useNativeDriver={true}
      animation='flipInX'
      delay={index*100}
      style={{
        backgroundColor:'white',
        width:"60%",
        height:30,
        borderRadius:10,
        margin:5
      }}
    >
      
      <Picker
        selectedValue={value}
        onValueChange={
          (itemValue, itemIndex) => setValue(itemValue)
        }
        mode="dialog"
        enabled={true}
        style={{
          height:30,
        }}
      >
        <Picker.Item
          label="Categorie"
          value='Categorie'
          
        />
        { 
          types
          &&
          types.map(({_id,TypeItem})=>
            <Picker.Item
              key={_id}
              label={TypeItem} 
              value={_id} 
            />
          )
        }
      </Picker>
      
    </Animatable.View>
  )
}

const BtnSave = (props) => {

  let {onPress,index} = props
  let savedData = useRef()

  let handleAnim = () => {
    savedData
      .current
      .zoomIn(200)
      .then(end=>{
        if(end.finished){
          onPress()          
        }

      })
  }

  return (
    <Animatable.View
      useNativeDriver={true}
      animation='bounceIn' 
      style={{
        elevation:2,}}
      delay={index*100}
      ref={savedData}
    >

      <TouchableWithoutFeedback
        onPress={()=>{
          handleAnim()
        }}
      >
      
        <Animatable.Image
          useNativeDriver={true}
          ref={savedData}
          style={{

            margin:5,
            width:40,
            height:40
          }}
          source={require("./img/success.png")}
        />

      </TouchableWithoutFeedback>
    
    </Animatable.View>
  )
}

const AddCategorie = (props) => {

  let {
    index,
    setVisible
  }=props

  let btnadd = useRef()
  let handleAnim = () => {
    btnadd
      .current
      .zoomIn(300)
      .then(end=>{
        if(end.finished){
          setVisible(true)
        }
      })
  }

  return(
    <Animatable.View
      useNativeDriver={true}
      animation='bounceIn'
      delay={index*300}
      style={{
        margin:5,
      }}
    >
      <TouchableWithoutFeedback
        onPress={()=>{
          handleAnim()
        }}
      >
        <Animatable.Image
          useNativeDriver={true}
          ref={btnadd}
          style={{
            margin:5,
            width:30,
            height:30
          }}
          source={require('./img/add.png')}
          animation='rotate'
          delay={index*300}
        />
      </TouchableWithoutFeedback>
    </Animatable.View>
  )
}