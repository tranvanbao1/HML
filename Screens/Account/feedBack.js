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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Textarea from 'react-native-textarea';
export default class FeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation_login: new Animated.Value(width - 40),
            enable: true,
        };
    }

    _animation() {
        Animated.timing(this.state.animation_login, {
            toValue: 40,
            duration: 250,
        }).start();

        setTimeout(() => {
            this.setState({
                enable: false,
                typing_name: false,
                typing_email: false,
                typing_number: false,
                typing_content: false,
            });
        }, 150);
    }

    render() {
        const width = this.state.animation_login;
        return (
            <ParallaxScrollView backgroundColor="white" contentBackgroundColor="white" parallaxHeaderHeight={0}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
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
                                Họ Tên
							</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder=" Nhập họ tên..."
                                    style={styles.textInput}
                                />
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
                                Email
							</Text>
                            <View style={styles.action}>
                                <TextInput

                                    placeholder=" Nhập Email..."
                                    style={styles.textInput}
                                />
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
                                Số điện thoại
							</Text>
                            <View style={styles.action}>
                                <TextInput

                                    placeholder=" Nhập số điện thoại..."
                                    style={styles.textInput2}
                                />
                            </View>

                            <View style={styles.action2}>
                                <Textarea
                                    placeholder=" Nội dung góp ý..."
                                    style={styles.textInput}
                                />
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
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    action2: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginTop: 5,
        paddingBottom: 5,
        color: 'gray',
        height: 30,
        textAlignVertical: 'top',
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
