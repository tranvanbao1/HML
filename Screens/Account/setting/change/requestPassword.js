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

export default class RequestPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typing_password: false,
            animation_login: new Animated.Value(width - 40),
            enable: true,
        };
    }

    _foucus(value) {
        if (value == 'email') {
            this.setState({
                typing_password: false,
            });
        } else {
            this.setState({
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
                typing_password: false,
            });
        }, 150);
    }

    render() {
        const width = this.state.animation_login;
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                    console.log('dismissed keyboard');
                }}
            >

                <View style={{ height: '100%', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 17 }}>Nhập mật khẩu</Text>
                    <View style={styles.action}>
                        <TextInput
                            secureTextEntry
                            placeholder="Nhập Mật khẩu..."
                            style={styles.textInput}
                            onFocus={() => this._foucus('password')}
                        />
                        {this.state.typing_password ? this._typing() : null}
                    </View>
                    <TouchableOpacity onPress={() => this._animation(navigate('Thay đổi Email'))}>
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
                                    <Text style={styles.textLogin}>Nhập</Text>
                                ) : (
                                        <Animatable.View animation="bounceIn" delay={50}>
                                            <FontAwesome name="check" color="white" size={20} />
                                        </Animatable.View>
                                    )}
                            </Animated.View>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const width = Dimensions.get('screen').width;

var styles = StyleSheet.create({
    action: {
        margin: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    textInput: {
        flex: 1,
        marginTop: 7,
        paddingBottom: 5,
        color: 'black',
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
});
