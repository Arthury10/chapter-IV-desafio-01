import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";
import { Country } from "@app/common/models/continent";

interface countrysProps {
  country: Country[];
}

export function Cities({ country }: countrysProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {country?.map((city) => (
          <City
            key={city.name}
            name={city.capital}
            country={city.name}
            flag={city.flag}
            image={city.img}
          />
        ))}
      </Grid>
    </>
  );
}
