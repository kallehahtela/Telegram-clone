// Define global providers

import { Slot, Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
    return (
        <>
            <StatusBar barStyle={"dark-content"} />
            <Slot />
        </>
    );
}