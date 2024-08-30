import { useEffect, useState } from "react";
import TourCard from "../../components/cards/TourCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Searchbar from "../../components/searchbar/Searchbar";
import { TourProps } from "../../types/tourProps";
import axios from "axios";

const Home = () => {
  document.title = "Trisog - Home";

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
      <main className="flex flex-col min-w-full h-[100vh]">
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
            <div id="card-section" className="flex h-[7%]">
              {tourdata &&
                tourdata.map((tour: TourProps) => (
                  <TourCard
                    key={tour.id}
                    id={Number(tour.id)}
                    countryId={Number(tour.countryId)}
                    categoryId={Number(tour.categoryId)}
                    city={String(tour.city)}
                    title={String(tour.title)}
                    overview={String(tour.overview)}
                    duration={Number(tour.duration)}
                    price={Number(tour.price)}
                    max_people={Number(tour.max_people)}
                    min_age={Number(tour.min_age)}
                    imageurl={String(tour.imageurl)}
                  />
                ))}
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
