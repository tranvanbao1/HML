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

export default class ChangeName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typing_name: false,
            animation_login: new Animated.Value(width - 40),
            enable: true,
        };
    }

    _foucus(value) {
        if (value == 'name') {
            this.setState({
                typing_name: true,
            });
        }
        else {
            this.setState({
                typing_name: false,
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
                typing_name: false,
            });
        }, 150);
    }

    render() {

        const width = this.state.animation_login;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                    console.log('dismissed keyboard');
                }}
            >
                <View style={{ height: '100%', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 17 }}>Nhập tên</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Nhập tên..."
                            style={styles.textInput2}
                            onFocus={() => this._foucus('name')}
                        />
                        {this.state.typing_name ? this._typing() : null}
                    </View>
                    <Text style={{ marginLeft: 10 }}>Dưới 100 ký tự.</Text>

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
                                    <Text style={styles.textLogin}>Sửa</Text>
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
    textInput2: {
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
