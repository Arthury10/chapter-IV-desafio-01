import { Grid, Text } from "@chakra-ui/react";
import { Infos, continentInfoType } from "./Infos";

interface ContentProps {
  description: string;
  continentInfos: continentInfoType;
}

export function Content({ description, continentInfos }: ContentProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {description}
      </Text>
      <Infos
        citiesList={continentInfos.citiesList}
        num_countries={continentInfos.num_countries}
        num_languages={continentInfos.num_languages}
        num_cities={continentInfos.num_cities}
      />
    </Grid>
  );
}
