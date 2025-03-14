import { ActivityIndicator, Text } from "react-native";
import { Call, CallContent, CallingState, RingingCallContent, StreamCall, useCalls, useStreamVideoClient } from "@stream-io/video-react-native-sdk"
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function CallScreen() {
    const { id } = useLocalSearchParams<{ id: string}>();
    const calls = useCalls().filter(
        (c) => c.state.callingState === CallingState.RINGING,
    );
    const call = calls[0];

{/*    const [call, setCall] = useState<Call>();

    const client = useStreamVideoClient();
    
    useEffect(() => {
        const fetchCall = async () => {
            const call = client.call("default", id);            
            await call.get();
            setCall(call);
        }
        fetchCall();
        return () => {
            if (call) {
                call.leave();
            }
        };
    }, [id]);*/}

    if (!call) {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.push("/");
        }
        return null;
    }

    return (
        <StreamCall call={call}>
            <RingingCallContent />
        </StreamCall>
    );
}