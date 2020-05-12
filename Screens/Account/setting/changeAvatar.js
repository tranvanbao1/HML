import * as React from 'react';
import { Text, Image, View, StyleSheet, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.image}>
                    {image &&
                        <Image source={{ uri: image }} style={{ width: 198, height: 198, borderRadius: 100, }} />}
                </View>
                <Text style={{ marginTop: 10, fontSize: 20, }}>Your name</Text>
                <View style={{ borderWidth: 1, width: 200, marginTop: 10, }}></View>
                <TouchableOpacity onPress={this._pickImage} style={styles.choose}>
                    <Text style={{ color: '#fff', fontSize: 20, padding: 3, }}>Chọn</Text>
                </TouchableOpacity>

            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Xin lỗi, hình của bạn đã bị lỗi!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'green',
    },
    choose: {
        height: 30,
        borderRadius: 15,
        marginTop: 30,
        backgroundColor: 'green',
        justifyContent: 'center',
        color: '#fff',
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 1,
    }
})