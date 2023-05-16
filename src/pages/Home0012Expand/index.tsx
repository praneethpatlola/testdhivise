import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Home0011OneAvatardefault from "components/Home0011OneAvatardefault";
import Home0011OneColumnsix from "components/Home0011OneColumnsix";
import Home0011OneColumntime from "components/Home0011OneColumntime";
import Home0011OneDatacardroles from "components/Home0011OneDatacardroles";
import Sidebar1 from "components/Sidebar1";

const Home0012ExpandPage: React.FC = () => {
  const home0011OneColumnsixPropList = [
    { contractroles: "Contract Roles", six: "6" },
    { contractroles: "Full-Time Roles", six: "12" },
    { contractroles: "Total Applications", six: "18" },
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-roboto h-[750px] justify-end mx-auto relative w-full">
        <div className="md:h-[1048px] sm:h-[750px] h-[793px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute md:h-[1048px] sm:h-[746px] h-[793px] inset-y-[0] my-auto right-[0] w-[94%] md:w-full">
            <div className="absolute bg-gray_50 flex flex-col inset-x-[0] items-end justify-end mx-auto p-1.5 top-[0] w-full">
              <div className="flex flex-col gap-[18px] items-end justify-start mr-6 mt-5 w-[89%] md:w-full">
                <div className="flex flex-col gap-[37px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[19px] text-black_900 text-left"
                    as="h1"
                    variant="h1"
                  ></Text>
                  <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[86%] md:w-full">
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
                            <React.Fragment
                              key={`Home0011OneColumnsix${index}`}
                            >
                              <Home0011OneColumnsix
                                className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-[19px] rounded-lg w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[12%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-between ml-auto w-[96%] md:w-full">
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
                          className="bg-blue_600 flex flex-col items-end justify-start p-[7px] rounded-lg w-full"
                          time={
                            <>
                              Figma | Produ...
                              <br />
                              Phone interview with C...
                              <br />
                              May 4, 2020 @12:30 ...
                            </>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start w-[12%] md:w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-black_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Roles
                  </Text>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[90px] text-gray_500 text-right w-auto"
                  >
                    <Text className="" as="h5" variant="h5">
                      See All
                    </Text>
                  </a>
                  <div className="flex flex-col gap-[11px] items-center justify-start mt-0.5 w-full">
                    <Home0011OneDatacardroles
                      className="bg-blue_600 flex flex-col items-start justify-center p-3.5 rounded-lg w-full"
                      six="6"
                      visualdesigner="Visual Designer"
                    />
                    <Home0011OneDatacardroles
                      className="bg-blue_600 flex flex-col items-start justify-center p-1.5 rounded-lg w-full"
                      six="4"
                      visualdesigner="Product Designer"
                    />
                    <Home0011OneDatacardroles
                      className="bg-blue_600 flex flex-col items-start justify-center p-[9px] rounded-lg w-full"
                      six="6"
                      visualdesigner="Interactive Des..."
                    />
                    <Home0011OneDatacardroles
                      className="bg-blue_600 flex flex-col items-start justify-center p-3.5 rounded-lg w-full"
                      six="2"
                      visualdesigner="UX/ UI Designer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[10%] w-3/4">
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
                      alt="edit"
                    />
                    <Img
                      src="images/img_share_gray_500.svg"
                      className="h-[17px] w-[17px]"
                      alt="share"
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
                                backgroundImage:
                                  "url('images/img_group35.svg')",
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
                                  alt="groupThree"
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
                                backgroundImage:
                                  "url('images/img_group34.svg')",
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
                                backgroundImage:
                                  "url('images/img_group37.svg')",
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
          <Sidebar1 className="absolute flex flex-col md:hidden justify-start left-[0] top-[0] w-[13%]" />
          <div className="absolute bg-black_900_b2 h-[750px] inset-x-[0] mx-auto top-[0] w-full"></div>
        </div>
        <div className="absolute bg-gray_100 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2 md:px-5 w-[58%]">
          <div className="flex flex-col items-start justify-start mb-[89px] w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between ml-auto w-[94%] md:w-full">
              <Text
                className="mt-[13px] text-black_900 text-left w-auto"
                as="h2"
                variant="h2"
              >
                NEW ROLE
              </Text>
              <Img
                src="images/img_close.svg"
                className="h-[26px] mb-[5px] w-[26px]"
                alt="close"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-11 w-full">
              <div className="flex md:flex-1 flex-col gap-[23px] items-end justify-start w-3/4 md:w-full">
                <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-black_900 text-left w-auto"
                      as="h2"
                      variant="h2"
                    >
                      Company
                    </Text>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                      name="groupTen"
                      placeholder="Arm Treasure Data"
                      size="md"
                      variant="FillBluegray50"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[23px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-black_900 text-left w-auto"
                      as="h2"
                      variant="h2"
                    >
                      Position
                    </Text>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                      name="groupSeven"
                      placeholder="Product Designer"
                      size="md"
                      variant="FillBluegray50"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[13px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-black_900 text-left w-auto"
                      as="h2"
                      variant="h2"
                    >
                      Duration
                    </Text>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                      name="groupEight"
                      placeholder="Fulltime"
                      size="md"
                      variant="FillBluegray50"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-3.5 w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-black_900 text-left w-auto"
                      as="h2"
                      variant="h2"
                    >
                      Job ID#
                    </Text>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                      type="number"
                      name="groupNine"
                      placeholder="444332115"
                      size="md"
                      variant="FillBluegray50"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[50px] text-black_900 text-left w-auto"
                      as="h2"
                      variant="h2"
                    >
                      Activity
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
                      <Home0011OneAvatardefault
                        className="flex sm:flex-1 flex-col items-center justify-start w-auto sm:w-full"
                        elipse="images/img_elipse_33x35.png"
                      />
                      <Input
                        wrapClassName="sm:flex-1 w-auto sm:w-full"
                        className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-sm w-full"
                        name="groupEleven"
                        placeholder="Write a comment..."
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  ADD TO ROLE
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-3.5 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Members
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-1 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Labels
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-1.5 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Checklist
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-2 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Due Date
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-2 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Attachment
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-[5px] pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Logo
                </Text>
                <Text
                  className="mt-3 text-black_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  ACTIONS
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-3.5 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Move
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-1 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Copy
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-1.5 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Make Template
                </Text>
                <Text
                  className="bg-blue_gray_50 h-[34px] mt-2 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                  as="h4"
                  variant="h4"
                >
                  Watch
                </Text>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between ml-auto mt-2 w-[94%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[113px] text-base text-center text-white_A700 w-auto"
                size="sm"
                variant="FillBlue600"
              >
                Submit
              </Button>
              <Text
                className="bg-blue_gray_50 h-[34px] mb-1 pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
                as="h4"
                variant="h4"
              >
                Archive
              </Text>
            </div>
            <Text
              className="bg-blue_gray_50 h-[34px] md:ml-[0] ml-[577px] pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-blue_gray_700 text-left w-[168px]"
              as="h4"
              variant="h4"
            >
              Share
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home0012ExpandPage;
