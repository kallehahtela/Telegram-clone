import { Link, Redirect, router, Stack } from "expo-router";
import { ChannelList } from "stream-chat-expo";
import { useAuth } from "../../../providers/AuthProvider";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MainTabScreen() {
    const { user } = useAuth();

    return (
        <>
            {/* Delete Later */}
            {/*<Redirect href={"/(home)/call"} />*/}
            <Stack.Screen options={{
                headerRight: () => (
                    <Link href={"/(home)/users"} asChild>
                        <FontAwesome5 
                            style={{ marginHorizontal: 15 }}
                            name="users" 
                            size={22} 
                            color="gray" 
                        />
                    </Link>
                )
            }} />
            <ChannelList 
                filters={{ members: { $in: [user?.id] } }}
                onSelect={(channel) => router.push(`/channel/${channel.cid}`)} 
            />
        </>
    );
}