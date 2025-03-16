import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/create",
        {
          username,
          password
        }
      );
      console.log("User created successfully:", response.data);
    } catch (error:any) {
      console.error("Error creating user:", error.response ? error.response.data : error.message);
    }
  };
  return (
    <SafeAreaView className="h-full w-full bg-white">
      {/* Top Section */}

      {/* Centered Content */}
      <View className="flex-1 justify-center px-4">
        <View className="pb-12">
          <Text className="text-lg font-semibold text-primary-200">Welcome !</Text>
          <View className="mt-8">
            <Text className="text-4xl font-bold text-primary-200">Sign up to create your Account</Text>
            <Text className="text-secondary-400 mt-4 font-medium font-base">Enter your email and password to log in to your account</Text>
          </View>
        </View>

        {/* Google Login Button */}
        <View>
          <TouchableOpacity className="bg-primary-200 rounded-xl  h-[50px] w-full items-center justify-center  px-2">
            <Text className="text-white text-lg font-bold">Sign up with Google</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 border-[0.5px] border-secondary-300"></View>
          <Text className="mx-4 text-black font-medium">or</Text>
          <View className="flex-1 border-[0.5px] border-secondary-300"></View>
        </View>

        {/* Input Fields */}
        <View>
          <View className="mb-8">
            <Text className="text-secondary-400 font-medium  ">Email</Text>
            <TextInput
              className=" rounded-xl px-4 py-3 mt-2 h-[44px] bg-secondary-100"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-8">
            <Text className="text-secondary-400 font-medium ">Username</Text>
            <TextInput
              className=" rounded-xl px-4 py-3 mt-2 h-[44px] bg-secondary-100"
              placeholder="Username"
              autoCapitalize="none"
              autoComplete="username"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View>
            <Text className="text-secondary-400 font-medium ">Password</Text>
            <TextInput
              className=" rounded-xl px-4 py-3 mt-2 h-[44px] bg-secondary-100"
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              autoComplete="password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* Submit Button */}
        <View className="mt-8">
          <TouchableOpacity
            onPress={onSubmit}
            className="bg-yellow-400 rounded-xl h-[50px] w-full items-center justify-center  px-2"
          >
            <Text className="text-white text-lg font-bold">Sign up</Text>
          </TouchableOpacity>
        </View>

        <View className="text-center flex-row justify-center items-center mt-8 gap-1  ">
          <Text className="text-secondary-400 font-medium text-center ">Already have an account?</Text>

          <Pressable
            onPress={() => router.push("./login")}
            className="text-center"
          >
            <Text className="text-center">Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
