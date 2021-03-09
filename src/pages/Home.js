import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center py-5">
      <div className="w-full bg-white px-5 py-10 md:py-18 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-red-500">
              Contacts
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-20">
              <span className="inline-block w-1 h-1 rounded-full bg-gray-900 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-gray-900 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-gray-900 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-gray-900 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-gray-900 ml-1"></span>
            </div>
          </div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
