import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
  FontAwesome,
  FontAwesome6,
  Fontisto,
  Octicons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
const SignUp = () => {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(5), paddingHorizontal: wp(4) }}
        className="flex-1 gap-10"
      >
        <TouchableOpacity
          style={{
            width: hp(6),
            height: hp(6),
          }}
          className=" bg-gray-100 rounded-full items-center justify-center flex-col"
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View className=" gap-2">
          <Text
            style={{ fontSize: hp(4) }}
            className=" text-slate-950 font-normal"
          >
            Let’s <Text className=" font-bold">Sign In</Text> 👇
          </Text>
          <Text style={{ fontSize: hp(1.8) }} className="  text-gray-800">
            quis nostrud exercitation ullamco laboris nisi ut
          </Text>
        </View>
        <View style={{}} className=" gap-5">
          <View
            style={{ height: hp(8), paddingHorizontal: hp(1.5) }}
            className=" bg-gray-100 rounded-2xl flex-row items-center gap-2"
          >
            <FontAwesome6 name="user" size={25} className=" text-slate-950" />
            <TextInput
              className="flex-1 text-slate-950"
              style={{ fontSize: hp(1.9) }}
              placeholder="Enter Your Full name"
              placeholderTextColor={"#A1A5C1"}
            />
          </View>
          <View
            style={{ height: hp(8), paddingHorizontal: hp(1.5) }}
            className=" bg-gray-100 rounded-2xl flex-row items-center gap-2"
          >
            <Fontisto name="email" size={25} className=" text-slate-950" />
            <TextInput
              className="flex-1 text-slate-950"
              style={{ fontSize: hp(1.9) }}
              placeholder="Enter Your Email"
              placeholderTextColor={"#A1A5C1"}
            />
          </View>
          <View
            style={{ height: hp(8), paddingHorizontal: hp(1.5) }}
            className=" bg-gray-100 rounded-2xl flex-row items-center gap-2"
          >
            <Octicons name="lock" size={24} className=" text-slate-950" />
            <TextInput
              className="flex-1 text-slate-950"
              style={{ fontSize: hp(1.9) }}
              placeholder="Enter Your Password"
              placeholderTextColor={"#A1A5C1"}
              secureTextEntry
            />
          </View>
          <View className="flex-row items-center justify-between">
            <TouchableOpacity>
              <Text
                style={{ fontSize: hp(1.9) }}
                className=" text-sky-500  tracking-wide font-semibold"
              >
                Terms of service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ fontSize: hp(1.9) }}
                className="  text-slate-950 tracking-wide font-semibold"
              >
                Show password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Sign in button */}
        <View>
          <TouchableOpacity
            style={{ height: hp(8) }}
            className=" items-center  overflow-hidden rounded-3xl justify-center "
          >
            <LinearGradient
              // Background Linear Gradient
              colors={["#5CADF4", "#2C95F1"]}
              style={{ height: hp(8) }}
              className=" absolute left-0 right-0  top-0"
            />
            <Text
              style={{ fontSize: hp(2) }}
              className=" text-white font-semibold"
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-2">
          <View
            className="flex-1 bg-gray-300"
            style={{ height: hp(0.1) }}
          ></View>
          <Text className=" text-gray-400">OR</Text>
          <View
            className="flex-1 bg-gray-300"
            style={{ height: hp(0.1) }}
          ></View>
        </View>
        {/* Sign in with google or facebook */}
        <View className="flex-row items-center gap-4">
          <TouchableOpacity
            className="items-center flex-1 rounded-3xl justify-center bg-gray-100"
            style={{ height: hp(8) }}
          >
            <FontAwesome name="google" size={27} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center flex-1 rounded-3xl justify-center bg-gray-100"
            style={{ height: hp(8) }}
          >
            <FontAwesome name="facebook" size={27} color="#1278F3" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: hp(2) }} className="flex  items-center">
          <Text
            style={{
              fontSize: hp(1.9),
            }}
          >
            Already have an account?{" "}
            <Link className=" text-sky-600 font-semibold" href={"/signIn"}>
              Login
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
