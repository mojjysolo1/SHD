import { Stack } from "expo-router"

const StackLayout =()=>{
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown:false,headerTitle:'josh' }}/>
          
        </Stack>
    )
}

export default StackLayout;