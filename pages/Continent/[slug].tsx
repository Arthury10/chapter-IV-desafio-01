import { Cities } from "@app/components/Cities";
import { Content } from "@app/components/Content";
import { ContinentBanner } from "@app/components/ContinentBanner";
import { Header } from "@app/components/Header";
import ContinentsData, { Continent } from "@app/common/models/continent";
import { api } from "@app/common/services/api";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { useState } from "react";

type countriesType = {
  name: string;
  img: string;
};

export interface ContinentProps {
  name: string;
  img: string;
  id: string;
  slug: string;
  countries?: countriesType[];
}

interface props {
  props: Continent;
}

export default function Post({ props }: props) {
  const {
    id,
    img,
    name,
    slug,
    countries,
    description,
    num_cities,
    num_countries,
    num_languages,
  } = props || {};

  if (!props) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {name}</title>
      </Head>
      <Header />
      <ContinentBanner name={name} img={img} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content
          description={description}
          continentInfos={{
            num_cities,
            num_countries,
            num_languages,
            citiesList: "citiesList",
          }}
        />
        <Cities country={countries} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get("/continents");
  const continent = response.data.find(
    (item: ContinentProps) => item.slug === slug
  );

  return {
    props: {
      props: continent,
    },
  };
};
