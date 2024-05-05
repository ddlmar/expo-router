import { router } from "expo-router";
import { Text, View, Pressable } from "react-native";

export default function Stack() {
  return (
    <View>
      <Text>Stack</Text>
      <Pressable onPress={() => router.push("/(app)/stack/two")}>
        <Text>Entrar na stack two</Text>
      </Pressable>
    </View>
  );
}
