import React from 'react'
import {StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Home from './src/screens/Home'
import SelectSections from './src/screens/SelectSections'
import TemplateScreen from './src/screens/TemplateScreen'
import GeneratingLoader from './src/components/GeneratingLoader'
import SelectCVScreen from './src/screens/SelectCVScreen'
import PreviewCv from './src/screens/PreviewCv'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
        translucent={false}
      />

      <SafeAreaView style={{ flex: 1 }}>
       {/* <SelectSections/> */}
       <Home/>
       {/* <TemplateScreen/> */}
       {/* <GeneratingLoader/> */}
       {/* <SelectCVScreen/> */}
       {/* <PreviewCv/> */}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
