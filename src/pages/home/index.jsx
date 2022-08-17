import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const HomeScreen = ({ route }) => {
  const { name, email, phone, id, token } = route.params;
  //const [data, setData] = useState([]);
  const navigation = useNavigation();

  const [data, setCustomer] = useState([]);

  useEffect(() => {
    fetch(`https://admin-tool-crm-iota.vercel.app/api/customers/orders/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setCustomer(responseJson.orders);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log("[DATA-HOME]->", data);

  // const data = [
  //   {
  //     _id: "62f9768aac92ad84bd68f7ab",
  //     id: 6,
  //     status: 1,
  //     machines: [
  //       {
  //         diagnostic: {
  //           notes: "Armadura quemada y baleros resecos",
  //           images: [
  //             {
  //               uri: "https://www.digitalocean.com/community/tutorials/how-to-use-aggregations-in-mongodb#step-2-using-the-match-aggregation-stage",
  //               _id: "62f9768aac92ad84bd68f7ad",
  //             },
  //           ],
  //           spareParts: [
  //             {
  //               sku: "000-abcdf-02123",
  //               brand: "DEWALT",
  //               type: "Armadura",
  //               quantity: 1,
  //               notes: "Armadura motor",
  //               unitPrice: 700,
  //               totalPrice: 7000,
  //               _id: "62f9768aac92ad84bd68f7ae",
  //             },
  //             {
  //               sku: "000-abcdf-12345789",
  //               brand: "NKF",
  //               type: "Balero",
  //               quantity: 3,
  //               notes: "Baleros dañados",
  //               unitPrice: 100,
  //               totalPrice: 300,
  //               _id: "62f9768aac92ad84bd68f7af",
  //             },
  //           ],
  //           sparePartsTotalPrice: 1000,
  //           diagnosticPrice: 180,
  //           subTotalPrice: 1180,
  //           taxPrice: 188.8,
  //           total: 1368.8,
  //         },
  //         serialNumber: "#abcd123",
  //         brand: "Dewalt",
  //         model: "DW-60110",
  //         type: "Mini Esmeriladora",
  //         notes: "Sin accesorios",
  //         warranty: false,
  //         technicianId: "62b27aad0754ca3adfd324c1",
  //         _id: "62f9768aac92ad84bd68f7ac",
  //       },
  //       {
  //         "diagnostic": {
  //             "notes": "Armadura quemada y baleros resecos",
  //             "images": [
  //                 {
  //                     "uri": "https://www.digitalocean.com/community/tutorials/how-to-use-aggregations-in-mongodb#step-2-using-the-match-aggregation-stage",
  //                     "_id": "62f9768aac92ad84bd68f7ad"
  //                 }
  //             ],
  //             "spareParts": [
  //                 {
  //                     "sku": "000-abcdf-02123",
  //                     "brand": "DEWALT",
  //                     "type": "Armadura",
  //                     "quantity": 1,
  //                     "notes": "Armadura motor",
  //                     "unitPrice": 700,
  //                     "totalPrice": 7000,
  //                     "_id": "62f9768aac92ad84bd68f7ae"
  //                 },
  //                 {
  //                     "sku": "000-abcdf-12345789",
  //                     "brand": "NKF",
  //                     "type": "Balero",
  //                     "quantity": 3,
  //                     "notes": "Baleros dañados",
  //                     "unitPrice": 100,
  //                     "totalPrice": 300,
  //                     "_id": "62f9768aac92ad84bd68f7af"
  //                 }
  //             ],
  //             "sparePartsTotalPrice": 1000,
  //             "diagnosticPrice": 180,
  //             "subTotalPrice": 1180,
  //             "taxPrice": 188.8,
  //             "total": 1368.8
  //         },
  //         "serialNumber": "#abcd123",
  //         "brand": "Dewalt",
  //         "model": "DW-60110",
  //         "type": "Mini Esmeriladora",
  //         "notes": "Sin accesorios",
  //         "warranty": false,
  //         "technicianId": "62b27aad0754ca3adfd324c1",
  //         "_id": "62f9768aac92ad84bd68f7ac"
  //     }
  //     ],
  //     totalPriceWithTax: 0,
  //     authorizeBy: null,
  //     customerId: "62f1862d933ac4dc9104735f",
  //     registeredId: "62c51b35eaf22a85c841f1ca",
  //     branchId: "62f01534330a92db83c6f021",
  //     createdAt: "2022-08-14T22:26:18.721Z",
  //     updatedAt: "2022-08-14T22:26:18.721Z",
  //     __v: 0,
  //   },
  // ];

  return (
    <>
      <ImageBackground
        source={require("../../../assets/back.jpg")}
        style={{ alignItems: "center", flex: 1 }}
      >
        <View style={{ margin: 120 }}>
          <Image
            source={require("../../../assets/logo.jpeg")}
            style={{ width: 300, height: 80, borderRadius: 20 }}
          />
        </View>
        <TouchableOpacity
          style={styles.profile}
          onPress={() =>
            navigation.navigate("Profle", {
              name: name,
              email: email,
              phone: phone,
              token: token,
            })
          }
        >
          <Text>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          <Text>Cerrar sesión</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 40, textAlign: "center", marginTop: 0 }}>
          Ordenes
        </Text>
        {data.map((res, index) => (
          <TouchableOpacity
            style={styles.card}
            key={index}
            onPress={() =>
              navigation.navigate("Machines", {
                machines: res?.machines,
              })
            }
          >
            <Text style={{ fontSize: 20 }}>Número de orden: {res.id}</Text>
          </TouchableOpacity>
        ))}
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
  profile: {
    left: 20,
    position: "absolute",
    top: 50,
    flex: 0.1,
    width: "30%",
    height: "5%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
  },  
  login: {
    left: 250,
    position: "absolute",
    top: 50,
    flex: 0.1,
    width: "30%",
    height: "5%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
  },
  card: {
    marginTop: 10,
    width: "80%",
    height: "8%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    flexDirection: "row",
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

export default HomeScreen;
