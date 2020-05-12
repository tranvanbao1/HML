import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

var data = [
    {
        name: 'Combo 1 (Thịt heo, Tôm nướng, Bạch tuộc ...)',
        image: require('../../assets/namkho.jpg'),
        rating: 3,
        price: '500.000đ',
        key: 1,
        },
        {
        name: 'Combo 2 (Hàu nướng mỡ hành, Ốc móng tay, Tôm ...)',
        image: require('../../assets/mitkho.jpg'),
        rating: 5,
        price: '550.000đ',
        key: 2,
        },
        {
        name: 'Combo 3 (Thịt heo, Tôm nướng, Bạch tuộc ...)',
        image: require('../../assets/hutieu.jpg'),
        rating: 4,
        price: '500.000đ',
        key: 3,
        },
        {
        name: 'Combo 4 (Thịt heo, Tôm nướng, Bạch tuộc ...)',
        image: require('../../assets/cuonlalot.jpg'),
        rating: 2,
        price: '460.000đ',
        key: 4,
        },
        {
        name: 'Combo 5 (Thịt heo, Tôm nướng, Bạch tuộc ...)',
        image: require('../../assets/cuondiep.jpg'),
        rating: 5,
        price: '400.000đ',
        key: 5,
        },
];
export default class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            data_temp: data,
            search: ''
        };
    }

    _rating(item) {
        let rating = [];
        for (let i = 0; i < item; i++) {
            rating.push(
                <Image
                    source={require('../../assets/star.png')}
                    style={{ width: 15, height: 15, maginRight: 3 }}
                    resizeMode="cover"
                />
            );
        }
        return rating;
    }
    renderItem = ({ item }) => {
        const {navigate} = this.props.navigation
        return (
            <LinearGradient
                colors={['#006245', '#Bcc631']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.item}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigate('Món ăn', {
                            image: item.image,
                            price: item.price,
                            name: item.name
                        })
                    }}>
                    <View style={styles.image_container}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.content}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <View style={styles.price_container}>
                            <View style={styles.price}>
                                <Text style={styles.textPrice}> {item.price}</Text>
                            </View>
                            <View style={styles.rating}>
                                {this._rating(item.rating)}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        );
    };

    ItemSeparatorComponent = () => {
        return (
            <View
                style={{
                    height: 10
                }}
            />
        )
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10,
    },
    flatList: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        borderRadius: 10,
    },
    image_container: {
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: '60%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 10,
        margin: 'auto'
    },
    content: {
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    rating: {
        marginTop: 8,
        marginLeft: 10,
        flexDirection: 'row',
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 34,
        right: 20,
        position: 'absolute'
    },
    price_container: {
        flexDirection: 'row',
        marginTop: 15,
    },
    price: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginLeft: 10,
    },
    textPrice: {
        color: 'green',
        fontWeight: 'bold'
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

});