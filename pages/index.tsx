import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import tw from "tailwind-styled-components";
import { Header } from "../components/Header";
import { MenuLeft } from "../components/SideMenu";

const Container = tw.div<any>`
  flex
  flex-row
`;

const HomePage = tw.main<any>`
  h-screen
`;

const Home: NextPage = () => {
  return (
    <HomePage>
      <Head>
        <title>ClickupClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <MenuLeft />
        <div className="grow">
          <Header />
          <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
        </div>
      </Container>
    </HomePage>
  );
};

export default Home;
