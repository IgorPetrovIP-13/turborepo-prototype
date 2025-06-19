import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

export const UiButton: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
