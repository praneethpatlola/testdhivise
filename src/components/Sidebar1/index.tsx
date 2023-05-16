import React from "react";

import { Img, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-blue_600 flex flex-col items-center justify-start p-[26px] sm:px-5 shadow-bs w-full">
          <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start mb-1 w-full">
            <div className="flex flex-col gap-[29px] items-center justify-start w-[98%] md:w-full">
              <div className="flex flex-col h-[116px] items-center justify-start w-[116px]">
                <Img
                  src="images/img_elipse_116x116.png"
                  className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                  alt="elipse"
                />
              </div>
              <Text
                className="font-roboto text-left text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                John Doe
              </Text>
            </div>
            <div className="flex flex-row gap-[17px] items-center justify-between w-[97%] md:w-full">
              <div className="flex flex-col gap-[37px] items-center justify-start w-[21%]">
                <Img
                  src="images/img_edit.svg"
                  className="h-6 w-6"
                  alt="edit_One"
                />
                <Img src="images/img_home.svg" className="h-6 w-6" alt="home" />
                <Img
                  src="images/img_bookmark.svg"
                  className="h-6 w-6"
                  alt="bookmark"
                />
                <Img
                  src="images/img_share.svg"
                  className="h-6 w-6"
                  alt="share_One"
                />
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
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="font-roboto text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  New Job
                </Text>
                <Text
                  className="font-roboto mt-[41px] text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Archive
                </Text>
                <Text
                  className="font-roboto mt-[42px] text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Bookmark
                </Text>
                <Text
                  className="font-roboto mt-[42px] text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Share
                </Text>
                <Text
                  className="font-roboto mt-11 text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Download
                </Text>
                <Text
                  className="font-roboto mt-10 text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Print
                </Text>
                <Text
                  className="font-roboto mt-[43px] text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Settings
                </Text>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
