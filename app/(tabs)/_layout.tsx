import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import Colors from '../../constants/Colors'
import { CenterButton } from '../../components/CenterButton'

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name']
    color: string
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Analytics',
                    headerTitle: 'Reports and Analytics',
                    tabBarLabel: 'Reports',
                    tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart" color={color} />,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="transaction"
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate('transaction')
                    },
                })}
                options={{
                    // headerShown: false,
                    tabBarButton: (props) => <CenterButton focused={undefined} {...props} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile Settings',
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                }}
            />
        </Tabs>
    )
}
