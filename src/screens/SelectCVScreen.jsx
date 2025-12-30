// SelectCVScreen.js
import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../style/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectCVCard from '../components/SelectCVCard';
import { useState } from 'react';

const SelectCVScreen = () => {
  const id = 0;
  const [selectedId, setSelectedId] = useState(null);

  const cvTemplates = [
    [
    { id: '1', name: 'Modern Professional', image: require('../assets/images/ats1.png') },
    { id: '2', name: 'Creative Minimalist', image: require('../assets/images/ats1.png') },
    { id: '3', name: 'Classic Elegant', image: require('../assets/images/ats1.png') },
    { id: '4', name: 'Bold & Dynamic', image: require('../assets/images/ats1.png') },
    { id: '5', name: 'Simple & Clean', image: require('../assets/images/ats1.png') },
    { id: '6', name: 'Executive Standard', image: require('../assets/images/ats1.png') },
  ],
  [
    { id: '1', name: 'Europass', image: require('../assets/images/ats1.png') },
    { id: '2', name: 'Creative Minimalist', image: require('../assets/images/ats1.png') },
    { id: '3', name: 'Classic Elegant', image: require('../assets/images/ats1.png') },
    { id: '4', name: 'Bold & Dynamic', image: require('../assets/images/ats1.png') },
    { id: '5', name: 'Simple & Clean', image: require('../assets/images/ats1.png') },
    { id: '6', name: 'Executive Standard', image: require('../assets/images/ats1.png') },
  ]
];

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => {/* navigation.goBack() */}}>
          <MaterialIcons name="arrow-back" size={24} color="#111827" />
        </Pressable>
        <Text style={styles.headerTitle}>Choose CV</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding:16,paddingBottom: 100 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {cvTemplates[id].map((item) => (
            <View key={item.id} style={{ width: '48%', marginBottom: 8 }}>
              <SelectCVCard
                image={item.image}
                name={item.name}
                selected={selectedId === item.id}
                onPress={() => setSelectedId(item.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

     
        <View style={[styles.footer, { position: 'absolute', bottom: 0, left: 0, right: 0 }]}>
        <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Create New CV')}>
          <Text style={styles.footerButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      </View>
    
  );
};

export default SelectCVScreen;