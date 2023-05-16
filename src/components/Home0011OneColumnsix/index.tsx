import React from "react";

import { Text } from "components";

type Home0011OneColumnsixProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ six: string; contractroles: string }>;

const Home0011OneColumnsix: React.FC<Home0011OneColumnsixProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-roboto text-blue_600_01 text-left w-auto"
          as="h1"
          variant="h1"
        >
          {props?.six}
        </Text>
        <Text
          className="font-roboto my-0.5 text-black_900 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.contractroles}
        </Text>
      </div>
    </>
  );
};

Home0011OneColumnsix.defaultProps = {
  six: "6",
  contractroles: "Contract Roles",
};

export default Home0011OneColumnsix;
