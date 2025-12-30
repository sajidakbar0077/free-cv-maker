import { View, Text, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/style';
import TemplateCards from '../components/TemplateCards';

const TemplateScreen = () => {
  const ResumeTemplates = [
    {
      id:0,
      icon: 'work-outline',
      title: 'ATS Friendly',
      details: 'Optimized for applicant tracking systems (ATS) to ensure your resume is easily readable by recruiters.',
    },
    {
      icon: 'euro-symbol',
      title: 'Europass',
      details: 'Standardized European CV format, widely recognized across Europe and suitable for international applications.',
    },
    {
      icon: 'dashboard',
      title: 'Modern',
      details: 'Clean and contemporary layout with sections highlighted for clarity and visual appeal.',
    },
    {
      icon: 'palette',
      title: 'Creative',
      details: 'Visually striking design for creative industries, includes colors, graphics, and innovative layouts.',
    },
    {
      icon: 'account-tie',
      title: 'Professional',
      details: 'Formal and elegant layout suitable for corporate positions and traditional industries.',
    },
  ];

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={styles.headerContainer}>
        <Pressable>
          <MaterialIcons name="arrow-back" size={24} color="#111827" />
        </Pressable>
        <Text style={styles.headerTitle}>Choose Resume Template</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {ResumeTemplates.map((item, index) => (
          <TemplateCards
            key={index}
            iconName={item.icon}
            title={item.title}
            details={item.details}
          />
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={[styles.footer, { position: 'absolute', bottom: 0, left: 0, right: 0 }]}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TemplateScreen;
