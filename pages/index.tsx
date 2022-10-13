import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import tw from "tailwind-styled-components";
import { Header } from "../components/Header";
import { Menu, MenuLeft } from "../components/SideMenu";

const Container = tw.div<any>`
  flex
  flex-row
`;

const HomePage = tw.main<any>`
  h-screen
`;

const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState<keyof typeof Menu>("full");

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

          <div className="flex w-full bg-gray-100">
            <div className="w-full">contente</div>
            <div id="assigness" className=""></div>
          </div>

          <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
        </div>
      </Container>
    </HomePage>
  );
};

export default Home;
