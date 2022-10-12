import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState<"full" | "minified" | "hide">(
    "hide"
  );

  return (
    <HomePage>
      <Head>
        <title>ClickupClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <MenuLeft show={showMenu} setShowMenu={setShowMenu} />

        <div id="sidebar"></div>
        <div className="grow">
          <Header setShowMenu={setShowMenu} showMenu={showMenu} />
          <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
        </div>
      </Container>
    </HomePage>
  );
};

export default Home;
