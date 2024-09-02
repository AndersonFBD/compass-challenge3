import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FiMapPin, FiShare2, FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { TourProps } from "../../types/tourProps";
import Map from "../../components/tourmap/Map";

const TourDetails = () => {
  //pegar id do card para fazer a requisição

  function getCardId() {
    const id = String(window.location.href).split("/tours/");
    return id[1];
  }

  const Tour_id = getCardId();

  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const [tourdata, setTourData] = useState<TourProps>();
  const [countrydata, setCountryData] = useState<string>();
  const [tourType, setTourType] = useState<string>();
  const [reviewCountInfo, setReviewCountInfo] = useState<object>();
  const [tourlat, settourlat] = useState<number>();
  const [tourlng, settourlng] = useState<number>();

  const getTour = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/tour/${Tour_id}`);
      setTourData(data.tour);
      const cId = data.tour.countryId;
      const tId = data.tour.categoryId;

      const [tourCountry, tourType, reviewResponse] = await axios.all([
        axios.get(`http://localhost:8000/country/${cId}`),
        axios.get(`http://localhost:8000/category/${tId}`),
        axios.get(`http://localhost:8000/reviews-of-tour/${Tour_id}`),
      ]);
      setCountryData(tourCountry.data.name);
      setTourType(tourType.data.name);
      setReviewCountInfo(reviewResponse.data);
      const location = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${data.tour.city}+${tourCountry.data.name}&key=AIzaSyBi_ewIoohQRPME0aKqio1k4qAFyeSkNsw`
      );

      settourlat(location?.data.results[0].geometry.location.lat);
      settourlng(location?.data.results[0].geometry.location.lng);
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
      <main className="flex flex-row w-full justify-between px-32 h-auto">
        <section
          id="tourContainer"
          className="flex flex-col items-center w-[60vw] justify-center"
        >
          <div id="tour-img" className="flex max-h-[60vh] w-full">
            <img
              src={tourdata?.imageurl}
              className="object-cover h-[100%] w-[100%]"
            />
          </div>
          <div
            id="icons-and-location"
            className="my-4 w-[100%] flex flex-row justify-between text-left"
          >
            <div className="flex flex-row justify-between px-4 items-center w-[25%]">
              <FiMapPin size={24} />
              <p className="font-inter text-sm text-[#676D85]">
                {tourdata?.city}, {countrydata}
              </p>
              <p className="font-inter text-sm text-[#EB565A]">View On Map</p>
            </div>
            <div className="flex w-16 mx-4 flex-row items-center justify-between">
              <FiShare2 size={24} />
              <FiHeart size={24} />
            </div>
          </div>
          <div id="Tour-Title" className="w-full border-b-2  py-4 mb-2 flex ">
            <p
              className="text-black w-full text-left px-4
             font-work font-bold text-[32px] h-auto "
            >
              {tourdata?.title}
            </p>
          </div>
          <div
            id="tour-general-info"
            className="flex flex-row
          w-full justify-between px-4 text-left"
          >
            <div className="flex flex-col">
              <p className="text-[#A9AFBB] font-inter text-sm">From</p>
              <p className="font-work font-semibold text-[#FC5056]">
                ${tourdata?.price}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A9AFBB] font-inter text-sm">Duration</p>
              <p className="font-work font-semibold text-black">
                {tourdata?.duration}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A9AFBB] font-inter text-sm">Max People</p>
              <p className="font-work font-semibold text-black">
                {tourdata?.max_people}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A9AFBB] font-inter text-sm">Min Age</p>
              <p className="font-work font-semibold text-black">
                {tourdata?.min_age}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A9AFBB] font-inter text-sm">Tour Type</p>
              <p className="font-work font-semibold text-black">{tourType}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A9AFBB] font-inter text-sm">Reviews</p>
              <div className="flex flex-row w-32 items-center justify-between">
                <FaStar color="#FC5056" size={12} />
                <p className="font-work font-semibold text-black">
                  {Number(reviewCountInfo?.reviewCount) > 0
                    ? String(reviewCountInfo?.avgRate.averageRating)
                    : 0}
                  <span className="font-inter text-sm text-[#A9AFBB]">
                    {" "}
                    ({reviewCountInfo?.reviewCount} reviews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            id="overview"
            className="my-12 flex flex-col w-full px-4 text-left"
          >
            <p className="font-work font-bold text-2xl text-black my-4">
              Overview
            </p>
            <p className="font-inter text-[#676D85]">{tourdata?.overview}</p>
          </div>
          <div
            id="map-area"
            className="w-full text-left flex flex-col justify-between"
          >
            <p className="font-work px-4 font-bold text-2xl">Map</p>
            <div className="w-full my-4 min-h-[400px] mb-16">
              <Map latitude={Number(tourlat)} longitude={Number(tourlng)} />
            </div>
          </div>
        </section>
        <section
          id="bookingMenu"
          className="w-[20vw] px-[1%] bg-[#F7F8FA]  h-[80vh] flex flex-col justify-evenly items-center"
        >
          <div className="w-[90%] border-b border-[#a9afbb] text-left">
            <p className="font-work text-[32px] font-bold">
              ${tourdata?.price}
              <span className="font-inter text-base font-normal">
                {" "}
                / per person
              </span>
            </p>
          </div>
          <div className="w-[90%] text-left">
            <p className="font-work font-semibold text-base">Date</p>
            <input
              type="date"
              name="Date"
              className="border w-full my-2 border-[#a9afbb]"
            />
          </div>
          <div className="w-[90%] text-left">
            <p className="font-work font-semibold text-base">Time</p>
            <input
              type="number"
              min={3}
              name="time"
              className="border w-full my-2 border-[#a9afbb]"
            />
          </div>
          <div className="flex w-[90%] flex-col">
            <p className="font-work font-semibold text-base mb-4 text-left">
              Ticket
            </p>
            <div className="my-1 flex w-[100%] flex-row justify-between">
              <p>Adults (18+ years)</p>
              <div className="flex flex-row w-[120px] justify-between items-center ">
                <button
                  type="button"
                  onClick={() =>
                    setAdultCount(adultCount == 0 ? 0 : adultCount - 1)
                  }
                  className="font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]"
                >
                  -
                </button>
                <div className="flex items-center justify-center font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]">
                  <p>{adultCount}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAdultCount(adultCount + 1)}
                  className="font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="my-1 flex w-[100%] flex-row justify-between">
              <p>Kids (12+ years)</p>
              <div className="flex flex-row w-[120px] justify-between items-center ">
                <button
                  type="button"
                  onClick={() =>
                    setKidsCount(kidsCount == 0 ? 0 : kidsCount - 1)
                  }
                  className="font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]"
                >
                  -
                </button>
                <div className="flex items-center justify-center font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]">
                  <p>{kidsCount}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setKidsCount(kidsCount + 1)}
                  className="font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="my-1 flex w-[100%] flex-row pb-4 justify-between border-b border-[#a9afbb]">
              <p>Children (3+ years)</p>
              <div className="flex flex-row w-[120px] justify-between items-center ">
                <button
                  type="button"
                  onClick={() =>
                    setChildrenCount(childrenCount == 0 ? 0 : childrenCount - 1)
                  }
                  className="font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]"
                >
                  -
                </button>
                <div className="flex items-center justify-center font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]">
                  <p>{childrenCount}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setChildrenCount(childrenCount + 1)}
                  className="font-work font-semibold w-8 h-8 text-center border rounded border-[#a9afbb]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex w-full mt-4 justify-between">
              <p className="font-inter text-sm">total</p>
              <p className="font-work font-bold text-2xl text-[#fc5056]">
                $
                {Number(tourdata?.price) * adultCount +
                  Number(tourdata?.price) * 0.9 * kidsCount +
                  Number(tourdata?.price) * 0.7 * childrenCount}
              </p>
            </div>
            <div className="w-full h-8 mt-4">
              <button
                type="button"
                className="w-full h-8 bg-[#FC5056] rounded-lg text-white font-inter text-center font-medium text-[15px]"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="sticky top-[100vh]">
        <Footer />
      </footer>
    </>
  );
};

export default TourDetails;
