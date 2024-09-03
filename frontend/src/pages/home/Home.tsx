import { useEffect, useState } from "react";
import TourCard from "../../components/cards/TourCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Titles from "../../components/mainPage/Titles";
import Searchbar from "../../components/searchbar/Searchbar";
import { TourProps } from "../../types/tourProps";
import { LuPlayCircle } from "react-icons/lu";
import { PiQuotes } from "react-icons/pi";
import { ImCheckmark2 } from "react-icons/im";

import axios from "axios";
import CategoryCard from "../../components/cards/CategoryCard";
import BlogUpdateCard from "../../components/mainPage/BlogUpdateCard";
import TourSlider from "../../components/sliders/TourSlider";
import { SwiperSlide } from "swiper/react";

const Home = () => {
  document.title = "Trisog - Home";

  const settings = {
    spaceBetween: 12,
    slidesPerView: 4,
    navigation: true,
    pagination: true,
  };

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
      <main className="flex flex-col min-w-full h-auto">
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
          <Titles title="Tours" BoldText="Most Popular Tours" />
          <div className="flex flex-row h-[100%] w-[80%] p-24">
            <TourSlider settings={settings}>
              {tourdata &&
                tourdata.map((tour: TourProps) => (
                  <SwiperSlide key={tour.id}>
                    <div key={tour.id} className="p-4">
                      <TourCard {...tour} />
                    </div>
                  </SwiperSlide>
                ))}
            </TourSlider>
          </div>
          <div className="flex flex-row w-[80vw] mx-[10vw] my-32 justify-evenly border-t-2 border-[#A9AFBB] pt-12">
            <p className="font-kaushan text-[40px] text-black">
              120+{" "}
              <span className="font-inter text-[20px]">Total Destination</span>
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
          <Titles
            title="Destinations"
            BoldText="Top Attractions Destinations"
          />
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
                Holisticly optimize proactive strategic theme areas rather than
                effective manufactured products create.
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
              <button className="border-2 border-[#a9afbb] hover:bg-gray-400 rounded-lg py-3 px-6 font-work font-semibold text-base">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center my-12 mx-[10%] min-h-[60vh]">
          <Titles title="Browse By Category" BoldText="Pick a Tour Type" />
          <div
            id="card-section"
            className="my-4 w-[100%] flex flex-row justify-evenly"
          >
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </section>
        <section className="flex bg-[#F7F8FA] items-center align-middle justify-evenly px-[10%]  min-h-[60vh] w-full">
          <div className="flex flex-col w-[50%] items-center justify-center relative">
            <div className="relative z-0 top-16 bg-transparent border-none">
              <img
                src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/testimonials1.png"
                alt=""
              />
            </div>
            <div className="relative z-20  bg-transparent border-none">
              <img
                src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/testimonials3.png"
                alt=""
              />
            </div>
            <div className="relative bottom-16 z-10 bg-transparent border-none">
              <img
                src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/testimonials2.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-[50%] z-10 align-center justify-center">
            <div>
              <Titles title="Testimonials" BoldText="What Travelers Say" />
            </div>
            <div className="text-[#fc5056] flex justify-center my-12">
              <PiQuotes size={32} />
            </div>
            <div className="font-work font-bold text-lg mx-[18%] w-[64%] flex">
              <p>
                “The UI designs he crafted are top-notch, and the design system
                he integrated allows for straight forward fixes and bulk updates
                throughout almost every area of the app.”
              </p>
            </div>
            <div className="font-inter text-[#a9afbb] mt-4">
              <p>-By Molie Rosa, Photographer</p>
            </div>
          </div>
        </section>
        <section className="flex my-32 flex-col items-center align-middle justify-evenly px-[10%]  min-h-[60vh] w-full">
          <div className="mb-24">
            <Titles title="Updates" BoldText="Latest Travel Guide" />
          </div>
          <div className="my-4 flex flex-row w-full justify-around h-52">
            <BlogUpdateCard />
            <BlogUpdateCard />
          </div>
          <div className="flex flex-row w-full justify-around h-52">
            <BlogUpdateCard />
            <BlogUpdateCard />
          </div>
        </section>
      </main>
      <footer className="sticky top-[100vh]">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
