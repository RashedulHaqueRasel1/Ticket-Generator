import Header from "./Header/Header";

const Home = () => {
  return (
    <div>

      {/* This is Reusable Header */}
      <Header text="Your Journey to coding conf 2025 Starts Here! " />

      <h1 className="text-center text-6xl font-bold my-20">
        This is home page
      </h1>
    </div>
  );
};

export default Home;
