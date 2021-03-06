import { Component } from "./component";

export const Footer: React.VFC = () => {
  const copyright = `\u00a9 ${new Date().getFullYear()} SOMEONE`;

  return <Component copyright={copyright} />;
};
