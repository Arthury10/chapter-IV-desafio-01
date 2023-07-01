import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Container } from "../Container";

import { Navigation, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "swiper/css/effect-fade";
import { api } from "@app/common/services/api";
import { colors } from "@app/common/theme/colors";
import Link from "next/link";

export const Carousel = () => {
  const [continents, setCountinents] = useState([]);

  useEffect(() => {
    api.get("/continents").then((response) => setCountinents(response.data));
  }, []);

  const [next, setNext] = useState<any>();

  return (
    <Container alignItems={"center"} mt={"10"}>
      <Divider w={90} />
      <Box my="10" textAlign={"center"} fontWeight="medium" fontSize="4xl">
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect={"fade"}
        navigation={true}
        onSwiper={(swiper) => setNext(swiper)}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        style={
          {
            maxWidth: "100%",
            color: "black",
            "--swiper-navigation-color": colors.primary,
            "--swiper-pagination-color": colors.primary,
          } as any
        }
      >
        {continents?.map((item) => (
          <SwiperSlide key={item.id + "-" + item.name}>
            <Link href={`/Continent/${item.slug}`}>
              <Flex
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                h="450"
                justifyContent={"center"}
                alignItems="center"
                backgroundImage={item.img}
                cursor={"pointer"}
              >
                <Heading color="light.2">{item.name}</Heading>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
