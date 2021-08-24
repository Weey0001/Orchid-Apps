import { Text } from "react-native";
import TitleStyleList from "./titleStyle/TitleStyleLI";

const TitleListItem = props => 
  
  <Text style = { TitleStyleList.txt } >

    { props.itemData.Name }

  </Text>   

export default TitleListItem