import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Animated,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typing_name: false,
            typing_email: false,
            typing_number: false,
            typing_content: false,
            animation_login: new Animated.Value(width - 40),
            enable: true,
        };
    }

    _foucus(value) {
        if (value == 'oldpassword') {
            this.setState({
                typing_oldpassword: true,
                typing_password: false,
                typing_repassword: false,
            });
        } else if (value == 'password') {
            this.setState({
                typing_oldpassword: false,
                typing_password: true,
                typing_repassword: false,
            });
        } else {
            this.setState({
                typing_oldpassword: false,
                typing_password: false,
                typing_repassword: true,
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
                typing_oldpassword: false,
                typing_password: false,
                typing_repassword: false,

            });
        }, 150);
    }

    render() {
        const width = this.state.animation_login;
        const { navigate } = this.props.navigation;
        return (
            <ParallaxScrollView backgroundColor="white" contentBackgroundColor="white" parallaxHeaderHeight={0}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                        console.log('dismissed keyboard');
                    }}
                >
                    <View style={styles.container}>
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
                                Mật khẩu cũ
							</Text>
                            <View style={styles.action}>
                                <TextInput
                                    secureTextEntry
                                    placeholder=" Nhập mật khẩu cũ..."
                                    style={styles.textInput}
                                    onFocus={() => this._foucus('oldpassword')}
                                />
                                {this.state.typing_oldpassword ? this._typing() : null}
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
                                Mật Khẩu
							</Text>
                            <View style={styles.action}>
                                <TextInput
                                    secureTextEntry
                                    placeholder=" Nhập mật khẩu..."
                                    style={styles.textInput}
                                    onFocus={() => this._foucus('password')}
                                />
                                {this.state.typing_password ? this._typing() : null}
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
                                Nhập lại mật khẩu
							</Text>
                            <View style={styles.action}>
                                <TextInput
                                    secureTextEntry
                                    placeholder=" Nhập lại mật khẩu..."
                                    style={styles.textInput2}
                                    onFocus={() => this._foucus('repassword')}
                                />
                                {this.state.typing_repassword ? this._typing() : null}
                            </View>
                            <TouchableOpacity onPress={() => this._animation()}>
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
                                            <Text style={styles.textLogin}>Gửi</Text>
                                        ) : (
                                                <Animatable.View animation="bounceIn" delay={50}>
                                                    <FontAwesome name="check" color="white" size={20} />
                                                </Animatable.View>
                                            )}
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', marginTop: 10, }}>
                                <Text
                                    style={{ color: 'blue', justifyContent: 'center' }}
                                    onPress={() => { navigate('Quên mật khẩu') }}
                                >
                                    Quên mật khẩu?
								    </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ParallaxScrollView>
        );
    }
}

const width = Dimensions.get('screen').width;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    footer: {
        flex: 2,
        padding: 20,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    action2: {
        flexDirection: 'row',
        marginTop: 20,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        height: 150,
    },
    textInput: {
        flex: 1,
        marginTop: 5,
        paddingBottom: 5,
        color: 'gray',
        height: 30,
    },
    textInput2: {
        flex: 1,
        marginTop: 7,
        paddingBottom: 5,
        color: 'gray',
        height: 30,
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation: {
        backgroundColor: 'green',
        paddingVertical: 10,
        marginTop: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
});