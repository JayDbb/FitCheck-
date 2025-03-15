import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import MasonryList from "@/components/ui/masonry-grid";
import { useBottomTabOverflow } from "@/components/ui/utils/tab-bar-background";


const pins = [
  
    {
      id: "0",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
      title: "notJust Dev Hoodie",
    },
    {
      id: "1",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg",
      title: "Programmer working on laptop computer in office studio",
    },
    {
      id: "2",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg",
      title:
        "computer setup | computer setup idea | black wallpaper #computersetupideas",
    },
    {
      id: "3",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
      title: "",
    },
    {
      id: "4",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
      title: "White Tesla ",
    },
    {
      id: "5",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/5.jpeg",
      title: "Hustle harder",
    },
    {
      id: "6",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/6.jpeg",
      title: "Studio",
    },
    {
      id: "7",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/7.jpeg",
      title: "The Flying tortoise",
    },
    {
      id: "8",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/8.jpeg",
      title:
        "Harley Davidson Sportster Iron 883 Custom ~ Rider & Helmet - ModifiedX",
    },
    {
      id: "9",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/9.jpeg",
      title: "Tesla Cybertruck",
    },

]
const HomeScreen = () => {



  const [refreshing, setRefreshing] = useState(false);
  const paddingBottom = useBottomTabOverflow();

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate data fetching or updating
    setTimeout(() => {
      setRefreshing(false);
      // Here you can update the `pins` state if you want to fetch new data
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1" >
      <MasonryList posts={pins} refreshing={refreshing} onRefresh={onRefresh} />
    </SafeAreaView>
  );
};

export default HomeScreen;
