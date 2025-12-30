import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../style/style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TemplateCards = ({iconName,title,details}) => {
  return (
    <View>
     <TouchableOpacity style={[
    styles.card,  
    { flexDirection:"column",alignItems:"flex-start", paddingVertical:15,},
  ]}>
        <MaterialIcons name={iconName} size={38} color='#01D3F8' />
      
<View style={styles.textContainer}>
          <Text style={[styles.title,{marginTop:10}]}>{title}</Text>
         <Text style={[styles.detailText,{width:"auto",marginTop:2}]}>
          {details}
        </Text>
      </View>


     </TouchableOpacity>
    </View>
  )
}

export default TemplateCards