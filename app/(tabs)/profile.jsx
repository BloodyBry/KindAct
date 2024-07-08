import { router }  from "expo-router";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from '../../constants';
import InfoBox from "../../components/InfoBox";
import { signOut } from "../../lib/appwrite";


const Profile = () => {

  const { user, setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };
  return (
    <SafeAreaView>
      <FlatList 
         /*data={[{id: 1}, {id: 2}, {id: 3},]}
         keyExtractor={(item) => item.$id}
         renderItem={({item}) => (
          <Text className="text-3xl font-pbold text-secpurpe">{item.id}</Text>
         )}*/
         ListHeaderComponent={() => (
          <View className="my-7 px-4 space-y-6">
            <View className="flex justify-center items-start flex-row mb-6">
              <View>
                <Text className="text-3xl font-pbold text-secpurpe">Profila Jamila</Text>
              </View>
            </View>
          </View>
          
         )}
         
         ListEmptyComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-[25%]">
            <View className="w-[100px] h-[100px] border-2 border-secpurpe rounded-full flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-full"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-3"
              titleStyles="text-2xl text-black font-pbold"
            />

            <TouchableOpacity
               onPress={logout}
               className="flex flex-row w-full items-center mb-10 bg-lime-500 px-10 py-5 rounded-full justify-center">
                  <Text className="text-2xl font-pbold text-gradL">Logout</Text>
                  <Image
                     source={icons.logout}
                     resizeMode="contain"
                     className="w-6 h-6 ml-2" // Add a margin-left to create some space between the text and the icon
                  />
            </TouchableOpacity>

          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})