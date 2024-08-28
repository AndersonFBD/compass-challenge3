import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Searchbar from "../../components/searchbar/Searchbar";

const Home = () => {
  document.title = "Trisog - Home";

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
        </div>
      </main>
      <footer className="sticky top-[100vh]">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
