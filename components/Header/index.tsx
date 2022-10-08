import tw from "tailwind-styled-components";
import { Popup } from "../Helpers/Popup";
import { ToolTip } from "../Helpers/Tooltip";
import { ArrowRigthSvg } from "../svg";

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

const SubBar = tw.div<any>`
  flex
  items-center
  justify-between
  w-full
  px-3
  border-t
  h-8
  border-gray-200
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <MenuList>
        <div>menu left</div>
        <div>list view</div>
        <div>board</div>
        <div>box</div>
        <div>calendar</div>
        <div>gantt</div>
        <div>doc</div>
        <div>whiteboard</div>
        <div>+ view</div>
      </MenuList>
      <SubBar>
        <div>search</div>
        <div>filters group</div>
        <Popup>
          <>
            <Popup.Body>
              <div className="?">POPUP</div>
            </Popup.Body>
            <Popup.Content>
              <div className="?">CONTENT</div>
            </Popup.Content>
          </>
        </Popup>
        <ToolTip
          text="Collapse sidebar (q)"
          className="ml-3 flex items-center justify-center"
          toolTipClass=""
        >
          <div className="?">test </div>
        </ToolTip>
      </SubBar>
    </HeaderContainer>
  );
};
