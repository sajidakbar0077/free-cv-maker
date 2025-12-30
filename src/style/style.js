import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    marginVertical:10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  appTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  brandText: {
    color: '#01D3F8', 
  },
  normalText: {
    color: '#111827',
  },
  centerContainer: {
    flex:1,
    alignContent:"center",
    justifyContent:"center",
  },
  mainText:{
    fontSize:28,
    fontWeight:800,
    textAlign:"center",
    color: '#111827',
    marginBottom:40
  },
   buttonGroup: {
   width: '100%',        
    alignItems: 'center',   
    gap: 16,
    paddingHorizontal:24,
  },

  primaryButton: {
    width: '80%',  
    backgroundColor: '#01D3F8',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  secondaryButton: {
     width: '80%',
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#111827',
  },

  secondaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
 card: {
  flexDirection: 'row',
  backgroundColor:"#ffff",
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical:25,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
  borderWidth:1.5,
  borderColor:"transparent",
  elevation: 1,
},

cardChecked: {
backgroundColor: '#E6F9FD',
borderColor: '#01D3F8',
borderWidth:1.5,
elevation: 1,
},

iconContainer: {
  marginRight: 12,
},

textContainer: {
  flex: 1,
},

title: {
  fontSize: 18,
  fontWeight: '800',
  marginBottom: 6,
  color: '#111827',
},

detailText: {
  width:210,
  fontSize: 14,
  color: '#555',
},

box: {
  width: 23,
  height: 23,
  borderWidth: 1.3,
  borderColor: '#111827',
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
},

checkedBox: {
  borderWidth: 1.5,
  borderColor: '#01D3F8',
  backgroundColor: '#01D3F8',
},

tick: {
  color: '#ffff',
  fontSize: 16,
  fontWeight: 'bold',
},
iconCircle: {
  width: 48,
  height: 48,
  borderRadius: 24,
  marginRight:3,
  backgroundColor: '#F2FCFD',
  justifyContent: 'center', 
  alignItems: 'center', 
},
headerTitle: {
  fontSize: 20,
  fontWeight: '700',
  textAlign: 'center',
  flex: 1,
  color: '#111827',
},
footer: {
  backgroundColor: '#fff',   
  padding: 16,
  borderTopWidth: 1,
  borderTopColor: '#e0e0e0',
  elevation: 10,  
},

footerButton: {
  width: '100%',
  backgroundColor: '#06CFF9',
  paddingVertical: 10,
  borderRadius: 12,
  alignItems: 'center',
},

footerButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '700',
},

})
export default styles
