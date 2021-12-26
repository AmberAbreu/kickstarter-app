import React, { ReactElement, FC } from "react";

interface Props {
  title: String;
}

const Header: FC<any> = ({ title }): ReactElement => {
  return <div>{`Header`}</div>;
};

export default Header;
