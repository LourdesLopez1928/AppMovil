import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Machines = ({ route }) => {
  const { machines } = route.params;
  console.log('[MACHINE]-> ',machines);
  return (
    <ImageBackground source={require("../../../assets/back.jpg")}>
      <View style={{ alignItems:"center", margin: 20 }}>
        <Image
          source={require("../../../assets/logo.jpeg")}
          style={{ width: 300, height: 80, borderRadius: 20 }}
        />
      </View>

      <ScrollView>
        <View style={{ alignItems: "center" }}>
          {machines.map((data) => {
            const spareParts = data?.diagnostic?.spareParts;
            return (
              <View key={data._id} style={styles.card}>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{ flex: 1.5, marginTop: 10, alignItems: "center" }}
                  >
                    <Text>
                      Equipo: {data?.type} {data?.brand} {data?.model}
                    </Text>
                    <Text>Diagnostico</Text>
                    <View style={styles.cardHeader}>
                      <Text
                        style={{ flex: 1, margin: 10, textAlign: "center" }}
                      >
                        {data?.diagnostic?.notes}
                      </Text>
                      <View style={{ flex: 1 }}>
                        <Image source={{ uri: data?.diagnostic?.image?.uri }} />
                      </View>
                    </View>
                  </View>
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Refacciones
                  </Text>
                  {spareParts.map((res, i) => {
                    return (
                      <View style={styles.cardMin} key={i}>
                        <View style={{ flex: 1, marginLeft: 5 }}>
                          <Text>{res?.brand}</Text>
                          <Text>{res?.notes}</Text>
                          <Text>Cantidad: {res?.quantity}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text>Precio sin Iva: ${res?.unitPrice}</Text>
                          <Text>Total: ${res?.totalPrice}</Text>
                        </View>
                      </View>
                    );
                  })}
                  <View style={{ flex: 1, marginTop: 10 }}>
                    <View style={{ flex: 1.5 }}>
                      <Text>
                        Total refacciones: $
                        {data?.diagnostic?.sparePartsTotalPrice}
                      </Text>
                      <Text>
                        Mano de obra: ${data?.diagnostic?.diagnosticPrice}
                      </Text>
                      <Text>Subtotal: ${data?.diagnostic?.subTotalPrice}</Text>
                      <Text>Iva: ${data?.diagnostic?.taxPrice}</Text>
                      <Text>Total: ${data?.diagnostic?.total}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row", flex: 1}} >

                  <TouchableOpacity
        style={{
          flex: 1,
          width: "80%",
          height: 50,
          marginTop: 20,
          shadowColor: "#000",
          shadowOpacity: 0.8,
          shadowOffset: { width: 5, height: 5 },
          borderRadius: 20,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          margin: 10
        }}
        >
        <Text style={{ fontSize: 30 }}>No autorizar</Text>
      </TouchableOpacity>
                  <TouchableOpacity
        style={{
          flex: 1,
          width: "80%",
          height: 50,
          marginTop: 20,
          shadowColor: "#000",
          shadowOpacity: 0.8,
          shadowOffset: { width: 5, height: 5 },
          borderRadius: 20,
          backgroundColor: "#0EB2FF",
          alignItems: "center",
          justifyContent: "center",
          margin: 10
        }}
        >
        <Text style={{ fontSize: 30 }}>Autorizar</Text>
      </TouchableOpacity>
        </View>
                </View>
              </View>
            );
          })}

        </View>
        <View style={{marginBottom: 100}} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: "90%",
    height: 600,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    flexDirection: "row",
    marginBottom: 50,
  },
  cardMin: {
    flex: 0.8,
    marginTop: 10,
    width: "80%",
    height: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
  cardHeader: {
    flex: 0.7,
    marginTop: 10,
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
});

export default Machines;
