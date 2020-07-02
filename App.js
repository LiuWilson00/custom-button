import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Slider, CheckBox } from 'react-native-elements';

import CustomButton from './src/components/CustomButton'

export default function App() {
  const [redValue, setRedValue] = useState(0)
  const [greenValue, setGreenValue] = useState(0)
  const [blueValue, setBlueValue] = useState(0)
  const [opacityValue, setOpacityValue] = useState(1)
  const [titleText, setTitleText] = useState('hello')
  const [small, setSmall] = useState(true)
  const [normal, setNormal] = useState(false)
  const [large, setLarge] = useState(false)

  const setSizeFalse = () => {
    setSmall(false)
    setNormal(false)
    setLarge(false)
  }

  const buttonSize = () => {
    if (small) return 'small'
    if (normal) return 'normal'
    if (large) return 'large'
  }

  const sliderWidth = 200

  return (
    <View style={styles.container}>
      <Text>Custom button</Text>
      <TextInput style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }} value={titleText} onChangeText={text => setTitleText(text)}></TextInput>
      <View
        style={{ flexDirection: 'row' }}
      ><CheckBox
          title='small'
          checked={small}
          onPress={() => {
            setSizeFalse()
            setSmall(!small)
          }}
        />
        <CheckBox
          title='normal'
          checked={normal}
          onPress={() => {
            setSizeFalse()
            setNormal(!normal)
          }}
        />
        <CheckBox
          title='large'
          checked={large}
          onPress={() => {
            setSizeFalse()
            setLarge(!large)
          }}
        /></View>


      <View style={{ alignItems: 'stretch', justifyContent: 'center', width: sliderWidth }}>
        <Slider
          value={redValue}
          thumbTintColor={'#e2979c'}
          minimumTrackTintColor={'#bb596b'}
          onValueChange={(value) => { setRedValue(value) }}
        />
        <Text>red: {Math.floor(redValue * 255)}</Text>
      </View>
      <View style={{ alignItems: 'stretch', justifyContent: 'center', width: sliderWidth }}>
        <Slider
          value={greenValue}
          thumbTintColor={'#96bb7c'}
          onValueChange={(value) => { setGreenValue(value) }}
        />
        <Text>green: {Math.floor(greenValue * 255)}</Text>
      </View>
      <View style={{ alignItems: 'stretch', justifyContent: 'center', width: sliderWidth }}>
        <Slider
          value={blueValue}
          thumbTintColor={'#84a9ac'}
          minimumTrackTintColor={'#204051'}
          onValueChange={(value) => { setBlueValue(value) }}
        />
        <Text>blue: {Math.floor(blueValue * 255)}</Text>
      </View>
      <View style={{ alignItems: 'stretch', justifyContent: 'center', width: sliderWidth }}>
        <Slider
          value={opacityValue}
          thumbTintColor={'#393e46'}
          minimumTrackTintColor={'#222831'}
          onValueChange={(value) => { setOpacityValue(value) }}
        />
        <Text>opacity: {Math.round(opacityValue * 100) / 100}</Text>
      </View>
      <StatusBar style="auto" />
      <CustomButton size={buttonSize()} backgroundColor={`rgba(${redValue * 255}, ${greenValue * 255}, ${blueValue * 255}, ${Math.round(opacityValue * 100) / 100})`} color={'white'} title={titleText}></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
