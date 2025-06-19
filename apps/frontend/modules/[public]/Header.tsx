import { FC } from "react";

import { UiButton } from "@repo/ui/UiButton";

export const Header: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-purple-1000">
        <UiButton>Click Me</UiButton>
      </div>
    </>
  );
};
