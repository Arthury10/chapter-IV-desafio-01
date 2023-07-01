import { Flex, Image as ChakraImage } from "@chakra-ui/react";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleLoadingPage = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/Home");
  }, [router]);

  useEffect(() => {
    handleLoadingPage();
  }, [handleLoadingPage]);

  return (
    <Flex flex={1}>
      <Head>
        <title>WorldTrip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flex={1} h="100vh" align="center" justifyContent="center">
        <ChakraImage src={"/logo.svg"} width="40%" h="50%" />
      </Flex>
    </Flex>
  );
}
