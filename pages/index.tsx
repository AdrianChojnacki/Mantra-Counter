import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { MantrasTable } from "../components";
import { getAllMantras } from "../helpers";
import { MantrasProps } from "../typings";

// TODO: any
const Home: NextPage<MantrasProps> = ({ mantras }: any) => {
  return (
    <>
      <Head>
        <title>Mantra Counter</title>
        <meta name="description" content="Application for counting mantras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100%" p={4}>
        <MantrasTable mantras={mantras} />
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mantras = await getAllMantras();

  return {
    props: {
      mantras,
    },
  };
};

export default Home;
