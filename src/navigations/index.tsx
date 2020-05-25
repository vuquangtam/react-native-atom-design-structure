import * as React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';

class MyCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ]
    }
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50, }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </SafeAreaView>
    );
  }
}

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 1</Text>
      <Button title="Go to Screen2" onPress={() => navigation.navigate('Screen2')}></Button>
      <MyCarousel></MyCarousel>
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Button title="Go to Screen1" onPress={() => navigation.navigate('Screen1')}></Button>
    </View>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
