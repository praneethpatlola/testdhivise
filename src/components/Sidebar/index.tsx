import React from "react";

import { Img, Text } from "components";

type SidebarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-blue_600 flex flex-col md:gap-10 gap-[195px] items-center justify-end p-[11px] shadow-bs w-full">
          <div className="flex flex-col gap-[9px] items-center justify-start mt-[35px] w-[99%] md:w-full">
            <div className="flex flex-col h-[61px] items-center justify-start w-[61px]">
              <Img
                src="images/img_elipse.png"
                className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                alt="elipse"
              />
            </div>
            <Text
              className="font-roboto h-[19px] text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              JB
            </Text>
          </div>
          <div className="flex flex-col gap-[37px] items-center justify-start mb-[19px] w-[39%] md:w-full">
            <Img src="images/img_edit.svg" className="h-6 w-6" alt="edit" />
            <Img src="images/img_home.svg" className="h-6 w-6" alt="home" />
            <Img
              src="images/img_bookmark.svg"
              className="h-6 w-6"
              alt="bookmark"
            />
            <Img src="images/img_share.svg" className="h-6 w-6" alt="share" />
            <Img
              src="images/img_download.svg"
              className="h-6 w-6"
              alt="download"
            />
            <Img
              src="images/img_printer.svg"
              className="h-6 w-6"
              alt="printer"
            />
            <Img
              src="images/img_settings.svg"
              className="h-6 w-6"
              alt="settings"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
