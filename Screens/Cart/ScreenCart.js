import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "react-native-gesture-handler";
import Modal from "react-native-modal";
// import * as React from 'react';
import { WebView } from 'react-native-webview';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { withNavigation } from "react-navigation";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      data: [],
      data_temp: [],
      search: "",
      isLoading: true,
      isModalVisible: null,
    };
  }

  toggleModal = (id) => {
    this.setState({
      itemSelected: this.state.dataSource.find((ele) => ele._id == id),
    });
  };

  async componentDidMount() {
    const response = await fetch(
      "https://hml-project.herokuapp.com/api/foods/market?page=1"
    );
    const result = await response.json();
    // console.log(result["data"]);

    this.setState({
      isLoading: false,
      dataSource: result["data"],
    }).catch((error) => {
      console.error("Error!!!");
    });
  }

  _search(text) {
    this.setState({ search: text });
  }

  _filterItems() {
    if (this.state.search)
      return this.state.dataSource.filter((ele) =>
        ele.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    return this.state.dataSource;
  }

  _showPrice = (item) => {
    const word = '.'
    const price = item.price.toString();
    if (price.includes(".")) {
      return(
      <Text> {price}00</Text>
      )
    } else {
      return(
        <Text> {price}.000</Text>
        )
    }
  }

  _renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={["#009245", "#Bcc631"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.item}
      >
        <TouchableOpacity
          key={item._id}
          style={styles.a}
          onPress={() => this.toggleModal(item._id)}
        >
          <View key={item._id} style={styles.items}>
            <View style={styles.choice}>
              <Image style={styles.photo} source={{ uri: item.img }} />
            </View>
            <View style={styles.price_nuti}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.price}>
                <Text style={styles.price2}>Giá: {this._showPrice(item)} VNĐ</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  render() {
    let { isLoading } = this.state;
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.container}>
            <View style={styles.section}>
              <TextInput
                placeholder="Tìm thực phẩm..."
                style={{ flex: 1, marginLeft: 10 }}
                value={this.state.search}
                onChangeText={(text) => this._search(text)}
              />
              <TouchableOpacity onPress={() => this._search("")}>
                <Ionicons name="ios-close" color="gray" size={20} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={this._filterItems()}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
              showsVerticalScrollIndicator={false}
            />
          </View>
          {this.state.itemSelected && (
            <View onPress={this.toggleModal}>
              <Modal
                isVisible={this.state.itemSelected == null ? false : true}
                animationIn={"slideInLeft"}
                animationOut={"slideOutRight"}
              >
                <View style={styles.modal}><WebView source={{ uri: this.state.itemSelected.url }} style={styles.webview} />
                  <View style={styles.backButton} ><Text style={styles.back} onPress={this.toggleModal} >Trở lại</Text></View>
                </View>
              </Modal>
            </View>

          )}
        </View>
      );
    }
  }
}

export default withNavigation(Cart);

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "white",
  },
  items: {
    flexDirection: "row",
    width: "95%",
    marginLeft: "3%",
  },
  choice: {
    width: "32%",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#fff',
    paddingLeft: 3,
    paddingRight: 3,
  },
  choice2: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "green",
  },
  price_nuti: {
    width: "60%",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 25,
  },
  photo: {
    width: 90,
    height: 100,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 3,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5,
    color: "white",
  },
  title_modal: {
    fontSize: 18,
    marginTop: 20,
  },
  price_modal: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
  },
  price: {
    paddingTop: 5,
    marginBottom: 5,
  },
  price2: {
    color: "white",
    fontSize: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 5,
  },
  modal: {
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    // alignItems: 'center'
  },
  backButton: {
    height: 40,
    width: "100%",
    // marginVertical: 5,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: 'green',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  webview: {
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 20,
  },
  back: {
    fontSize: 20,
    color: '#fff',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    // paddingTop: 5,
    lineHeight: 40,
  }
});