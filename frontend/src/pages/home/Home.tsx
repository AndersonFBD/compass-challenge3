import { useEffect, useState } from "react";
import TourCard from "../../components/cards/TourCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Searchbar from "../../components/searchbar/Searchbar";
import { TourProps } from "../../types/tourProps";
import { LuPlayCircle } from "react-icons/lu";
import { ImCheckmark2 } from "react-icons/im";

import axios from "axios";

const Home = () => {
  document.title = "Trisog - Home";

  //carousel
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 1,
  //   slidesToScroll: 2,
  // };

  //tour cards
  const [tourdata, setTourData] = useState<TourProps[]>([]);
  const getTour = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tours");
      setTourData(data.tours);
    } catch (e) {
      console.error("Error fetching tours:", e);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  return (
    <>
      <header className="sticky bottom-[100vh]">
        <Header />
      </header>
      <main className="flex flex-col min-w-full">
        <div className="h-auto">
          <section className="flex flex-col">
            <div
              className="flex flex-col items-center justify-center h-[50vh] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/night-travel.webp)",
              }}
            >
              <p className="font-kaushan text-[#FC5056] text-[32px]">
                Save 15% off in Worldwide
              </p>
              <p className="text-white font-bold font-work text-[56px]">
                Travel & Adventures
              </p>
              <p className="font-work font-semibold text-[16px] text-white">
                Find awesome hotel, tour, car and activities in London
              </p>
            </div>
          </section>
          <div className="flex z-10 relative bottom-12">
            <Searchbar />
          </div>
          <section className="flex flex-col items-center justify-center mt-12">
            <div id="title-section" className="flex flex-col items-center">
              <div className="flex flex-row items-baseline">
                <div className="h-2 -z-10 w-[131px] border-t-2 border-[#A9AFBB]"></div>
                <p className="font-kaushan mx-1 z-10 text-[#fc5056] text-[24px] ">
                  Tours
                </p>
                <div className="h-2 -z-10 w-[131px] border-t-2 border-[#A9AFBB]"></div>
              </div>
              <p className="font-work text-[40px] font-bold">
                Most Popular Tours
              </p>
            </div>
            <div className="flex flex-row">
              {/* <Slider {...settings}> */}
              {tourdata &&
                tourdata.map((tour: TourProps) => (
                  <div key={tour.id} className="p-4">
                    <TourCard key={tour.id} {...tour} />
                  </div>
                ))}
              {/* </Slider> */}
            </div>
            <div className="flex flex-row w-[80vw] mx-[10vw] my-32 justify-evenly border-t-2 border-[#A9AFBB] pt-12">
              <p className="font-kaushan text-[40px] text-black">
                120+{" "}
                <span className="font-inter text-[20px]">
                  Total Destination
                </span>
              </p>
              <p className="font-kaushan  text-[40px] text-black">
                500+{" "}
                <span className="font-inter text-[20px]">Travel Packages</span>
              </p>
              <p className="font-kaushan text-[40px] text-black">
                12k+{" "}
                <span className="font-inter text-[20px]">Total Travelers</span>
              </p>
              <p className="font-kaushan text-[40px] text-black">
                7k+{" "}
                <span className="font-inter text-[20px]">Positive Reviews</span>
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center my-12">
            <div id="title-section" className="flex flex-col items-center">
              <div className="flex flex-row items-baseline">
                <div className="h-2 -z-10 w-[131px] border-t-2 border-[#A9AFBB]"></div>
                <p className="font-kaushan mx-1 z-10 text-[#fc5056] text-[24px] ">
                  Destinations
                </p>
                <div className="h-2 -z-10 w-[131px] border-t-2 border-[#A9AFBB]"></div>
              </div>
              <p className="font-work text-[40px] font-bold">
                Top Attractions Destinations
              </p>
            </div>
            <div className="flex justify-evenly h-96 flex-row w-[60%] mx-[10%]">
              <div className="flex flex-col w-[80%] justify-around ">
                <div className="flex flex-row w-full h-[40%] justify-evenly">
                  <div className="relative w-[30%] h-full border border-black overflow-hidden">
                    <img
                      src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/bghome.jpg"
                      alt="beach"
                      className="object-cover h-[100%] w-[100%]"
                    />
                    <div className="absolute text-white bottom-4 left-4 text-left">
                      <p className="font-inter text-sm ">174,688 Travelers</p>
                      <p className="font-kaushan text-xl">United Kingdom</p>
                    </div>
                  </div>
                  <div className="relative w-[30%] h-full overflow-hidden">
                    <img
                      src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/bghome.jpg"
                      alt="beach"
                      className="object-cover h-[100%] w-[100%]"
                    />
                    <div className="absolute text-white bottom-4 left-4 text-left">
                      <p className="font-inter text-sm ">174,688 Travelers</p>
                      <p className="font-kaushan text-xl">United Kingdom</p>
                    </div>
                  </div>
                  <div className="relative w-[30%] h-full overflow-hidden">
                    <img
                      src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/bghome.jpg"
                      alt="beach"
                      className="object-cover h-[100%] w-[100%]"
                    />
                    <div className="absolute text-white bottom-4 left-4 text-left">
                      <p className="font-inter text-sm ">174,688 Travelers</p>
                      <p className="font-kaushan text-xl">United Kingdom</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full h-[40%] justify-around">
                  <div className="relative w-[40%] h-full border border-black overflow-hidden">
                    <img
                      src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/bghome.jpg"
                      alt="beach"
                      className="object-cover h-[100%] w-[100%]"
                    />
                    <div className="absolute text-white bottom-4 left-4 text-left">
                      <p className="font-inter text-sm ">174,688 Travelers</p>
                      <p className="font-kaushan text-xl">United Kingdom</p>
                    </div>
                  </div>
                  <div className="relative w-[50%] h-full border border-black overflow-hidden">
                    <img
                      src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/bghome.jpg"
                      alt="beach"
                      className="object-cover h-[100%] w-[100%]"
                    />
                    <div className="absolute text-white bottom-4 left-4 text-left">
                      <p className="font-inter text-sm ">174,688 Travelers</p>
                      <p className="font-kaushan text-xl">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div className="relative h-[90%] border my-[7%] border-black overflow-hidden">
                  <img
                    src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/bghome.jpg"
                    alt="beach"
                    className="object-cover h-[100%] w-[100%]"
                  />
                  <div className="absolute text-white bottom-4 left-4 text-left">
                    <p className="font-inter text-sm ">174,688 Travelers</p>
                    <p className="font-kaushan text-xl">United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-row items-center justify-center my-12 mx-[10%] min-h-[60vh]">
            <div className="flex flex-row flex-nowrap items-between my-24 relative">
              <div className="relative -z-20 bg-transparent border-none">
                <img
                  src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/watchnow-back-pic.png"
                  alt=""
                />
              </div>
              <div className="relative -z-10 top-28 right-56 bg-transparent border-none">
                <img
                  src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/watchnow-front-pic.png"
                  alt=""
                />
                <div
                  className="relative flex bottom-20  right-8
                 bg-[#FC5056] items-center
                 text-white p-2 z-10
                 w-64 h-16 border-white border-2"
                >
                  <LuPlayCircle size={24} />
                  <p className="font-kaushan text-2xl text-left ml-1">
                    Watch Now
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left mt-8">
              <div className="flex flex-row items-baseline">
                <p className="font-kaushan mx-1 z-10 text-[#fc5056] text-[24px] ">
                  Why Choose Us?
                </p>
                <div className="h-2 ml-5 w-[158px] border-t-2 border-[#A9AFBB]"></div>
              </div>
              <div className="font-work font-bold text-[40px]">
                <p className="w-96">
                  Our Experiences Meet High Quality Standards
                </p>
              </div>
              <div className="font-inter text-base">
                <p className="w-96">
                  Holisticly optimize proactive strategic theme areas rather
                  than effective manufactured products create.
                </p>
              </div>
              <div className="flex flex-row my-2">
                <div className="flex-flex-col justify-between w-[50%]">
                  <div className="flex items-center my-1">
                    <ImCheckmark2 color="#fc5056" size={24} />
                    <p className="ml-2 font-work font-semibold text-base">
                      Cheap Rates
                    </p>
                  </div>
                  <div className="flex items-center my-1">
                    <ImCheckmark2 color="#fc5056" size={24} />
                    <p className="ml-2 font-work font-semibold text-base">
                      Hand-Picked Tour
                    </p>
                  </div>
                </div>
                <div className="flex-flex-col justify-between w-[50%]">
                  <div className="flex items-center my-1">
                    <ImCheckmark2 color="#fc5056" size={24} />
                    <p className="ml-2 font-work font-semibold text-base">
                      Cheap Rates
                    </p>
                  </div>
                  <div className="flex items-center my-1">
                    <ImCheckmark2 color="#fc5056" size={24} />
                    <p className="ml-2 font-work font-semibold text-base">
                      Hand-Picked Tour
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-start mt-4">
                <button className="border-2 border-[#a9afbb] rounded-lg py-3 px-6 font-work font-semibold text-base">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="sticky top-[100vh]">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
