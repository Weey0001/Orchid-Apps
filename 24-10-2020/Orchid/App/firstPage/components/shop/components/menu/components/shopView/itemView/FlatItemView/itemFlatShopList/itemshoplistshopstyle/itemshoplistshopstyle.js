import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const ItemShopListStyle = StyleSheet.create({
  
  countainer: {

    margin: 10 ,
    justifyContent: "center" ,
    height: width / 3 ,
    borderRadius: width / 20 ,
    borderWidth: 1 ,
    borderColor: "#ffffff57" ,
    backgroundColor: "#0000008a"

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 20 ,
    padding: 5 ,
    textAlign: 'center' ,
    borderRadius: 5 ,
    textShadowRadius: 1 ,
    textShadowColor: 'black' ,
    fontWeight: "bold"

  } , 

  img: {

    width: width / 3 , 
    height: width / 3 ,
    position: "absolute" ,
    borderRadius: width / 10

  } ,

  countInfo: {

    width: width / 5*3 ,
    height: width / 3

  } ,

  price: {

    color: "white" ,
    alignSelf: "flex-end" ,
    marginTop: width / 20 ,
    fontSize: width / 20 ,
    marginRight: width / 30 ,
    fontWeight: "bold"

  }

});

export default ItemShopListStyle 