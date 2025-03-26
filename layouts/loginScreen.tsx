import { View, Text, TextInput  } from "react-native";

export default function LoginScreen() {

    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>login</Text>
          <TextInput placeholder="admin@gmail.com"></TextInput>
          <Text>password</Text>
          <TextInput placeholder="*************" secureTextEntry>   </TextInput>
        </View>
      );
}