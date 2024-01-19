import React from "react";
import "./Coaches.css";

function Coaches() {
  return (
    <>
      <div className="flex w-full justify-center gap-8        mt-10  ">
        <div className=" ">
          <h1 className="text-white text-6xl font-bold">TheraPeers</h1>
          <div className="flex mt-9 gap-3">
            <button className="bg-slate-800 px-3  py-3  text-blue-600  rounded-lg font-semibold ">
              Growth & Supervisions
            </button>
            <button className="bg-slate-800 text-blue-600   rounded-lg px-3 py-3 font-semibold">
              Growth & Supervisions
            </button>
            <button className="bg-slate-800 text-blue-600 rounded-lg p-3 font-semibold ">
              Growth & Supervisions
            </button>
          </div>

          <p className="text-white mt-5 text-lg ">
            We acknowledge that everyday you hold a space for clients and move{" "}
            <br /> mountains. On most days, being a therapist takes more than it
            gives.
          </p>
          <p className="text-white mt-5 text-lg">
            At TheraPeers we're weaving the strongest support system for you to{" "}
            <br /> upskill, network, feel validated and empowered to do what you
            do best.
          </p>
        </div>
        <div className="w-2/5 mt-9 ">
          <img
            className="rounded-3xl    "
            src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Therapist-image.jpg?width=2000&name=Therapist-image.jpg"
          ></img>
        </div>
      </div>

      <h1 className="text-white text-center text-6xl mt-10 font-bold ">
        MindPeers Academy
      </h1>

      <p className="text-center text-white text-2xl font-bold  p-5  mt-5">
        Certificate Live Courses - You can enroll individually or take the plans
        above and get unlimited access to all <br />
        courses throughout the year.
      </p>
      {/* <div className="w-full   ">
        <div className="bg-gray-800 w-2/5 h-auto border ">
          <p className="text-white ">Fresher Plans</p>
          <span className="text-white ">₹ 582 / Month</span>
          <span className="flex">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              6 mentorship circles with MHPs (of 10+ yrs exp)
            </li>
          </span>

          <span className="flex mt-2">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              Unlimited access to all courses throughout the year
            </li>
          </span>

          <span className="flex mt-2">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              {" "}
              240hrs of relevant Internship opportunities
            </li>
          </span>

          <span className="flex mt-2">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              Lifetime access to 'How to do therapy 101' book with
            </li>
          </span>

          <span className="flex mt-2">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              Access to a community of 500+ therapists: ask anything, anytime!
            </li>
          </span>

          <span className="flex mt-2">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              Attend unlimited exclusive offline events & MHP meet ups
            </li>
          </span>

          <span className="flex mt-2">
            <img
              className="w-7   "
              src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Check-Icon.png?width=84&height=84&name=Check-Icon.png"
            ></img>
            <li className="list-none text-white ml-3">
              6 learning circles with global practitioners
            </li>
          </span>
        </div>
      </div> */}
      <div className="flex ml-36 mt-20   ">
        <img
          className="w-16 "
          src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Calendar.png?width=138&height=138&name=Calendar.png"
        ></img>
        <h2 className="text-white text-2xl mt-4 ml-5 font-bold">
          Decemeber 2023
        </h2>
      </div>

      <div className="flex justify-center gap-36 ">
        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl  ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white hover">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>
      </div>

      <div className="flex ml-36  mt-20 ">
        <img
          className="w-16 "
          src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Calendar.png?width=138&height=138&name=Calendar.png"
        ></img>
        <h2 className="text-white text-2xl mt-4 ml-5 font-bold">
          Decemeber 2023
        </h2>
      </div>

      <div className="flex justify-center gap-36 ">
        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>
      </div>

      <div className="flex ml-36 mt-20  ">
        <img
          className="w-16 "
          src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Calendar.png?width=138&height=138&name=Calendar.png"
        ></img>
        <h2 className="text-white text-2xl mt-4 ml-5 font-bold">
          Decemeber 2023
        </h2>
      </div>

      <div className="flex justify-center gap-36 ">
        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>
      </div>

      <div className="flex ml-36  mt-20 ">
        <img
          className="w-16 "
          src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Calendar.png?width=138&height=138&name=Calendar.png"
        ></img>
        <h2 className="text-black text-2xl mt-4 ml-5 font-bold bg-white">
          Decemeber 2023
        </h2>
      </div>

      <div className="flex justify-center gap-36 ">
        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>
      </div>

      <div className="flex ml-36 mt-20 ">
        <img
          className="w-16 "
          src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Therapist/Calendar.png?width=138&height=138&name=Calendar.png"
        ></img>
        <h2 className="text-white text-2xl mt-4 ml-5 font-bold">
          Decemeber 2023
        </h2>
      </div>

      <div className="flex justify-center gap-36 ">
        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>

        <div className="w-80 h-auto  mt-5 card  py-5 rounded-2xl ">
          <h2 className="p text-xl font-bold text-center mt-4 p-4 mr-3 ">
            How to conduct therapy 101
          </h2>
          <p className="text-white text-xs  ml-4 ">
            Every Monday & and Wednesday from 4th <br /> December to 5th
            January, 5-7pm IST | What if I <br /> don’t know what to say in a
            session? How do I <br /> go about a difficult client?All things
            about the <br /> nuances of how to be a good therapist, beyond{" "}
            <br /> the books, covered.
          </p>
          <div className="flex justify-around gap-28  mt-5">
            <p className="text-white text-2xl font-bold">₹2999/- </p>
            <button className="text-black px-5 py-3 rounded-lg bg-white">Enroll</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 font-bold gap-10 ">
        <div className="w-2/5">
          <h1 className="text-white text-6xl 5xl mt-40 ">Measure Your Mental Strength</h1>
          <p className="text-white text-xl mt-10">Download our app and get on this journey of giving your mind the care and strength it deserves 🚀</p>
          <div className="flex justify-center gap-5  mr-10 mt-10  ">
            <img src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/google_play_button%201.png?width=392&height=116&name=google_play_button%201.png"></img>
            <img src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/ios_app_store%201.png?width=393&height=116&name=ios_app_store%201.png"></img>
          </div>

        </div>
        <div className="w-2/5"> 
        <img src="https://www.mindpeers.co/hs-fs/hubfs/Group%20149923%201.png?width=1080&height=1259&name=Group%20149923%201.png"></img>
      
        </div>
      </div>
    </>
  );
}

export default Coaches;
