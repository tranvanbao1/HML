import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Image,
    StatusBar,
    ScrollView,
} from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : this.props.navigation.getParam('name', 'default')
        };
    }

    handleIncreaseView = () => {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'default');
        const name = navigation.getParam('name', 'default');
        fetch(`https://hml-project.herokuapp.com/api/dish/${id}`);
    }

    render = () =>
     {
        const { navigate } = this.props.navigation;
        return (
            <ParallaxScrollView
                parallaxHeaderHeight={0}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container} key="1">
                    <StatusBar barStyle="light-content" />
                    <ImageBackground
                        source={require('../assets/header_detail.png')}
                        style={{ flex: 1, alignItems: 'center' }}
                        resizeMode={"stretch"}
                    >
                        <View style={styles.image_container}>
                            <Image
                                source={{ uri: this.props.navigation.state.params.image }}
                                style={styles.image}
                            />
                        </View>
                    </ImageBackground>
                    <ScrollView style={styles.footer}>
                        <Text style={styles.textPrice}>{this.props.navigation.state.params.price}</Text>
                        <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
                        <Text style={styles.textDetail}>Thành phần chính bao gồm:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.textDetail}>{this.props.navigation.state.params.ingredient} và những gia vị có sẵn trong nhà bếp của bạn!</Text>
                            {/* <TouchableOpacity style={styles.btnBuy}>
                                <Text style={{color: 'white'}}>Mua ngay</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.button} onPress={() => { navigate('Hướng dẫn', { name: this.state.name }), this.handleIncreaseView() }}>
                                <Text style={styles.textCook}>NẤU NGAY</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View >
            </ParallaxScrollView>
        )
    }
}


const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        flex: 1,
        paddingHorizontal: 40,
        marginTop: 10,
        marginBottom: 20
    },
    image_container: {
        width: height_image,
        height: height_image,
        marginTop: height_image / 7
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: height_image / 2
    },
    back: {
        position: 'absolute',
        left: 0,
        marginTop: 30,
        marginLeft: 15
    },
    status: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 3,
        borderColor: 'green'
    },
    textPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20
    },
    textName: {
        color: '#3e3c3e',
        fontWeight: 'bold',
        fontSize: 45,
        marginTop: 5
    },
    textDetail: {
        color: 'gray',
        marginTop: 10
    },
    box: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        marginTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'green',
    },
    textCook: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnBuy: {
        backgroundColor: 'green',
        padding: 3,
        borderRadius: 5,
    }
});