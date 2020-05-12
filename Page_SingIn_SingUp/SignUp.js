import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  // Button,
} from "react-native";
import { TypingAnimation } from "react-native-typing-animation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Axios from "react-native-axios";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing_email: false,
      typing_password: false,
      animation_login: new Animated.Value(width - 40),
      enable: true,
    };
  }

  getRemoteData = () => {
    let username = this.state.username;
    let password = this.state.password;
    Axios.post(
      `http://hml-project.herokuapp.com/api/user/register?username=${username}&password=${password}`
    )
      .then((res) => {
        // var { navigate } =this.props.navigation;
        if (res.data.success == true) {
          this.props.navigation.navigate('Đăng nhập');
          this._showAlert();
        } else {
          Alert.alert("Tài khoản đã tồn tại!");
        }
      })
      .catch((err) => console.log("loi", err));
  };

  _showAlert = () => {
    Alert.alert(
      "Thông báo",
      "Đăng ký thành công!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  _foucus(value) {
    if (value == "email") {
      this.setState({
        typing_email: true,
        typing_password: false,
      });
    } else {
      this.setState({
        typing_email: false,
        typing_password: true,
      });
    }
  }

  _typing() {
    return <TypingAnimation dotColor="green" style={{ marginRight: 25 }} />;
  }

  _animation() {
    Animated.timing(this.state.animation_login, {
      toValue: 40,
      duration: 250,
    }).start();

    setTimeout(() => {
      this.setState({
        enable: false,
        typing_email: false,
        typing_password: false,
      });
    }, 150);
  }

  render() {
    const width = this.state.animation_login;
    return (
      <ImageBackground
        source={require("../assets/bg-account.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <ParallaxScrollView
          backgroundColor="white"
          contentBackgroundColor="white"
          parallaxHeaderHeight={0}
          showsVerticalScrollIndicator={false}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              console.log("dismissed keyboard");
            }}
          >
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />
              <ImageBackground
                source={require("../assets/logo3.png")}
                style={{ width: "100%", height: 150 }}
              ></ImageBackground>
              <View style={styles.footer}>
                <Text
                  style={[
                    styles.title,
                    {
                      marginTop: 10,
                      fontSize: 18,
                    },
                  ]}
                >
                  Tên tài khoản
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Nhập tên tài khoản..."
                    style={styles.textInput}
                    onFocus={() => this._foucus("email")}
                    onChange={(input) =>
                      this.setState({ username: input.nativeEvent.text })
                    }
                  />
                  {this.state.typing_email ? this._typing() : null}
                </View>

                <Text
                  style={[
                    styles.title,
                    {
                      marginTop: 20,
                      fontSize: 18,
                    },
                  ]}
                >
                  Mật khẩu
                </Text>
                <View style={styles.action}>
                  <TextInput
                    secureTextEntry
                    placeholder="Nhập Mật khẩu..."
                    style={styles.textInput}
                    onFocus={() => this._foucus("password")}
                    onChange={(input) =>
                      this.setState({ password: input.nativeEvent.text })
                    }
                  />
                  {this.state.typing_password ? this._typing() : null}
                </View>
                {/* <Text
                  style={[
                    styles.title,
                    {
                      marginTop: 20,
                      fontSize: 18,
                    },
                  ]}
                >
                  Nhập lại mật khẩu
                </Text> */}
                {/* <View style={styles.action}>
                  <TextInput
                    secureTextEntry
                    placeholder="Nhập lại Mật khẩu..."
                    style={styles.textInput}
                    onFocus={() => this._foucus("password")}
                  />
                  {this.state.typing_password ? this._typing() : null}
                </View> */}

                <TouchableOpacity onPress={() => this.getRemoteData()}>
                  <View style={styles.button_container}>
                    <Animated.View
                      style={[
                        styles.animation,
                        {
                          width,
                        },
                      ]}
                    >
                      {this.state.enable ? (
                        <Text style={styles.textLogin}>Đăng Ký</Text>
                      ) : (
                        <Animatable.View animation="bounceIn" delay={50}>
                          <FontAwesome name="check" color="white" size={20} />
                        </Animatable.View>
                      )}
                    </Animated.View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ParallaxScrollView>
      </ImageBackground>
    );
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 2,
    padding: 20,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: "gray",
    height: 30,
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: "green",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpOther: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
  },
  other: {
    justifyContent: "center",
    alignItems: "center",
  },
  signinFB: {
    backgroundColor: "#2E64FE",
    padding: 10,
    width: 280,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
  },
  signinGM: {
    backgroundColor: "#DF3A01",
    padding: 10,
    width: 280,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
  },
  textlog: {
    fontSize: 18,
    color: "#fff",
  },
});