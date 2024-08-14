import { IoIosArrowBack } from "react-icons/io";

const ReturnHeader = () => {
  return (
    <div
      className={`fixed h-[5.5rem] top-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8`}
    >
      <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 lg:mt-7">
        <a className="flex items-center" href="/">
          <IoIosArrowBack className="text-xl mr-2" /> Back Home
        </a>

        <div className="flex items-center cursor-pointer">
          <img
            src="https://via.placeholder.com/50"
            alt="profile"
            className="rounded-full h-10 w-10 mr-2"
          />
          <span>Jane Doe</span>
        </div>
      </div>
    </div>
  );
};

export default ReturnHeader;
