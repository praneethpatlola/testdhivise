import React from "react";

import { Text } from "components";

type Home0011OneColumntimeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ time: JSX.Element | string }>;

const Home0011OneColumntime: React.FC<Home0011OneColumntimeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-roboto my-[3px] text-black_900 text-left"
          as="h4"
          variant="h4"
        >
          {props?.time}
        </Text>
      </div>
    </>
  );
};

Home0011OneColumntime.defaultProps = {
  time: (
    <>
      Figma | Product Designer
      <br />
      Interview | Chad Lee
      <br />
      May 4, 2020 @12:30 pm - 1:00 pm
    </>
  ),
};

export default Home0011OneColumntime;
