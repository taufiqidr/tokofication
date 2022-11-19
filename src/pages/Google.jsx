import {
  FaAmazon,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMicrophone,
  FaSearch,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
const Google = () => {
  //
  return (
    <div className="flex items-center justify-center h-auto flex-col mt-44">
      <p className="text-8xl font-sans font-semibold mb-9">Google</p>
      <div className="flex flex-row w-6/12 justify-center">
        <div className="flex items-center justify-center bg-white h-12 rounded-full w-12 -mr-7 text-black text-xl z-10">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="bg-white w-10/12 h-12 text-center"
        ></input>
        <div className="flex items-center justify-center bg-white h-12 rounded-full w-12 -ml-7 text-black text-xl z-10">
          <FaMicrophone />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-x-16 gap-y-10 mt-9">
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaFacebook />
          </div>
          <p className="mt-2">Facebook</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaLinkedin />
          </div>
          <p className="mt-2">LinkedIn</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaGithub />
          </div>
          <p className="mt-2">GitHub</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaGoogle />
          </div>
          <p className="mt-2">Google</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaTwitch />
          </div>
          <p className="mt-2">Twitch</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaAmazon />
          </div>
          <p className="mt-2">Amazon</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaInstagram />
          </div>
          <p className="mt-2">Instagram</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center  justify-center bg-white h-12 rounded-full w-12  text-black text-xl z-10">
            <FaTwitter />
          </div>
          <p className="mt-2">Twitter</p>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Google;
