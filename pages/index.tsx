import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import MantrasList from "../components/MantrasList";
import { getAllMantras } from "../helpers/getAllMatras";

interface Props {
  mantras: object[];
}

const Home: NextPage<Props> = (props: { mantras: object[] }) => {
  return (
    <>
      <Head>
        <title>Mantra Counter</title>
        <meta name="description" content="Application for counting mantras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantrasList mantras={props.mantras} />
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
