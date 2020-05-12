// A ví dụ thôi nghe =))
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import InputSpinner from 'react-native-input-spinner';
import SnackBar from './SnackBar';

const data = [
    {
        name: 'Thịt heo ',
        image: require('../assets/namkho.jpg'),
        rating: 3,
        price: '120.000đ',
    },
    {
        name: 'Hổ lên mâm cơm',
        image: require('../assets/mitkho.jpg'),
        rating: 5,
        price: '120.000đ',
    },
    {
        name: 'Bún đậu mắm tôm',
        image: require('../assets/hutieu.jpg'),
        rating: 4,
        price: '920.000đ',
    },
    {
        name: 'Bò bít tết ăn lê bò',
        image: require('../assets/cuonlalot.jpg'),
        rating: 2,
        price: '1.200.000đ',
    },
    {
        name: 'Salad dressing',
        image: require('../assets/cuondiep.jpg'),
        rating: 5,
        price: '12.000.000đ',
    },
    {
        name: 'Thịt heo ',
        image: require('../assets/namkho.jpg'),
        rating: 3,
        price: '120.000đ',
    },
    {
        name: 'Hổ lên mâm cơm',
        image: require('../assets/mitkho.jpg'),
        rating: 5,
        price: '120.000đ',
    },
    {
        name: 'Bún đậu mắm tôm',
        image: require('../assets/hutieu.jpg'),
        rating: 4,
        price: '920.000đ',
    },
    {
        name: 'Bò bít tết ăn lê bò',
        image: require('../assets/cuonlalot.jpg'),
        rating: 2,
        price: '1.200.000đ',
    },
    {
        name: 'Salad dressing',
        image: require('../assets/cuondiep.jpg'),
        rating: 5,
        price: '12.000.000đ',
    },
];
export default class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            data_temp: data,
            search: '',
        };
    }

    componentDidMount() {
        // Call API here to get data 
        // có chi e tự xóa mấy cái note của a sau nghe =))
        // Để ý xuống dòng
        // Mỗi phần cách riêng ra, ko thì cứ ghi liền
    }

    DisplaySnackBar = () => {
        this.refs.ReactNativeSnackBar.ShowSnackBarFunction("TỔNG TIỀN");
    };

    _rating(item) {
        let rating = [];
        for (let i = 0; i < item; i++) {
            rating.push(
                <Image
                    source={require('../assets/star.png')}
                    style={{ width: 15, height: 15, marginRight: 3 }}
                    resizeMode="cover"
                />
            );
        }
        return rating;
    }

    renderItem = ({ item }) => {
        return (
            <LinearGradient
                colors={['#009245', '#Bcc631']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.item}
            >
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.price_container}>
                        <View style={styles.price}>
                            <Text style={styles.textPrice}>{item.price}</Text>
                        </View>
                    </View>
                </View>
                <InputSpinner
                    style={styles.inputSpinner}
                    max={5}
                    min={0}
                    step={1}
                    background={'#5FB404'}
                    fontSize={18}
                    color="green"
                    // width={30}
                    // borderRadius={0}
                    textColor="#fff"
                    colorMax={'#f04048'}
                    rounded={false} // Thay doi hinh tron thanh hinh vuong
                    value={this.state.number}
                    onChange={(number) => {
                        this.DisplaySnackBar();
                    }}
                />
            </LinearGradient>
        );
    };

    ItemSeparatorComponent = () => {
        return (
            <View
                style={{
                    height: 10,
                }}
            />
        );
    };

    _search(text) {
        const data = [];
        this.state.data_temp.map(function (value) {
            if (value.name.indexOf(text) > -1) {
                data.push(value);
            }
        });
        this.setState({
            data: data,
            search: text,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatList}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <SnackBar ref="ReactNativeSnackBar" />
            </View>
        );
    }
}

// đồngs này để qua bên Menu.style.js
// rồi export về dungf
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 5,
    },
    flatList: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 10,

    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 10,
        marginTop: 7
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        // alignItems: 'center',
        alignContent: 'center'
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10
    },
    button: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 10,
        top: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    price_container: {
        flexDirection: 'row',
    },
    price: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 30,
    },
    textPrice: {
        color: 'green',
        fontWeight: 'bold',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#f2f2f2',
        marginTop: 10,
    },
    inputSpinner: {
        flex: 1,
        marginTop: 13,
        height: 30,

        alignItems: 'center',


    },
});
