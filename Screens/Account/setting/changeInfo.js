import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
export default class AccountScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Nam', isDateTimePickerVisible: false, date: 'Tháng 3-10-2020' };
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        let format = date.toString().substr(4, 11);
        const months = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12 };
        let m = 0;
        format = format.split(' ').join('-');
        format = format.replace(format.substr(0, 3), 'Tháng ' + months[format.substr(0, 3)]);
        this.setState({ date: format });
        this.hideDateTimePicker();
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.account_container}>
                    <View style={styles.b}>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Thay đổi tên')}>
                                <View style={styles.iconleft}>
                                    <Text style={styles.name_item}>Tên</Text>
                                </View>
                                <Text style={styles.name_item}>Your name</Text>
                                <AntDesign name="right" style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice}>
                                <View style={styles.iconleft}>
                                    <Text style={styles.name_item}>Tên đăng nhập</Text>
                                </View>
                                <Text style={styles.name_item2}>covid19</Text>
                            </TouchableOpacity>
                        </View>

                        <RNPickerSelect
                            onValueChange={value => {
                                this.setState({ value: value });
                            }}
                            items={[
                                { label: 'Nam', value: 'Nam' },
                                { label: 'Nữ', value: 'Nữ' },
                                { label: 'Khác', value: 'Khác' },
                            ]}
                        >
                            <TouchableOpacity style={styles.choices}>
                                <TouchableOpacity style={styles.choice}>
                                    <View style={styles.iconleft}>
                                        <Text style={styles.name_item}>Giới tính</Text>
                                    </View>
                                    <View style={styles.name_item2}>
                                        <Text style={{ fontSize: 20, marginRight: -20 }}>{this.state.value}</Text>
                                    </View>
                                    <AntDesign name="right" style={styles.icon_item} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </RNPickerSelect>

                        <View>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={
                                    this.handleDatePicked
                                }
                                onCancel={this.hideDateTimePicker}
                            />
                            <TouchableOpacity style={styles.choices}>
                                <TouchableOpacity style={styles.choice} onPress={this.showDateTimePicker}>
                                    <View style={styles.iconleft}>
                                        <Text style={styles.name_item}>Ngày sinh</Text>
                                    </View>
                                    <View style={styles.name_item}>
                                        <Text style={{ fontSize: 18 }}>{this.state.date}</Text>
                                    </View>
                                    <AntDesign name="right" style={styles.icon_item} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Yêu cầu mật khẩu')}>
                                <View style={styles.iconleft}>
                                    <Text style={styles.name_item}>Email</Text>
                                </View>
                                <Text style={styles.name_item}>myn****@gmail.com</Text>
                                <AntDesign name="right" style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    account_container: {
        width: '100%',
        height: '100%',
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: 'green',
        marginLeft: 15,
    },
    name: {
        fontSize: 22,
    },
    b: {
        flexDirection: 'column',
    },
    choices: {
        marginTop: 5,
        backgroundColor: '#fff',
    },
    choice: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    iconleft: {
        flexDirection: 'row',
        flex: 2,
    },
    name_item: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 13,
    },
    name_item2: {
        fontSize: 20,
        marginRight: 20,
        marginTop: 15,
    },
    icon_item_left: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 16,
        marginLeft: 15,
        color: 'green',
    },
    icon_item: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 15,
        marginRight: 15,
        color: 'green',
    },
    line: {
        borderWidth: 0.2,
        width: '90%',
        alignItems: 'center',
        marginTop: 15,
        borderColor: 'green',
    },
    btnlogout: {
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    textlogout: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 63,
    },
});