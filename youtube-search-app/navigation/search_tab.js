import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import VideoList from '../components/video_list';

import VideoDetail from '../components/video_detail';

const Stack = createStackNavigator();

// const TempSearch = (props) => (<Button onPress={() => { props.navigation.navigate('Detail'); }} title="next" />);
// const TempDetail = (props) => (<Button onPress={() => { props.navigation.pop(); }} title="close" />);


const SearchTab = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="Search"
        component={VideoList}
        options={{
            title: 'Youtube Search',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        }}
        />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
}

export default SearchTab;