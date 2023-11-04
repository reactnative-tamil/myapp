import React from "react";
import { StyleSheet, Text, View } from "react-native";


const App = () => {
  return (
   
    <View style={styles.mainView}>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text for view 1</Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text for view 2</Text>
      </View>
   
    </View>

  );
}

const styles = StyleSheet.create({

  mainView: {
    flex:1,
    paddingTop: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },

  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  },

  basicText: {
    fontSize: 20,
    padding:20,
    color: 'white',
    textAlign: 'center',
  }

})

export default App;


