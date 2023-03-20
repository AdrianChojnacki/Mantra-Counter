import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { MantrasTable } from "../src/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mantra Counter</title>
        <meta name="description" content="Application for counting mantras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100%" p={4}>
        <MantrasTable />
      </Box>
    </>
  );
};

export default Home;
