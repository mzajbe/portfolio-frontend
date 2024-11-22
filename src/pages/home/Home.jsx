import Aboutme from "../../components/aboutMe/Aboutme";
import Education from "../../components/education/Education";
import MyMap from "../../components/map/MyMap";
import Online from "../../components/online/Online";
// import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex max-w-6xl item-center justify-center  ml-64 mt-10">
      <div className="flex flex-col justify-center   mx-4 sm:mx-8 md:mx-64 lg:mx-64 w-full md:w-3/4">
        <Aboutme />
        <Education></Education>
        <Online></Online>
        <MyMap />
      </div>
    </div>
  );
};

export default Home;
