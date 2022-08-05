import React from 'react'
import { View , Text} from 'react-native'
import Card from './app/components/Card'
import ListItem from './app/components/ListItem'
import WelcomScreen from './app/screens/WelcomScreen'

export default function App() {
  return (
    <View style={{backgroundColor: "#f8f4f4", padding: 20, paddingTop: 70}}>
      {/* <Text style={{textAlign: "center", fontSize: 25, marginBottom: 20,textDecorationLine:"underline",}}>Cards in React-Native</Text> */}
      <Card title="IT-Bunker's" subTitle="GCS" image={require("./app/assets/bunker.jpg")} />
      {/* <Card title="Couch in great condition" subTitle="$900" image={require("./app/assets/couch.jpg")} />
      <Card title="Red jacket for sale!" subTitle="$300" image={require("./app/assets/couch.jpg")} /> */}

      <ListItem title="Nabeel Ahmad" subTitle="5 Listings" image={require("./app/assets/nab.jpg")} />

    </View>
  )
}
