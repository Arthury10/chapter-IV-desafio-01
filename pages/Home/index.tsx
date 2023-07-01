import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "@app/components/Header";
import { BannerHome } from "@app/components/BannerHome";
import { TravelTypes } from "@app/components/TravelTypes";
import { Carousel } from "@app/components/Carousel";

const Home = () => {
  return (
    <Flex bg="white" direction="column">
      <Header />
      <BannerHome />
      <TravelTypes />
      <Carousel />
    </Flex>
  );
};
export default Home;
