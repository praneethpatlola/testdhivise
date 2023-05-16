import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Home0011OneAvatardefault from "components/Home0011OneAvatardefault";
import Home0011OneColumnsix from "components/Home0011OneColumnsix";
import Home0011OneColumntime from "components/Home0011OneColumntime";
import Home0011OneDatacardroles from "components/Home0011OneDatacardroles";
import Sidebar from "components/Sidebar";

const Home0011Page: React.FC = () => {
  const home0011OneColumnsixPropList = [
    { contractroles: "Contract Roles", six: "6" },
    { contractroles: "Full-Time Roles", six: "12" },
    { contractroles: "Total Applications", six: "18" },
  ];

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="flex flex-col md:hidden justify-start md:px-5 w-[84px]" />
        <div className="flex-1 md:h-[1048px] sm:h-[746px] h-[793px] md:px-5 relative w-full">
          <div className="absolute bg-gray_50 flex flex-col inset-x-[0] items-center justify-end mx-auto p-1.5 top-[0] w-full">
            <div className="flex flex-col gap-[18px] items-end justify-start mt-5 w-[95%] md:w-full">
              <div className="flex flex-col gap-[37px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[19px] text-black_900 text-left"
                  as="h1"
                  variant="h1"
                ></Text>
                <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-4/5 md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                        <Text
                          className="mb-[9px] text-black_900 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Application Statistics
                        </Text>
                        <a
                          href="javascript:"
                          className="mt-4 text-gray_500 text-right w-auto"
                        >
                          <Text className="" as="h5" variant="h5">
                            See All
                          </Text>
                        </a>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-1 w-full"
                        orientation="horizontal"
                      >
                        {home0011OneColumnsixPropList.map((props, index) => (
                          <React.Fragment key={`Home0011OneColumnsix${index}`}>
                            <Home0011OneColumnsix
                              className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-[19px] rounded-lg w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[17%] md:w-full">
                    <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                      <div className="flex flex-row items-start justify-between ml-auto w-[95%] md:w-full">
                        <Text
                          className="mb-2.5 text-black_900 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Interviews
                        </Text>
                        <a
                          href="javascript:"
                          className="mt-[17px] text-gray_500 text-right w-auto"
                        >
                          <Text className="" as="h5" variant="h5">
                            See All
                          </Text>
                        </a>
                      </div>
                      <Home0011OneColumntime
                        className="bg-blue_600 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-lg w-full"
                        time={
                          <>
                            Figma | Product Designer
                            <br />
                            Interview | Chad Lee
                            <br />
                            May 4, 2020 @12:30 pm - 1:00 pm
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start w-[17%] md:w-full">
                <Text
                  className="ml-2.5 md:ml-[0] text-black_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  Roles
                </Text>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[167px] text-gray_500 text-right w-auto"
                >
                  <Text className="" as="h5" variant="h5">
                    See All
                  </Text>
                </a>
                <div className="flex flex-col gap-[11px] items-center justify-start mt-0.5 w-full">
                  <Home0011OneDatacardroles
                    className="bg-blue_600 flex flex-col items-start justify-end p-4 rounded-lg w-full"
                    six="6"
                    visualdesigner="Visual Designer"
                  />
                  <Home0011OneDatacardroles
                    className="bg-blue_600 flex flex-col items-start justify-end p-4 rounded-lg w-full"
                    six="4"
                    visualdesigner="Product Designer"
                  />
                  <Home0011OneDatacardroles
                    className="bg-blue_600 flex flex-col items-start justify-end p-4 rounded-lg w-full"
                    six="6"
                    visualdesigner="Interactive Designer"
                  />
                  <Home0011OneDatacardroles
                    className="bg-blue_600 flex flex-col items-start justify-end p-4 rounded-lg w-full"
                    six="2"
                    visualdesigner="UX/ UI Designer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[3%] w-3/4">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
                <Text
                  className="mb-[13px] text-black_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  Status Board
                </Text>
                <div className="flex flex-row gap-[11px] items-center justify-between mt-[15px] w-[15%]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[17px] w-[17px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_edit_gray_500_01.svg"
                    className="h-[17px] w-[17px]"
                    alt="edit_One"
                  />
                  <Img
                    src="images/img_share_gray_500.svg"
                    className="h-[17px] w-[17px]"
                    alt="share_One"
                  />
                  <Img
                    src="images/img_search.svg"
                    className="h-[17px] w-[17px]"
                    alt="search"
                  />
                  <Img
                    src="images/img_trash.svg"
                    className="h-[17px] w-[17px]"
                    alt="trash"
                  />
                </div>
              </div>
              <div className="bg-white_A700 md:h-[342px] sm:h-[430px] h-[469px] mt-1 py-2 relative rounded-lg shadow-bs w-full">
                <div className="absolute bottom-[2%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <List
                    className="flex-col gap-[13px] grid items-center pt-[73px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-[13px]"
                            style={{
                              backgroundImage: "url('images/img_group35.svg')",
                            }}
                          >
                            <Img
                              src="images/img_group35.svg"
                              className="h-[13px] w-[13px]"
                              alt="television"
                            />
                          </div>
                          <div className="h-[37px] md:ml-[0] ml-[18px] relative w-[37px]">
                            <Home0011OneAvatardefault
                              className="bg-gray_200 border border-gray_500_01 border-solid flex h-[37px] items-center justify-center m-auto p-3 rounded-[18px] w-[37px]"
                              elipse="images/img_bookmark_gray_500_01.svg"
                            />
                            <Button
                              className="absolute flex h-[37px] inset-[0] items-center justify-center m-auto w-[37px]"
                              shape="icbRoundedBorder18"
                              size="smIcn"
                              variant="icbOutlineGray50001"
                            >
                              <Img
                                src="images/img_group30.png"
                                className=""
                                alt="groupNineteen"
                              />
                            </Button>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[27px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Booster
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[129px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Product Designer
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[73px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Full time
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[120px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            123456788
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[101px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Applied
                          </Text>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start md:ml-[0] ml-[71px] w-6"
                            style={{
                              backgroundImage: "url('images/img_group34.svg')",
                            }}
                          >
                            <Img
                              src="images/img_group34.svg"
                              className="h-6 w-6"
                              alt="overflowmenu"
                            />
                          </div>
                        </div>
                        <div className="h-px relative w-full">
                          <Line className="bg-gray_400 h-px m-auto w-full" />
                          <Line className="absolute bg-gray_400 h-px inset-[0] justify-center m-auto w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Img
                            src="images/img_group35.svg"
                            className="h-[13px] w-[13px]"
                            alt="television"
                          />
                          <Home0011OneAvatardefault
                            className="bg-white_A700 border border-gray_500_01 border-solid flex h-[37px] items-center justify-center md:ml-[0] ml-[18px] p-[9px] rounded-[18px] w-[37px]"
                            elipse="images/img_group31.png"
                          />
                          <Text
                            className="md:ml-[0] ml-[27px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Apple
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[141px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Visual Designer
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[82px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Full time
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[120px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            123456789
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[101px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Phone Interview
                          </Text>
                          <Img
                            src="images/img_group34.svg"
                            className="h-6 md:ml-[0] ml-[25px] w-6"
                            alt="overflowmenu"
                          />
                        </div>
                        <Line className="bg-gray_400 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Img
                            src="images/img_group35.svg"
                            className="h-[13px] w-[13px]"
                            alt="television"
                          />
                          <Home0011OneAvatardefault
                            className="bg-white_A700 border border-gray_500_01 border-solid flex h-[37px] items-center justify-center md:ml-[0] ml-[18px] p-[7px] rounded-[18px] w-[37px]"
                            elipse="images/img_group32.png"
                          />
                          <Text
                            className="md:ml-[0] ml-[27px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Google
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[133px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Interactive Designer
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[58px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Full time
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[120px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            123456787
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[101px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Zoom Call
                          </Text>
                          <Img
                            src="images/img_group34.svg"
                            className="h-6 md:ml-[0] ml-[57px] w-6"
                            alt="overflowmenu"
                          />
                        </div>
                        <Line className="bg-gray_400 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Img
                            src="images/img_group35.svg"
                            className="h-[13px] w-[13px]"
                            alt="television"
                          />
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start md:ml-[0] ml-[18px] p-2 w-[37px]"
                            style={{
                              backgroundImage: "url('images/img_group37.svg')",
                            }}
                          >
                            <Img
                              src="images/img_image1.png"
                              className="h-[21px] md:h-auto object-cover w-[21px]"
                              alt="imageOne"
                            />
                          </div>
                          <Text
                            className="md:ml-[0] ml-[27px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Instagram
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[117px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Product Designer
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[73px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            12-months
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[108px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            123456786
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[101px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Round 2 Interview
                          </Text>
                          <Img
                            src="images/img_group34.svg"
                            className="h-6 md:ml-[0] ml-[15px] w-6"
                            alt="overflowmenu"
                          />
                        </div>
                        <Line className="bg-gray_400 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Img
                            src="images/img_group35.svg"
                            className="h-[13px] w-[13px]"
                            alt="television"
                          />
                          <Home0011OneAvatardefault
                            className="bg-white_A700 border border-gray_500_01 border-solid flex h-[37px] items-center justify-center md:ml-[0] ml-[18px] p-1.5 rounded-[18px] w-[37px]"
                            elipse="images/img_group33.png"
                          />
                          <Text
                            className="md:ml-[0] ml-[27px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Omada Health
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[95px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            UX/ UI Designer
                          </Text>
                          <Text
                            className="ml-20 md:ml-[0] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Full time
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[120px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            123456785
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[101px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Phone Interview
                          </Text>
                          <Img
                            src="images/img_group34.svg"
                            className="h-6 md:ml-[0] ml-[25px] w-6"
                            alt="overflowmenu"
                          />
                        </div>
                        <Line className="bg-gray_400 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Img
                            src="images/img_group35.svg"
                            className="h-[13px] w-[13px]"
                            alt="television"
                          />
                          <Home0011OneAvatardefault
                            className="bg-white_A700 border border-gray_500_01 border-solid flex h-[37px] items-center justify-center md:ml-[0] ml-[18px] p-1.5 rounded-[18px] w-[37px]"
                            elipse="images/img_group38.png"
                          />
                          <Text
                            className="md:ml-[0] ml-[27px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Salesforce
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[114px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Visual Designer
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[82px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            12-months
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[108px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            123456784
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[101px] text-gray_500 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Zoom Call
                          </Text>
                          <Img
                            src="images/img_group34.svg"
                            className="h-6 md:ml-[0] ml-[57px] w-6"
                            alt="overflowmenu"
                          />
                        </div>
                        <Line className="bg-gray_400 h-px w-full" />
                      </div>
                    </div>
                  </List>
                </div>
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[77%]">
                  <div className="flex flex-col md:gap-10 gap-[397px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-black_900 text-right w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Company
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-1.5 ml-1.5 md:ml-[0] w-[7px]"
                        alt="arrowdown"
                      />
                      <Text
                        className="md:ml-[0] ml-[107px] text-black_900 text-right w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Position
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-1.5 md:ml-[0] ml-[9px] w-[7px]"
                        alt="arrowdown_One"
                      />
                      <Text
                        className="md:ml-[0] ml-[104px] text-black_900 text-right w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Duration
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-1.5 ml-2 md:ml-[0] w-[7px]"
                        alt="arrowdown_Two"
                      />
                      <Text
                        className="md:ml-[0] ml-[105px] text-black_900 text-right w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Job ID#
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-1.5 ml-2 md:ml-[0] w-[7px]"
                        alt="arrowdown_Three"
                      />
                      <Text
                        className="md:ml-[0] ml-[105px] text-black_900 text-right w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Status
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-1.5 ml-2 md:ml-[0] w-[7px]"
                        alt="arrowdown_Four"
                      />
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                      <Text
                        className="text-gray_500 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Company
                      </Text>
                      <Text
                        className="text-gray_500 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Position
                      </Text>
                      <Text
                        className="text-gray_500 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Duration
                      </Text>
                      <Text
                        className="text-gray_500 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Job ID#
                      </Text>
                      <Text
                        className="text-gray_500 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Status
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home0011Page;
