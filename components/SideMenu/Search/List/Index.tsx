import { CommandList } from "./Type/Command";
import { ResultList } from "./Type/Result";

export const List = () => {
  return (
    <div className="overflow-y-scroll scrollbar-thin overflow-x-hidden">
      <ResultList />
      <CommandList />
    </div>
  );
};
