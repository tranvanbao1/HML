import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class Contact extends Component {
    render() {
        return (
            <ScrollView style={{ height: '100%', backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <Text style={styles.content}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Healthy Meal Planner</Text> là một ứng dụng giúp mọi người có thể lựa chọn thực đơn cho cá nhân, gia đình
                        hay tổ chức. Lượng thức ăn trong danh mục mang tính dinh dưỡng cao cho người sử dụng. Với mức tiền
                        và số người được đưa ra từ người dùng, hệ thống sẽ cung cấp cho người dùng danh sách thực đơn đầy
                        tính dinh dưỡng, hoặc người dùng có thể trực tiếp chọn thành phần món ăn và hệ thống sẽ giúp người
                        dùng lên danh sách thực đơn cho những thành phần đã chọn. Ngoài tính năng hiển thị cho người dùng
                        những danh sách thực đơn dành cho cá nhân hay gia đình, hệ thống sẽ giúp cho người dùng giải quyết
                        vấn đề tham khảo những món ăn dành cho bữa tiệc với số tiền lớn và rõ ràng về món ăn cho bữa tiệc.
                        Ứng dụng giúp người dùng có nhiều sự lựa chọn về dinh dưỡng cũng như nhiều sự lựa chọn về vấn đề hôm
                        nay nấy gì, ăn gì?
				    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', width: '95%', marginTop: 20 }}>
                        Mọi ý kiến đóng góp cũng như tự vấn dinh dưỡng vui lòng liên hệ.
                    </Text>
                    <Text style={styles.content}>
                        Email: heathymealplanner@gmail.com
                    </Text>
                    <Text style={styles.content}>
                        Số điện thoại: 0909999999
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    content: {
        marginTop: 10,
        fontSize: 16,
        width: '95%'
    },
});