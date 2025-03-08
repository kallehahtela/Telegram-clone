// Define global providers

import { Redirect, Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider, { useAuth } from "../providers/AuthProvider";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle={"dark-content"} />
            <AuthProvider>
                <Slot />
            </AuthProvider>
        </GestureHandlerRootView>
    );
}