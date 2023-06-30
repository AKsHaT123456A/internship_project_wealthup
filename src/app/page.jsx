import Image from "next/image";
import mobile from "../assets/mobile.png";
import bottom from "../assets/backgroundBottom.svg";
import work from "../assets/work.png";
import Todo from "../components/Todo";
export default function Home() {
  return (
    <>
      <section className="w-full overflow-scroll bg-gradient-to-r from-blue-800 to-teal-500">
        <main className="flex flex-col items-center justify-between pt-24 h-[569]">

          {/* Header */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-7xl text-white font-semibold ">
              Check your financial health
            </h3>
            <p className="leading-tight text-slate-300 text-3xl w-subText text-center pt-6">
              Use WeathoMeter to get a free report card for your finances-
              within minutes!
            </p>
            <button className="btn bg-accent mt-10 px-6 py-2 rounded-3xl text-3xl">
              Get Started
            </button>
          </div>
          <div className="flex justify-between mt-10">
            <ul className="text-3xl list-inside mt-28 designList">
              <li className="mb-10 list">
                Expected Retirement Age <br />
                <hr
                  width={"95%"}
                  className="mt-4 relative left-12 h-0.5 bg-white"
                />
              </li>
              <li className="list">
                Identify Mistakes
                <br />
                <hr
                  width={"95%"}
                  className="mt-4 relative left-12 h-0.5 bg-white"
                />
              </li>
            </ul>
            <Image
              src={mobile}
              alt="My Image"
              width={525}
              height={790}
              className="relative left-16"
            />
            <ul className="text-3xl list-inside mt-28 relative -left-12 designList">
              <li className="mb-10 list">
                Personalised Road Map <br />
                <hr
                  width={"95%"}
                  className="mt-4 relative left-12 h-0.5 bg-white"
                />
              </li>
              <li className="mb-10 list">
                Tips To Improve <br />
                <hr
                  width={"95%"}
                  className="mt-4 relative left-12 h-0.5 bg-white"
                />
              </li>
            </ul>
          </div>
        </main>

        {/* Footer */}
        <div className="relative w-full">
          {/* <div className="wave"> */}
          <Image
            src={bottom}
            width={1526}
            height={790}
            alt="bg"
            className="wave"
          />
          {/* </div> */}
          <footer className="pb-8 pt-10 flex flex-col items-center text-center relative z-30">
            <h3 className="text-6xl text-white font-semibold relative top-10">
              How it works?
            </h3>
            <div className="flex justify-center">
              <Image src={work} width={497} height={884} alt="icons" />
            </div>
            <div className="flex text-3xl relative -top-16 left-12">
              <span className="px-4">
                Answer few <br /> questions
              </span>
              <span className="px-4">
                Register using <br /> phone and OTP
              </span>
              <span className="px-4 ">
                Get report and <br /> personal roadmap
              </span>
            </div>
            <button className="btn bg-accent my-4 px-6 py-2 rounded-3xl text-3xl">
              Get Started
            </button>
          </footer>
        </div>
      </section>
      <Todo />
    </>
  );
}