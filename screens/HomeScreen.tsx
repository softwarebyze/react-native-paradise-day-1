import Carousel from "@/components/Carousel";
import { FloatingMenu } from "@/components/FloatingMenu";
import { HomeScreenLoader } from "@/components/HomeLoader";
import { SearchBar } from "@/components/SearchBar";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Tile } from "@/components/Tile";
import { assets } from "@/constants/assets";
import { theme } from "@/constants/theme";
import { notImplemented } from "@/utils/notImplemented";
import React, { useEffect, useState } from "react";
import { Linking, StyleSheet, View } from "react-native";

const images = [
  "https://img.freepik.com/free-vector/changing-flat-tire-concept-illustration_114360-22123.jpg",
  "https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9297.jpg",
  "https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-15011.jpg",
];

export type HomeScreenProps = {
  navigateToRides?: () => void;
};

export function HomeScreen(props: HomeScreenProps) {
  const { navigateToRides = notImplemented() } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreenLoader />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Section style={{ marginVertical: theme.space16 }}>
        <SearchBar
          placeholder="Enter pickup point"
          onPress={() => {
            navigateToRides();
          }}
        />
      </Section>
      <SectionHeader title="Suggestions" />
      <Section isRow>
        <Tile title="Ride" image={assets.images.taxiCar} />
        <Tile title="Reserve" image={assets.images.calendar} />
        <Tile title="2-Wheels" image={assets.images.scooter} />
        <Tile title="Teens" image={assets.images.boy} />
      </Section>

      <SectionHeader title="Ways to plan with us" />
      <View style={styles.carouselContainer}>
        {/* TODO(dom-components): Pass data to the dom component */}
        <Carousel
          dom={{
            style: {
              width: "100%",
              maxHeight: 240,
            },
            bounces: false,
            scrollEnabled: false,
          }}
          images={images}
          openBrowser={() => {
            Linking.openURL("https://www.freepik.com");
          }}
          onImageClick={(image) => {
            console.log("image clicked", image);
          }}
        />
      </View>

      <FloatingMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 240,
    paddingHorizontal: theme.space16,
  },
});
