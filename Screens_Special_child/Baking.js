import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: data,
            isLoading: true,
            dataSource: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('https://hml-project.herokuapp.com/api/foods/menu?page=1');
        const result = await response.json();
        console.log(result["data"])
        this.setState({
            isLoading: false,
            dataSource: result["data"],
        })
            .catch((error) => {
                console.error('loi')
            })
    }

    _rating(item) {
        let rating = [];
        for (let i = 0; i < item; i++) {
            rating.push(
                <Image
                    source={require('../assets/star.png')}
                    style={{ width: 15, height: 15, maginRight: 3 }}
                    resizeMode="cover"
                />
            );
        }
        return rating;
    }
    renderItem = ({ item }) => {
        if((item.isSpecial === true) && (item.kindOf === 1)) {
            return (
                <LinearGradient
                    colors={['#006245', '#Bcc631']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.item}
                >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.props.navigation.navigate('Món ăn', {
                                image: item.img,
                                price: item.price,
                                name: item.name,
                                key: item?.key
                            })
                        }}>
                        <View style={styles.image_container}>
                            <Image source={{uri: item.img}} style={styles.image} />
                            <View style={styles.content}>
                                <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                            </View>
                            <View style={styles.price_container}>
                                <View style={styles.price}>
                                    <Text style={styles.textPrice}> Giá: {item.price}.000 VNĐ</Text>
                                </View>
                                <View style={styles.rating}>
                                    {/* {this._rating(item.rating)} */}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            );
        }  
    };

    render() {
        let { dataSource, isLoading } = this.state
        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size='large' animating />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.flatList}>
                        <FlatList
                            data={dataSource}
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
        marginBottom: 10,
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
        // flex: 1,
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