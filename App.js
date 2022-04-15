import * as React from 'react';
import { Text, View, StyleSheet ,TextInput ,TouchableOpacity} from 'react-native';
import AppHeader from './components/AssetExample';
import * as Speech from 'expo-speech';

export default class App extends React.Component{

  constructor(){
    super();

    this.state={
      name: ''
    }
  }

  speak=()=>{
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);

    console.log(this.state.name);
  }

  render(){
    return(
      <View>
        <AppHeader/>

        <TextInput
        style={styles.searchBox}
        onChangeText={text => {
            this.setState({ name:text });
          }}
          />

        <TouchableOpacity
        style={styles.goButton}
        onPress={this.speak}>

          <Text
          style={styles.buttonText}>
            Convert to speech
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  searchBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4
  },
  goButton:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
    backgroundColor:'red'
  },
  buttonText:{
    textAlign : 'center',
    color : 'white'
  }
});