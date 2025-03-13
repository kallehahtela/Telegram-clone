import { Text } from "react-native";
import { CallContent, StreamCall, StreamVideo, StreamVideoClient, User } from "@stream-io/video-react-native-sdk"

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
const userId = "66d0594e-49f1-4095-95ca-41d89fb23fba";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjZkMDU5NGUtNDlmMS00MDk1LTk1Y2EtNDFkODlmYjIzZmJhIn0.ekAgimvtg4kIz48bzgOyBrNAOV1ZLWRwM0qCGlansi4";
const callId = "my-call-id";
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });


export default function CallScreen() {
    return (
        <StreamVideo client={client}>
            <StreamCall call={call}>
                <CallContent />
            </StreamCall>
        </StreamVideo>
    );
}