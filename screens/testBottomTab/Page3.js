import React from 'react'
import { StyleSheet, Text, View, Button,TextInput } from 'react-native'

export default function ProfileScreen({ navigation, route }) {
  const [value, onChangeText] = React.useState(route.params&&route.params.headerTitle);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: value === '' ? 'No title' : value,
    });
  }, [navigation, value]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={onChangeText}
        value={value}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
