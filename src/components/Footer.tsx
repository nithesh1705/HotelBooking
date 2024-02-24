import bazar from '../assets/images/footer-bazar.png';
import googlePlay from '../assets/images/footer-googlePlay.png';
import ios from '../assets/images/footer-ios.png';

function Footer() {
  return (
    <>
      <nav
        id="footer"
        className="bg-[#3c3c3c] leading-7 flex flex-col md:flex-row px-5 py-11 justify-between gap-7 text-[#898989]"
      >
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">
            About Hotel Booking
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">
            Download Hotel Booking App
          </h2>
          <p>
            Download the Hotel Booking app and make your reservations easier with your mobile phone.
          </p>
          <ul className="space-y-3 flex flex-col items-center">
            <li>
              <a href="#">
                <img className=" h-auto" src={googlePlay} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className=" h-auto" src={bazar} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className=" h-auto" src={ios} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">Receive Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <input
            className="outline-none p-2 rounded-md border duration-500 border-[#5b5b5b] bg-transparent focus:border-[#ccc]"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="rounded-md hover:bg-[#111] duration-500 text-[#d1d1d1] bg-black shadow-lg py-3">
            Send
          </button>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">Site Navigation</h2>
          <ul className="space-y-3">
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">Reservation Tracking</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">Hotels</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">Iranian Hotels</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">Hotel Reviews</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">Tourist Guide Map</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="bg-[#272727]  text-sm sm:text-base flex justify-between p-7 items-center text-[#898989]">
        <span>© 2023 All rights reserved to Hotel Booking</span>
        <a href="#">Contact Us</a>
      </nav>
    </>
  );
}

export default Footer;
