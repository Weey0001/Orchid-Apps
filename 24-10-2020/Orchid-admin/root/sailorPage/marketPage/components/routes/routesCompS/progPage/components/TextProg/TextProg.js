import { View , Text } from "react-native";
import TextProgStyle from "./TextProgStyle/textProgStyle";

const TextProg = _ => 

  <View style = { TextProgStyle.container } >
    
    <Text style = { TextProgStyle.wellTxt } >
      Bienvenue sur ORCHID
    </Text>

    <Text style = { TextProgStyle.frst } >
      ORCHID est un reseau d'informations mise en place par nos programmeurs offrant a nos Clients des articles et des services provenant de toutes la grande Ile.
    </Text>

    <Text style = { TextProgStyle.scnd } >
      Nous offrons egalement des services de creation d'applications Mobiles et de sitse Web,  en offline ou online.
    </Text>

    <Text style = { TextProgStyle.contact } >
      Nos Contacts:
    </Text>

  </View>

export default TextProg