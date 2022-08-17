import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Linking,
} from "react-native";
import React from "react";

const Profile = ({ route }) => {
  const { name, email, phone, token } = route.params;
  // console.log(name);

  return (
    <>
      <ImageBackground
        source={require("../../../assets/back.jpg")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          source={require("../../../assets/perfil.jpg")}
          style={styles.img}
        />
        <Text
          style={{
            fontSize: 25,
            color: "#0EB2FF",
            width: "auto",
            paddingHorizontal: 5,
          }}
        >
          Nombre
        </Text>
        <TextInput
          textContentType="emailAddress"
          style={[styles.customInput, { marginBottom: 10 }]}
          value={name}
        />
        <Text
          style={{
            fontSize: 25,
            color: "#0EB2FF",
            width: "auto",
            paddingHorizontal: 5,
          }}
        >
          Email
        </Text>
        <TextInput
          textContentType="emailAddress"
          style={[styles.customInput, { marginBottom: 10 }]}
          value={email}
        />
        <Text
          style={{
            fontSize: 25,
            color: "#0EB2FF",
            width: "auto",
            paddingHorizontal: 5,
          }}
        >
          Número
        </Text>
        <TextInput
          textContentType="emailAddress"
          style={[styles.customInput, { marginBottom: 10 }]}
          value={phone}
        />
        <TouchableOpacity
          style={{
            width: "80%",
            height: 70,
            marginTop: 20,
            shadowColor: "#000",
            shadowOpacity: 0.8,
            shadowOffset: { width: 5, height: 5 },
            borderRadius: 20,
            backgroundColor: "#0EB2FF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Actualizar</Text>
        </TouchableOpacity>

        <Text
          style={styles.terms}
          onPress={() =>
            Linking.openURL(
              "https://versel.s3.us-east-2.amazonaws.com/documents/T%C3%89RMINOS+Y+CONDICIONES.pdf"
            )
          }
        >
          Términos y condiciones
        </Text>
        <Text
          style={styles.priv}
          onPress={() =>
            Linking.openURL(
              "https://versel.s3.us-east-2.amazonaws.com/documents/AVISO+DE+PRIVACIDAD+PROVEEDORES.pdf"
            )
          }
        >
          Aviso de privacidad
        </Text>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 5,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 99,
    marginTop: 50,
    marginBottom: 20,
  },
  customInput: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#0EB2FF",
    borderWidth: 2,
    height: 50,
    width: "70%",
    paddingHorizontal: 15,
    fontSize: 18,
  },
  terms: {
    marginTop: 20,
    width: "25%",
    height: "8%",
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
  priv: {
 
    width: "30%",
    height: "10%",
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
});

export default Profile;
