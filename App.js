import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Detail from './Screens/Menu/Detail';
import DetailSpecial from './Screens/Special/DetailSpecial';
import Ingredient from './Screens_Menu_child/IngredientMenu'
import Food from './Screens/Food/ScreenFood'
import Menu from './Screens/Menu/ScreenMenu'
import Special from './Screens/Special/ScreenSpecial';
import Cart from './Screens/Cart/ScreenCart';

import ScreenAccount from './Screens/Account/ScreenAccount';
import Login from './Screens/Account/ScreenLogin';
import Statistic from './Screens/Account/statistic';

import SignIn from './Page_SingIn_SingUp/SignIn';
import SignUp from './Page_SingIn_SingUp/SignUp';

import Contact from './Screens/Account/contact';
import FeedBack from './Screens/Account/feedBack';
import Setting from './Screens/Account/setting';
import ForgotPassword from './Page_SingIn_SingUp/forgotPassword';
import Tutorial from './Screens_Menu_child/tutorial';
import TutorialFood from './Screens_Food_child/tutorial';
import TutorialSpecial from './Screens_Special_child/tutorial';
import History from './Screens/Account/history';
import TutorialHistory from './Screens/Account/tutorial';
import MenuFood from './Screens/Food/DetailMenu';
import DetailFood from  './Screens/Food/Detail'
//Change
import ChangeName from './Screens/Account/setting/change/changeName';
import ChangeAvatar from './Screens/Account/setting/changeAvatar';
import ChangePassword from './Screens/Account/setting/changePassword';
import ChangeInfo from './Screens/Account/setting/changeInfo';
import RequestPassword from './Screens/Account/setting/change/requestPassword';
import ChangeEmail from './Screens/Account/setting/change/changeEmail';

import { Ionicons } from '@expo/vector-icons';

const tabNavigator = createBottomTabNavigator({
    'Thực đơn': createStackNavigator({
        'Thực đơn': Menu,
        'Món ăn': Detail,
        'Thành phần': Ingredient,
        'Hướng dẫn': Tutorial,       
    }),

    'Thực phẩm': createStackNavigator({
        'Thực phẩm': Food,
        'Danh sách món ăn': MenuFood,
        'Món ăn': DetailFood,
        'Thành phần': Ingredient,
        'Hướng dẫn': TutorialFood,
    }),

    'Đặc biệt': createStackNavigator({
        'Đặc biệt': Special,
        'Món ăn': DetailSpecial,
        'Thành phần': Ingredient,
        'Hướng dẫn': TutorialSpecial,
    }),

    'Đi chợ': createStackNavigator({
        'Đi chợ': Cart,
    }),
    'Đăng nhập': createStackNavigator({
        'Đăng nhập': Login,
        'Tài khoản': ScreenAccount,
        'Đăng nhập tài khoản': SignIn,
        'Đăng ký': SignUp,
        'Thống kê dinh dưỡng': Statistic,
        'Lịch sử': History,
        'Liên hệ': Contact,
        'Góp ý': FeedBack,
        'Thành phần': Ingredient,
        'Hướng dẫn': TutorialHistory, 
        'Quên mật khẩu': ForgotPassword,
        'Cài đặt': Setting,
        'Thay đổi mật khẩu': ChangePassword,
        'Thay đổi ảnh đại diện': ChangeAvatar,
        'Thay đổi tên': ChangeName,
        'Thông tin & liên hệ': ChangeInfo,
        'Yêu cầu mật khẩu': RequestPassword,
        'Thay đổi Email': ChangeEmail,
    }),

},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state
                let IconComponent = Ionicons
                let iconName
                if (routeName === 'Thực đơn') {
                    iconName = focused ? 'ios-book' : 'ios-book'
                    // (routeName === 'Thực phẩm') {
                    //     iconName = focused ? 'ios-list-box' : 'ios-list'
                } else if (routeName === 'Thực phẩm') {
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                } else if (routeName === 'Đặc biệt') {
                    iconName = focused ? 'ios-star-half' : 'ios-star-half'
                } else if (routeName === 'Đi chợ') {
                    iconName = focused ? 'ios-cart' : 'ios-cart'
                } else if (routeName === 'Đăng nhập') {
                    iconName = focused ? 'ios-contact' : 'ios-contact'
                }
                return <IconComponent name={iconName} size={25} color={tintColor}></IconComponent>
            }
        }),

        tabBarOptions: {
            activeTintColor: 'green',
            keyboardHidesTabBar: false,
            tabStyle: {
                backgroundColor: '#fff'
            },

            labelStyle: {
                fontSize: 12,
                paddingBottom: 3,
            }
        }
    }
)



const App = createAppContainer(tabNavigator)
export default App