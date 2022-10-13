import tw from "tailwind-styled-components";
import { SubBar } from "./Filtres";
import { Navigation } from "./Navigation";
import { Options } from "./Options";

const HeaderContainer = tw.div<any>`
  flex
  flex-col
  w-full
  align-center
  justify-center
  shadow-md
`;

const MenuList = tw.div<any>`
  flex
  justify-between
  items-center
  px-3
  h-12
`;

export const Header = ({ setShowMenu, showMenu }: any) => {
  return (
    <HeaderContainer>
      <MenuList>
        <Navigation setShowMenu={setShowMenu} showMenu={showMenu} />
        <Options />
      </MenuList>
      <SubBar />
    </HeaderContainer>
  );
};
