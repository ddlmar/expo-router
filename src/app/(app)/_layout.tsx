import { Redirect, Stack, Tabs } from "expo-router";
import { Text } from "react-native";

export default function AppLayout() {
  const test = {
    session: true,
    isLoading: false,
  };

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (test.isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!test.session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="stack"
        options={{
          title: "Stack o grande",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
