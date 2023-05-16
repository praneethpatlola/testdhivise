import React from "react";

import { Img } from "components";

type Home0011OneAvatardefaultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ elipse: string }>;

const Home0011OneAvatardefault: React.FC<Home0011OneAvatardefaultProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.elipse ? (
          <Img
            src={props?.elipse}
            className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
            alt="elipse"
          />
        ) : null}
      </div>
    </>
  );
};

Home0011OneAvatardefault.defaultProps = {};

export default Home0011OneAvatardefault;
