import React from "react";

import { Text } from "components";

type Home0011OneDatacardrolesProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ six: string; visualdesigner: string }>;

const Home0011OneDatacardroles: React.FC<Home0011OneDatacardrolesProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-roboto ml-1.5 md:ml-[0] mt-[5px] text-left text-white_A700 w-auto"
          as="h1"
          variant="h1"
        >
          {props?.six}
        </Text>
        <Text
          className="font-roboto ml-1.5 md:ml-[0] mt-1 text-left text-white_A700 w-auto"
          as="h3"
          variant="h3"
        >
          {props?.visualdesigner}
        </Text>
      </div>
    </>
  );
};

Home0011OneDatacardroles.defaultProps = {
  six: "6",
  visualdesigner: "Visual Designer",
};

export default Home0011OneDatacardroles;
