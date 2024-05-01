import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../component/categories";
import SortCategories from "../component/SortCategories";
import Destination from "../component/Destination";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white pt-10">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6" + topMargin}
      >
        {/* AVATAR */}
        <View className="mx-5 flex-row justify-between items-center mb-10 ">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.jpeg")}
              style={{ height: wp(12), width: wp(12) }}
              className="rounded-full"
            />
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            ></TextInput>
          </View>
        </View>

        {/* CATEGORIES */}
        <View className="mb-4">
          <Categories />
        </View>

        {/* SORT CATEGORIES */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* Destinations */}
        <View>
          <Destination />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
