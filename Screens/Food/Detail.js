import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

var data = [
        {
            name: 'Nấm xào xả ớt',
            image: require('../../assets/namkho.jpg'),
            price: '50.000đ'
        },
        {
            name: 'Mít xào',
            image: require('../../assets/mitkho.jpg'),
            price: '50.000đ'
        },
        {
            name: 'Hủ tiếu',
            image: require('../../assets/hutieu.jpg'),
            price: '50.000đ'
        },
        {
            name: 'Thịt bò cuốn lá lốt',
            image: require('../../assets/cuonlalot.jpg'),
            price: '50.000đ'
        },
        {
            name: 'Salad cuốn',
            image: require('../../assets/cuondiep.jpg'),
            price: '50.000đ'
        },
    ];
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        };
    }

    renderItem = ({ item }) => {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
                    onPress={() => {
                        navigate('Thành phần', {
                            image: item.image,
                            name: item.name
                        })
                    }}>
                <LinearGradient
                    colors={['#009245', '#Bcc631']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.item}
                >          
                    <View style={styles.image_container}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.textPrice}> {item.price}</Text>
                    </View>
                    <AntDesign name='rightcircle' color='white' size={35} />
                </LinearGradient>
            </TouchableOpacity>
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
export default withNavigation(Detail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flatList: {
        flex: 1,
        margin: 20,
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 20,
    },
    image_container: {
        width: 90,
        height: 90,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 50,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 4,
    },
    textPrice: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 15,
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
    button: {
        width: 40,
        height: 40,
        paddingHorizontal: 6,
        paddingTop: 6,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
// tách qua file riêng
// cùng thư mục 
// Detail > Detail.js (render) + Detail.styles.js (style) + index.js (exportu)
// Best practice là vậy đó
// Phần nào làm nhiệm vụ phần đó
