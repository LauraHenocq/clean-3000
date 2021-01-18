import React from 'react'
import { FlatList, Dimensions, StyleSheet, View, StatusBar, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import fonctionnalities from '../fonctionnalities';

export const Home = (props) => {

    const renderFonctionnalities = (item) => {
        return(

            <TouchableOpacity
                style={styles.fonctionnalities}
                onPress={() => props.navigation.navigate(`${item.road}`)}
            >
                <Text style={styles.fonctionnalitiesText}>{item.name}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#3d3d33" />

            <View style={styles.hero}>

                <Image style={ styles.heroImage } source={require("../assets/hero.jpg")}/>
                
                <Text style={styles.heroTitle}>Prestations de nettoyage et d'entretien</Text>

            </View>

            <Text style={styles.whatToDo}>Qu'est-ce que je souhaite faire ?</Text>

            <FlatList
                data={fonctionnalities}
                renderItem={({item}) => renderFonctionnalities(item)}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero:{
    position:"relative"
  },
  heroImage:{
    borderRadius:15,
    borderWidth: 10,
    borderColor: '#fff',
    width: "100%",
    height:vh/3.5
  },
  heroTitle: {
    position:"absolute",
    bottom:12,
    left:20,
    fontSize:20,
    color:"white"
  },
  whatToDo:{
    paddingTop:20,
    textAlign:"center",
    fontSize:20,
    color:"#3d3d33",
    fontWeight:"bold"
  },
  fonctionnalities:{
    flex:1,
    margin:10,
    padding:20,
    height:100,
    backgroundColor:"#dfdfdf",
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    shadowColor: "#3d3d33",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent:"center"
  },
  fonctionnalitiesText:{
    fontSize:20,
    color:'#5cba47',
  }
})
