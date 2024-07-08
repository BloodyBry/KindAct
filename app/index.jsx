import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

    return (
        <SafeAreaView className="bg-purple-500 h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4 mt-12">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'                        
                    />

                    <Image 
                        source={images.cards}
                        className="max-w-[320px] w-full h-[240px]"
                        resizeMode='contain' 
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilitties with{' '}
                        <Text className="text-secondary-200">KindAct</Text>
                        </Text>

                    </View>

                    <CustomButton 
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"    
                    />
                    <CustomButton 
                        title="test hh"
                        handlePress={() => router.push('/home')}
                        containerStyles="w-full mt-7"    
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
};
export default Welcome;