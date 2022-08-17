import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  //https://admin-tool-crm-iota.vercel.app
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const hadlePost = async () => {
    setError("");
    setMessage("");

    if (!email || !password) return setError("Ingresa los datos correctamente");

    const post = {
      email: email,
      password: password,
    };
    const response = await fetch(
      "https://admin-tool-crm-iota.vercel.app/api/customers/auth/login/",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!response.ok) {
      return setError("Ingresa los datos correctamente");
    }
    const data = await response.json();
    // console.log("[LOGIN]->", data);
    setMessage(data);
    navigation.push("HomeScreen", {
      name: data?.user?.name,
      lastname: data?.user?.lastName,
      email: data?.user?.email,
      phone: data?.user?.phone,
      id: data?.user?._id,
      token: data?.session?.token,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{ margin: 20 }}>
            <Image
              source={require("../../../assets/logo.jpeg")}
              style={{ width: 300, height: 80 }}
            />
          </View>
          <View style={{ margin: 20 }}>
            <Text style={styles.text}>
              Ingresa tu correo y contraseña
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: "#0EB2FF",
              width: "auto",
              backgroundColor: "white",
              paddingHorizontal: 5,
            }}
          >
            Correo
          </Text>
          <TextInput
            textContentType="emailAddress"
            style={[styles.customInput, { marginBottom: 10 }]}
            {...email}
            onChangeText={setEmail}
            value={email.toLowerCase()}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
          />
          <Text
            style={{
              fontSize: 18,
              color: "#0EB2FF",
              width: "auto",
              backgroundColor: "white",
              paddingHorizontal: 5,
            }}
          >
            Contraseña
          </Text>
          <TextInput
            style={[styles.customInput, { marginBottom: 10 }]}
            {...password}
            onChangeText={setPassword}
            value={password}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Text>{error}</Text>
          <TouchableOpacity style={styles.login} onPress={hadlePost}>
            <Text style={styles.logintext}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Geeza Pro",
  },
  logintext: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Geeza Pro",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    fontFamily: "Geeza Pro",
    textAlign: "center",
  },
  login: {
    backgroundColor: "#0EB2FF",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "80%", // ancho
    height: 40, // largo
    margin: 20,
  },
  textField: {
    marginBottom: 32,
    width: "80%",
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
    width: "90%",
    paddingHorizontal: 15,
    fontSize: 18,
  },
  terms: {
    marginTop: 50,
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
    marginTop: 5,
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
