import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
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
      <MantrasTable mantras={mantras} />
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
