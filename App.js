import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}> Sweet Ice</Text>
      </View>
      <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Image source={require("./assets/sorvete.png")} style={styles.menuImage}/>
          </View>
          <View style={styles.menuItem}>
            <Image source={require("./assets/picole.png")} style={styles.menuImage}/>
          </View>
          <View style={styles.menuItem}>
            <Image source={require("./assets/sunday.png")} style={styles.menuImage}/>
          </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.inicialText}>Sorvetes para todos os gostos!</Text>
      </View>
      <SafeAreaView style={styles.products}>
        <ScrollView style={{padding: 20}}> 
          <View style={styles.productItem}>
            <View style={styles.imageBox}>
              <Image source={require("./assets/sorvete.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>CHOCOMENTA</Text>
              <Text>Delicioso sorvete de menta com flocos de chocolate crocante.</Text>
            </View>
          </View>
          <View style={styles.productItem}>
           <View style={styles.imageBox}>
              <Image source={require("./assets/sorvete.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>MORANGO</Text>
              <Text>Delicioso sorvete de morango, cheio de pedaços do morango mais doce.</Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View style={styles.imageBox}>
              <Image source={require("./assets/picole.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>UVA</Text>
              <Text>Delicioso picolé de uva, feito com suco natural da fruta.</Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View style={styles.imageBox}>
              <Image source={require("./assets/sorvete.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>BAUNILHA</Text>
              <Text>Delicioso sorvete de baunilha, feito com favas de baunilha naturais.</Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View style={styles.imageBox}>
              <Image source={require("./assets/picole.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>LIMÃO</Text>
              <Text>Delicioso picolé de limão, feito com suco natural de fruta.</Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View style={styles.imageBox}>
              <Image source={require("./assets/sunday.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>LA TENTACÍON</Text>
              <Text>A combinação perfeita entre sorvete e fondue, tudo de bom.</Text>
            </View>
          </View>
          <View style={styles.productItem}>
            <View style={styles.imageBox}>
              <Image source={require("./assets/sunday.png")} style={styles.image}/>
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>IS THE LOVE</Text>
              <Text>Uma taça repleta de sorvete e muito amor, perfeita para dividir.</Text>
            </View>
          </View>
          <View style={styles.final}>
           <Text style={styles.finalText}>Sweet Ice</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    height: "15%",
    backgroundColor: "#FF84CD",
  },
  title: {
    fontSize: 28,
    fontFamily: "monospace",
    color: "white",
    fontWeight: "bold",
    margin: 20,
  },
  main: {
    height: "100%",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    margin: 15,
  },
  menuItem: {
    borderRadius: 20,
    width: 80,
    height: 80,
    backgroundColor: "#FFB479",
    margin: 15,
    padding: 5,
  },
  products: {
    backgroundColor: "#FF959F",
    width: "100%",
    height: "70%",
  },
  productItem: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: 100,
    margin: 18,
    backgroundColor: "white",
    borderRadius: 7,
    padding: 5,
  }, 
  box: {
    backgroundColor: "#FF959F",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: 60,
    padding: 15,
  },
  final: {
    backgroundColor: "#FF959F",
    width: "100%",
    height: 100,
  },
  finalText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  inicialText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
  menuImage: {
    height: 70,
    width: 70,
  },
  itemBox: {
    width: "70%",
    padding: 5,
  },
  itemTitle: {
    fontSize: 16,
  },
  imageBox: {
    backgroundColor: "#FFE7FF",
    width: "28%",
    height: 90,
  }
});
