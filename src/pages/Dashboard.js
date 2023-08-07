import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className="w-full min-h-screen h-screen flex">
        <section className="h-full border-r w-60 relative overflow-hidden">
          <Sidebar />
        </section>
        <section className="h-full main-column">
          <NavBar />
          <MainBody />
        </section>
      </main>
    </>
  );
};

// sidebar;

const Sidebar = () => {
  // dummy projects;

  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign the company website for a better user experience.",
      color: "bg-[#FF5733]", // Custom hex color for Website Redesign
      tasks: 6,
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Develop a mobile app for both Android and iOS platforms.",
      color: "bg-[#2400FF]",
      tasks: 3,
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description:
        "Create and execute a marketing campaign to increase brand visibility.",
      color: "bg-[#FFC300]",
      tasks: 2,
    },
    {
      id: 4,
      name: "Product Launch",
      description:
        "Plan and execute the launch of a new product in the market.",
      color: "bg-[#42EADD]", // Custom hex color for Product Launch
      tasks: 12,
    },
    {
      id: 5,
      name: "Data Analysis",
      description:
        "Analyze and interpret data to gain insights for business decisions.",
      color: "bg-[#FF33CC]", // Custom hex color for Data Analysis
      tasks: 8,
    },
    {
      id: 6,
      name: "Customer Support Improvement",
      description:
        "Improve customer support processes to enhance customer satisfaction.",
      color: "bg-[#00FF99]", // Custom hex color for Customer Support Improvement
      tasks: 10,
    },
    {
      id: 6,
      name: "Customer Support Improvement",
      description:
        "Improve customer support processes to enhance customer satisfaction.",
      color: "bg-[#00FF99]", // Custom hex color for Customer Support Improvement
      tasks: 1,
    },
    {
      id: 6,
      name: "Customer Support Improvement",
      description:
        "Improve customer support processes to enhance customer satisfaction.",
      color: "bg-[#00FF99]", // Custom hex color for Customer Support Improvement
      tasks: 0,
    },
    {
      id: 6,
      name: "Customer Support Improvement",
      description:
        "Improve customer support processes to enhance customer satisfaction.",
      color: "bg-[#00FF99]", // Custom hex color for Customer Support Improvement
      tasks: 0,
    },
    {
      id: 6,
      name: "Customer Support Improvement",
      description:
        "Improve customer support processes to enhance customer satisfaction.",
      color: "bg-[#00FF99]", // Custom hex color for Customer Support Improvement
      tasks: 0,
    },
    {
      id: 6,
      name: "Customer Support Improvement",
      description:
        "Improve customer support processes to enhance customer satisfaction.",
      color: "bg-[#00FF99]", // Custom hex color for Customer Support Improvement
      tasks: 0,
    },
  ];

  //   hiding projects;
  const [areProjectvisible, setProjectsVisible] = useState(true);

  return (
    <>
      <header className="w-full h-16 border-b flex items-center pl-6">
        <p className="text-[2rem] font-medium">Lovely</p>
      </header>
      {/* <section className="w-full h-auto p-3">
        <h1 className="font- text-[16px] my-4 font-semibold text-[#222]">
          General
        </h1>
        <div className="w-full h-10  border-zinc-300 flex items-center px-3 rounded  cursor-pointer gap-4 hover:bg-light-hover">
          <div className="w-6 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              id="home"
            >
              <path
                fill="none"
                stroke="#333"
                strokeWidth="2"
                d="M6.64373233,18.7821107 L6.64373233,15.7152449 C6.64371685,14.9380902 7.27567036,14.3067075 8.05843544,14.3018198 L10.9326107,14.3018198 C11.7188748,14.3018198 12.3562677,14.9346318 12.3562677,15.7152449 L12.3562677,15.7152449 L12.3562677,18.7732212 C12.3562498,19.4472781 12.9040221,19.995083 13.5829406,20 L15.5438266,20 C16.4596364,20.0023291 17.3387522,19.6427941 17.9871692,19.0007051 C18.6355861,18.3586161 19,17.4867541 19,16.5775231 L19,7.86584638 C19,7.13138763 18.6720694,6.43471253 18.1046183,5.96350064 L11.4429783,0.674268354 C10.2785132,-0.250877524 8.61537279,-0.22099178 7.48539114,0.745384082 C7.48539114,0.745384082 0.967012253,5.96350064 0.967012253,5.96350064 C0.37274068,6.42082162 0.0175522924,7.11956262 0,7.86584638 L0,16.5686336 C0,18.463707 1.54738155,20 3.45617342,20 L5.37229029,20 C5.69917279,20.0023364 6.01348703,19.8750734 6.24547302,19.6464237 C6.477459,19.417774 6.60792577,19.1066525 6.60791706,18.7821107 L6.64373233,18.7821107 Z"
                transform="translate(2.5 2)"
              ></path>
            </svg>
          </div>
          <h1 className="font-lexend text-[16px]  text-[#333]">Home</h1>
        </div>
        <div className="w-full h-10  border-zinc-300 flex items-center px-3 rounded  cursor-pointer gap-4 hover:bg-light-hover">
          <div className="w-6 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="email-notification"
              fill="#333"
            >
              <path d="M12 5a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm8.89-9.582a9.985 9.985 0 0 0-2.529-3.135 1 1 0 0 0-1.273 1.543 7.981 7.981 0 0 1 2.025 2.51 1 1 0 0 0 1.778-.918z"></path>
              <path d="M6.905 5.831A1 1 0 0 0 5.632 4.29a9.971 9.971 0 0 0-2.523 3.128 1 1 0 0 0 1.778.918 7.999 7.999 0 0 1 2.018-2.505zM14 11h-1V9a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2z"></path>
            </svg>
          </div>
          <h1 className="font-lexend text-[16px]  text-[#333]">Reminders</h1>
        </div>
        <div className="w-full h-10  border-zinc-300 flex items-center px-3 rounded  cursor-pointer gap-4 hover:bg-light-hover">
          <div className="w-6 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 64 64"
              id="notes"
              width="20"
              fill="#333"
              height="20"
            >
              <path d="M52.24023,13.97983H48.5V10.43a5.36342,5.36342,0,0,0-5.25977-5.4502H40.40967a6.00065,6.00065,0,0,0-11.81934,0H11.75977A5.36343,5.36343,0,0,0,6.5,10.43V49.52964a5.36342,5.36342,0,0,0,5.25977,5.45019H15.5v3.54981a5.36342,5.36342,0,0,0,5.25977,5.45019H52.24023A5.36341,5.36341,0,0,0,57.5,58.52964V19.43A5.36342,5.36342,0,0,0,52.24023,13.97983ZM34.5,3.97983a2.00021,2.00021,0,0,1-.00009,4A2.00021,2.00021,0,0,1,34.5,3.97983Zm-22.74023,47A1.36641,1.36641,0,0,1,10.5,49.52964V10.43a1.36641,1.36641,0,0,1,1.25977-1.4502H28.67188l-3.58594,3.58594a2,2,0,0,0,2.82818,2.82807l4.00544-4.00544a6.0287,6.0287,0,0,0,7.76863-2.40865l3.552.00008A1.36641,1.36641,0,0,1,44.5,10.43V49.52964a1.36641,1.36641,0,0,1-1.25977,1.45019ZM53.5,58.52964a1.36641,1.36641,0,0,1-1.25977,1.45019H20.75977A1.36641,1.36641,0,0,1,19.5,58.52964V54.97983H43.24023A5.36341,5.36341,0,0,0,48.5,49.52964V17.97983h3.74023A1.36641,1.36641,0,0,1,53.5,19.43Z"></path>
              <path d="M38.5 22.97983h-22a2.00021 2.00021 0 0 0 .00009 4H38.5A2.00021 2.00021 0 0 0 38.5 22.97983zM38.5 32.97983h-22a2.00021 2.00021 0 0 0 .00009 4H38.5A2.00021 2.00021 0 0 0 38.5 32.97983zM38.5 41.97983a2.00019 2.00019 0 0 0 .00008 4A2.00019 2.00019 0 0 0 38.5 41.97983zM30.5 41.97983a2.00021 2.00021 0 0 0 .00009 4A2.00021 2.00021 0 0 0 30.5 41.97983z"></path>
            </svg>
          </div>
          <h1 className="font-lexend text-[16px]  text-[#333]">Notes</h1>
        </div>
        <div className="w-full h-10  flex items-center px-3 rounded mb-2 cursor-pointer gap-4 hover:bg-light-hover">
          <div className="w-6 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="task"
              width="20"
              height="20"
              fill="#333"
            >
              <path d="M8 22h8c2.2 0 4-1.8 4-4V7c0-2-1.4-3.6-3.3-3.9-.4-.7-1.1-1.1-1.9-1.1H9.2c-.8 0-1.5.4-1.9 1.1C5.4 3.4 4 5 4 7v11c0 2.2 1.8 4 4 4zM9 4.1s.1-.1.2-.1h5.7l.1.1v.7c0 .1-.1.2-.2.2H9.2c-.1 0-.2-.1-.2-.2v-.7zM6 7c0-.8.4-1.4 1-1.8v.1c0 .1.1.2.1.3 0 0 0 .1.1.1 0 .1.1.2.1.2l.1.1c0 .1.1.1.2.2l.1.1.2.2.1.1c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1 0 .2.1.3.1h.1c.2.1.3.1.5.1h6.2c.1 0 .2 0 .3-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1l.1-.1c.1 0 .1-.1.2-.2l.1-.1.2-.2.1-.1c0-.1.1-.1.1-.2 0 0 0-.1.1-.1 0-.1.1-.2.1-.3v-.1c.6.3 1 1 1 1.8v11c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V7z"></path>
              <path d="M9 16h2c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm0-4h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1z"></path>
            </svg>
          </div>
          <h1 className="font-lexend text-[16px]  text-[#333]">Tasks</h1>
        </div>
      </section> */}
      <section className="h-auto w-full p-3 pt-0 pr-1 mt-10">
        <div
          onClick={() => {
            setProjectsVisible(!areProjectvisible);
          }}
          className="w-full flex items-center gap-1 cursor-pointer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="chevron-down"
              height="28"
              width="28"
              fill="#222"
              className={`${
                areProjectvisible && "rotate-180"
              } transition-all duration-300 ease`}
            >
              <g data-name="Layer 2">
                <path
                  d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"
                  data-name="chevron-down"
                ></path>
              </g>
            </svg>
          </div>
          <h1 className="font- text-[16px] font-semibold text-[#222]">
            All projects
          </h1>
        </div>
        <AnimatePresence>
          {areProjectvisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.2,
                  type: "linear",
                },
              }}
              exit={{ opacity: 0 }}
              className={`max-h-[53vh] projects-container mt-3 overflow-auto`}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="w-[98%] h-12  border-zinc-300 flex items-center px-2 rounded my-2 cursor-pointer gap-3 hover:bg-light-hover"
                >
                  <div className={`h-2 w-2 rounded ${project.color}`}></div>
                  <h1 className="font- w-3/4 text-sm font-semibold text-[#666] truncate">
                    {project.name}
                  </h1>
                  <div className="bg-[#E3E8EE] w-6 h-6 grid place-items-center rounded-full">
                    <h1 className="text-black font- text-xs font-semibold">
                      {project.tasks > 99 ? "99+" : project.tasks}
                    </h1>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <div className="absolute w-full grid place-items-center bottom-3">
        <div className="w-[90%] mt-10 cursor-pointer hover:bg-black group hover:border-transparent transition-all duration-200 ease bg-blue-600 h-12 rounded font- cursor flex items-center justify-center gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="add"
              x="0"
              y="0"
              height="188"
              width="18"
              version="1.1"
              viewBox="0 0 29 29"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M14.5 22V7M7 14.5h15"
              ></path>
            </svg>
          </div>

          <p className="text-white font-medium text-md group-hover:text-[#fff] transition-all duration-200 ease">
            Add New project
          </p>
        </div>
      </div>
    </>
  );
};

// navbar;

const NavBar = () => {
  return (
    <nav className="w-full h-16 border-b flex items-center justify-between">
      <div className="flex pl-7 gap-4">
        <p className="text-zinc-500">All Projects</p>
        <p>{`>`}</p>
        <p>Website redesign</p>
        <p></p>
      </div>
      <div className="flex items center gap-6 px-6">
        <div className="group p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 6.35 6.35"
            id="settings"
          >
            <path
              fillRule="evenodd"
              d="M 12.023438 1.0019531 C 10.879474 0.99439407 9.827972 1.6403519 9.3183594 2.6621094 L 8.8457031 3.6074219 C 8.6594404 3.6765872 8.4761978 3.7523466 8.2949219 3.8339844 L 7.2929688 3.5 C 6.2105419 3.1386772 5.0091347 3.4251415 4.2070312 4.2402344 C 3.4165021 5.0436863 3.1451318 6.2265373 3.5019531 7.2929688 L 3.8359375 8.2929688 C 3.7525494 8.4755199 3.6745261 8.6599649 3.6035156 8.8476562 L 2.6621094 9.3183594 C 1.6414167 9.8274617 0.99358533 10.877951 1.0019531 12.021484 C 1.0102038 13.148917 1.6542632 14.177388 2.6601562 14.679688 L 3.6074219 15.15625 C 3.676862 15.342581 3.7523738 15.525878 3.8339844 15.707031 L 3.5019531 16.707031 C 3.1409863 17.78843 3.4265384 18.988773 4.2402344 19.791016 C 5.0430601 20.582562 6.2259945 20.854116 7.2929688 20.498047 L 8.2929688 20.166016 C 8.4752932 20.249165 8.6601879 20.325429 8.8476562 20.396484 L 9.3183594 21.335938 C 9.827972 22.357733 10.879474 23.005051 12.023438 22.996094 C 13.150654 22.988535 14.17952 22.342766 14.681641 21.335938 L 15.152344 20.394531 C 15.34095 20.32461 15.52745 20.248787 15.710938 20.166016 L 16.707031 20.498047 C 17.774008 20.854078 18.956941 20.582713 19.759766 19.791016 C 20.573945 18.988282 20.859993 17.78693 20.498047 16.705078 L 20.166016 15.705078 C 20.248999 15.523283 20.325777 15.339204 20.396484 15.152344 L 21.337891 14.679688 C 22.344553 14.177653 22.989794 13.149409 22.998047 12.021484 C 23.006437 10.877913 22.358575 9.8274617 21.337891 9.3183594 L 20.392578 8.8457031 C 20.323076 8.6582386 20.24785 8.4734534 20.166016 8.2910156 L 20.498047 7.2929688 L 20.498047 7.2910156 C 20.853901 6.2250755 20.583022 5.043195 19.792969 4.2402344 C 18.990866 3.4249903 17.789458 3.1387906 16.707031 3.5 L 15.705078 3.8339844 C 15.523268 3.7512127 15.339253 3.6741928 15.152344 3.6035156 L 14.681641 2.6621094 C 14.179525 1.6553188 13.150707 1.0107594 12.023438 1.0019531 z M 12.007812 3.0019531 C 12.383913 3.0048634 12.723716 3.2181461 12.892578 3.5566406 L 13.527344 4.8261719 A 1.0001 1.0001 0 0 0 14.117188 5.3320312 C 14.493957 5.4522202 14.85985 5.6030208 15.210938 5.7851562 A 1.0001 1.0001 0 0 0 15.986328 5.8476562 L 17.337891 5.3984375 A 1.0001 1.0001 0 0 0 17.339844 5.3984375 C 17.704058 5.2767367 18.099687 5.371964 18.367188 5.6425781 C 18.630662 5.9105466 18.719636 6.3014035 18.599609 6.6601562 A 1.0001 1.0001 0 0 0 18.599609 6.6621094 L 18.152344 8.0078125 A 1.0001 1.0001 0 0 0 18.210938 8.7773438 C 18.390843 9.1292178 18.540142 9.4959256 18.658203 9.8730469 A 1.0001 1.0001 0 0 0 19.166016 10.46875 L 20.443359 11.107422 C 20.7869 11.278634 21.000845 11.624959 20.998047 12.005859 C 20.9953 12.381166 20.782078 12.721718 20.443359 12.890625 A 1.0001 1.0001 0 0 0 20.441406 12.890625 L 19.171875 13.527344 A 1.0001 1.0001 0 0 0 18.667969 14.117188 C 18.547058 14.494006 18.395635 14.859895 18.212891 15.210938 A 1.0001 1.0001 0 0 0 18.150391 15.988281 L 18.599609 17.337891 C 18.721397 17.701859 18.628939 18.09753 18.357422 18.365234 C 18.089839 18.629045 17.698751 18.71942 17.339844 18.599609 A 1.0001 1.0001 0 0 0 17.337891 18.599609 L 15.992188 18.152344 A 1.0001 1.0001 0 0 0 15.220703 18.210938 C 14.868349 18.391599 14.502775 18.54163 14.125 18.660156 A 1.0001 1.0001 0 0 0 13.529297 19.167969 L 12.892578 20.441406 C 12.723724 20.780052 12.383967 20.993146 12.007812 20.996094 C 11.625914 20.99908 11.278859 20.785192 11.107422 20.441406 L 10.472656 19.173828 A 1.0001 1.0001 0 0 0 9.8828125 18.667969 C 9.5054002 18.547024 9.1386886 18.39582 8.7871094 18.212891 A 1.0001 1.0001 0 0 0 8.0097656 18.150391 L 6.6601562 18.599609 C 6.3012485 18.71942 5.9101581 18.629801 5.6425781 18.365234 C 5.3710493 18.097644 5.2786067 17.701897 5.4003906 17.337891 A 1.0001 1.0001 0 0 0 5.4003906 17.335938 L 5.8476562 15.990234 A 1.0001 1.0001 0 0 0 5.7871094 15.21875 C 5.606705 14.867632 5.4565935 14.501592 5.3378906 14.125 A 1.0001 1.0001 0 0 0 4.8339844 13.53125 L 3.5585938 12.890625 A 1.0001 1.0001 0 0 0 3.5566406 12.890625 C 3.2179213 12.72168 3.0047004 12.381355 3.0019531 12.005859 C 2.9991657 11.624959 3.21311 11.278748 3.5566406 11.107422 L 4.8261719 10.472656 A 1.0001 1.0001 0 0 0 5.3320312 9.8828125 C 5.4529383 9.5059936 5.6043651 9.140105 5.7871094 8.7890625 A 1.0001 1.0001 0 0 0 5.8496094 8.0136719 L 5.4003906 6.6621094 A 1.0001 1.0001 0 0 0 5.4003906 6.6601562 C 5.2803642 6.3014791 5.3693227 5.9103577 5.6328125 5.6425781 C 5.9003123 5.3708301 6.2959417 5.2771147 6.6601562 5.3984375 L 8.0078125 5.8476562 A 1.0001 1.0001 0 0 0 8.7792969 5.7890625 C 9.1306077 5.609157 9.4964933 5.4598693 9.8730469 5.3417969 A 1.0001 1.0001 0 0 0 10.46875 4.8339844 L 11.107422 3.5566406 C 11.278857 3.2127036 11.625914 2.9989673 12.007812 3.0019531 z M 12.003906 7 C 9.2543332 7 6.9980556 9.2484784 6.9980469 11.998047 C 6.9980299 14.747615 9.2543151 17.001953 12.003906 17.001953 C 14.753498 17.001953 17.000017 14.747615 17 11.998047 C 16.999991 9.2484784 14.75348 7 12.003906 7 z M 12.003906 9 C 13.672602 9 14.999995 10.329348 15 11.998047 C 15.000011 13.666746 13.672613 15.001953 12.003906 15.001953 C 10.3352 15.001953 8.9980363 13.666746 8.9980469 11.998047 C 8.9980522 10.329348 10.335211 9 12.003906 9 z "
              color="#000"
              transform="scale(.26458)"
            ></path>
          </svg>
        </div>
        <div className="group p-2 cursor-pointer">
          <svg
            width="25"
            height="25"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.995 10.711L21.245 10.672C21.239 10.4809 21.1892 10.2937 21.0995 10.1248C21.0097 9.95593 20.8824 9.8099 20.7274 9.69795C20.5724 9.586 20.3937 9.51111 20.2052 9.47904C20.0167 9.44698 19.8233 9.4586 19.64 9.513L19.995 10.711ZM11.288 2.005L12.487 2.36C12.5414 2.1766 12.553 1.98315 12.5209 1.79455C12.4888 1.60596 12.4138 1.42726 12.3017 1.2722C12.1897 1.11715 12.0435 0.989891 11.8745 0.900223C11.7055 0.810554 11.5182 0.760872 11.327 0.755001L11.288 2.005ZM19.64 9.513C19.1076 9.67074 18.5552 9.75057 18 9.75V12.25C18.7959 12.2504 19.5878 12.1359 20.351 11.91L19.64 9.513ZM18 9.75C16.475 9.75 15.0125 9.1442 13.9341 8.06587C12.8558 6.98753 12.25 5.525 12.25 4H9.75C9.75 6.18804 10.6192 8.28646 12.1664 9.83363C13.7135 11.3808 15.812 12.25 18 12.25V9.75ZM12.25 4C12.25 3.428 12.333 2.878 12.487 2.36L10.09 1.65C9.86398 2.41285 9.74947 3.20437 9.75 4H12.25ZM11 3.25C11.083 3.25 11.166 3.251 11.25 3.254L11.328 0.755001C11.2187 0.751613 11.1094 0.749946 11 0.750001V3.25ZM3.25 11C3.25 8.94457 4.06652 6.97333 5.51992 5.51992C6.97333 4.06652 8.94457 3.25 11 3.25V0.750001C5.34 0.750001 0.75 5.34 0.75 11H3.25ZM11 18.75C8.94457 18.75 6.97333 17.9335 5.51992 16.4801C4.06652 15.0267 3.25 13.0554 3.25 11H0.75C0.75 16.66 5.34 21.25 11 21.25V18.75ZM18.75 11C18.75 13.0554 17.9335 15.0267 16.4801 16.4801C15.0267 17.9335 13.0554 18.75 11 18.75V21.25C16.66 21.25 21.25 16.66 21.25 11H18.75ZM18.746 10.75C18.749 10.834 18.75 10.917 18.75 11H21.25C21.25 10.89 21.248 10.781 21.245 10.672L18.746 10.751V10.75Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

//  main body;
const MainBody = () => {
  // make sort options clickable;
  const selectThisOption = (e) => {
    e.target.previousElementSibling.checked =
      !e.target.previousElementSibling.checked;
  };

  return (
    <main>
      <header className="w-full h-20  pl-7 flex justify-between">
        <ProjectTitle />
        <div className="h-full flex items-center gap-4 px-6">
          <div>
            <input
              type="text"
              className="border outline-none h-9 border-zinc-300 p-1 font-md rounded-lg pl-4"
              placeholder="Search"
            />
          </div>

          <FilterMenu />
          <div className="h-12 w-28  rounded-full flex items-center justify-center gap-2 relative group">
            <div className="w-full h-9 flex items-center gap-2 justify-center cursor-pointer border border-zinc-300 rounded-full">
              <p>Sort</p>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.47 3.53001C8.61063 3.67046 8.80125 3.74935 9 3.74935C9.19875 3.74935 9.38938 3.67046 9.53 3.53001L10.25 2.81001V13C10.25 13.1989 10.329 13.3897 10.4697 13.5303C10.6103 13.671 10.8011 13.75 11 13.75C11.1989 13.75 11.3897 13.671 11.5303 13.5303C11.671 13.3897 11.75 13.1989 11.75 13V2.81001L12.47 3.53001C12.5387 3.6037 12.6215 3.6628 12.7135 3.70379C12.8055 3.74478 12.9048 3.76683 13.0055 3.7686C13.1062 3.77038 13.2062 3.75186 13.2996 3.71413C13.393 3.67641 13.4778 3.62027 13.549 3.54905C13.6203 3.47783 13.6764 3.393 13.7141 3.29961C13.7518 3.20622 13.7704 3.10619 13.7686 3.00549C13.7668 2.90479 13.7448 2.80547 13.7038 2.71347C13.6628 2.62147 13.6037 2.53867 13.53 2.47001L11.53 0.470011C11.3894 0.329561 11.1988 0.250671 11 0.250671C10.8013 0.250671 10.6106 0.329561 10.47 0.470011L8.47 2.47001C8.32955 2.61064 8.25066 2.80126 8.25066 3.00001C8.25066 3.19876 8.32955 3.38939 8.47 3.53001ZM3.75 13.19L4.47 12.47C4.53866 12.3963 4.62146 12.3372 4.71346 12.2962C4.80546 12.2552 4.90478 12.2332 5.00548 12.2314C5.10618 12.2296 5.20621 12.2482 5.2996 12.2859C5.39299 12.3236 5.47782 12.3798 5.54904 12.451C5.62026 12.5222 5.6764 12.607 5.71412 12.7004C5.75184 12.7938 5.77037 12.8938 5.76859 12.9945C5.76682 13.0952 5.74477 13.1946 5.70378 13.2866C5.66279 13.3785 5.60369 13.4614 5.53 13.53L3.53 15.53C3.38938 15.6705 3.19875 15.7494 3 15.7494C2.80125 15.7494 2.61063 15.6705 2.47 15.53L0.470001 13.53C0.396314 13.4614 0.337212 13.3785 0.29622 13.2866C0.255228 13.1946 0.233186 13.0952 0.231409 12.9945C0.229633 12.8938 0.248157 12.7938 0.285878 12.7004C0.323599 12.607 0.379744 12.5222 0.450962 12.451C0.522181 12.3798 0.607015 12.3236 0.700403 12.2859C0.793791 12.2482 0.893821 12.2296 0.994523 12.2314C1.09523 12.2332 1.19454 12.2552 1.28654 12.2962C1.37854 12.3372 1.46134 12.3963 1.53 12.47L2.25 13.19V3.00001C2.25 2.8011 2.32902 2.61033 2.46967 2.46968C2.61032 2.32903 2.80109 2.25001 3 2.25001C3.19891 2.25001 3.38968 2.32903 3.53033 2.46968C3.67098 2.61033 3.75 2.8011 3.75 3.00001V13.19Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="absolute border border-zinc-300 top-[100%] rounded-xl right-0 w-44 z-50 bg-white group-hover:flex flex-col items-center justify-evenly hidden">
              <div className="w-full cursor-pointer h-10 flex gap-2 items-center px-3">
                <input type="radio" name="sort" value="A - Z" />
                <p onClick={selectThisOption} className="text-sm">
                  A - Z
                </p>
              </div>
              <div className="w-full cursor-pointer h-10 flex gap-2 items-center px-3">
                <input type="radio" name="sort" value="A - Z" />
                <p onClick={selectThisOption} className="text-sm">
                  Z - A
                </p>
              </div>
              <div className="w-full cursor-pointer h-10 flex gap-2 items-center px-3">
                <input type="radio" name="sort" value="A - Z" />
                <p onClick={selectThisOption} className="text-sm">
                  By Due date
                </p>
              </div>
              <div className="w-full cursor-pointer h-10 flex gap-2 items-center px-3">
                <input type="radio" name="sort" value="A - Z" />
                <p onClick={selectThisOption} className="text-sm">
                  By Priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full">
        <TasksBody />
      </section>
    </main>
  );
};

// ****************************************************************
// ****************** MAIN BODY COMPONENTS ************************
// ****************************************************************

// header title;

const ProjectTitle = () => {
  const [projectName, setProjectName] = useState("Website Design Board");
  const [isEditingName, setIsEditingName] = useState(false);
  return (
    <div className="h-full flex justify-center flex-col gap-1">
      <AnimatePresence>
        {!isEditingName ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="flex items-center gap-3"
          >
            <p className="text-2xl max-w-96 truncate">
              {projectName === "" ? "Untitled" : projectName}
            </p>
            <div
              onClick={() => {
                setIsEditingName(true);
              }}
              className="cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                id="edit"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path>
              </svg>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              duration: 2,
            }}
            className="flex items-center"
          >
            <input
              type="text"
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
              onBlur={() => {
                setIsEditingName(false);
              }}
              className="text-2xl pr-0 border w-auto border-zinc-500 pl-2 outline-none -translate-x-[10px]"
            />
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsEditingName(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="confirm"
                width="30"
                height="30"
              >
                <path d="M14 18.586l-3.293-3.293-1.414 1.414L14 21.414l8.707-8.707-1.414-1.414z"></path>
                <path d="M16 2C8.269 2 2 8.269 2 16s6.269 14 14 14 14-6.269 14-14S23.731 2 16 2zm0 26C9.383 28 4 22.617 4 16S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z"></path>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <p className="text-xs text-[#666]">Last updated :</p>
        <p className="text-xs text-green-600">30 mins ago</p>
      </div>
    </div>
  );
};

// filter menu;

const FilterMenu = () => {
  // filters logic;

  const [keyword, setKeyWord] = useState("");

  const [stateFilters, setFilters] = useState([]);
  const removeFilter = (filter) => {
    const sound = new Audio("/SoundEffects/bubble-sound.mp3");
    sound.playbackRate = 4.5;
    sound.play();
    let selectedFilters = stateFilters.filter((f) => f !== filter);
    setFilters(selectedFilters);

    let radios = document.querySelectorAll("input[type='radio']");
    radios.forEach((radio) => {
      if (radio.id === filter) {
        radio.checked = false;
      }
    });
  };

  const selectThisFilter = (e, value) => {
    const inputElement = e.target.querySelector("input[type='radio']");
    inputElement.checked = !inputElement.checked;
    const isChecked = inputElement.checked;

    if (isChecked) {
      addFilter(value);
    } else {
      removeFilter(value);
    }
  };

  const addFilter = (filter, value) => {
    const filterObj = {
      type: filter,
      value,
    };
    setFilters([...stateFilters, filter]);
  };

  return (
    <div className="h-12 w-28  rounded-full flex items-center justify-center gap-2 relative group">
      <div className="w-full h-9 flex items-center gap-2 justify-center cursor-pointer border border-zinc-300 rounded-full">
        <p>Filter</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 2"
          viewBox="0 0 30 30"
          id="filter"
          height="23"
          width="23"
        >
          <path
            fill="#111224"
            d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z"
          ></path>
          <path
            fill="#111224"
            d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z"
          ></path>
          <path
            fill="#111224"
            d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z"
          ></path>
        </svg>
      </div>

      <div className="absolute border border-zinc-300 top-[100%] rounded-xl right-0 w-64 py-3 z-50 bg-white group-hover:flex flex-col items-center hidden px-1 gap-2">
        <p className="w-full px-2">Filters</p>

        <div className="w-full">
          <div className="flex pl-1 flex-wrap w-full">
            <AnimatePresence initial="false" mode="popLayout">
              {stateFilters.map((filter, index) => {
                let isToday = filter === "Today";
                let isThisWeek = filter === "This Week";
                let isThisMonth = filter === "This Month";
                let isLow = filter === "Low";
                let isHigh = filter === "High";
                let isMedium = filter === "Medium";
                let isKeyword =
                  !isThisMonth &&
                  !isLow &&
                  !isHigh &&
                  !isMedium &&
                  !isToday &&
                  !isThisWeek;
                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: {
                        duration: 0.1,
                      },
                      layout: {
                        duration: 0.3,
                      },
                    }}
                    className={`px-2 pl-3 py-1 mr-1 my-1 rounded-full border-2
                ${isToday && "border-orange-400 bg-orange-300"}
                ${isThisWeek && "border-cyan-400 bg-cyan-300"}
                ${isThisMonth && "border-violet-400 bg-violet-300"}
                ${isLow && "border-green-400 bg-green-300"}
                ${isHigh && "border-red-400 bg-red-300"}
                ${isMedium && "border-amber-400 bg-amber-300"}
                ${isKeyword && "border-yellow-400 bg-yellow-300"}
                flex items-center justify-center gap-1`}
                  >
                    <p className="text-sm text-[#000] "> {filter}</p>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        removeFilter(filter);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="cancel"
                        height="18"
                        width="18"
                      >
                        <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full relative cursor-pointer h-8 flex gap-2 items-center justify-between pl-2 rounded filter-option px-2">
            <div className="w-full flex justify-between items-center h-full">
              <p className="text-sm text-[#333]">Deadline </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  id="chevron"
                  height="20"
                  width="20"
                >
                  <path d="M11 10L7.859 6.58a.695.695 0 0 1 0-.978.68.68 0 0 1 .969 0l3.83 3.908a.697.697 0 0 1 0 .979l-3.83 3.908a.68.68 0 0 1-.969 0 .695.695 0 0 1 0-.978L11 10z"></path>
                </svg>
              </div>
            </div>
            <div className="h-28 w-40 border border-zinc-300 bg-white absolute right-[99%] top-[50%] -translate-y-2/4 rounded hidden filter-selection flex-col justify-evenly">
              <div
                onClick={(e) => {
                  selectThisFilter(e, "Today");
                }}
                className="flex items-center px-3 gap-2"
              >
                <input
                  className="pointer-events-none"
                  type="radio"
                  id="Today"
                />
                <p className="text-sm pointer-events-none text-[#444]">Today</p>
              </div>
              <div
                onClick={(e) => {
                  selectThisFilter(e, "This Week");
                }}
                className="flex items-center px-3 gap-2"
              >
                <input
                  className="pointer-events-none"
                  type="radio"
                  id="This Week"
                />
                <p className="text-sm pointer-events-none text-[#444]">
                  This week
                </p>
              </div>
              <div
                onClick={(e) => {
                  selectThisFilter(e, "This Month");
                }}
                className="flex items-center px-3 gap-2"
              >
                <input
                  className="pointer-events-none"
                  type="radio"
                  id="This Month"
                />
                <p className="text-sm pointer-events-none text-[#444]">
                  This Month
                </p>
              </div>
            </div>
          </div>
          <div className="w-full relative cursor-pointer h-8 flex gap-2 items-center justify-between pl-2 rounded filter-option px-2">
            <div className="w-full flex justify-between items-center h-full">
              <p className="text-sm text-[#333]">Priority </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  id="chevron"
                  height="20"
                  width="20"
                >
                  <path d="M11 10L7.859 6.58a.695.695 0 0 1 0-.978.68.68 0 0 1 .969 0l3.83 3.908a.697.697 0 0 1 0 .979l-3.83 3.908a.68.68 0 0 1-.969 0 .695.695 0 0 1 0-.978L11 10z"></path>
                </svg>
              </div>
            </div>
            <div className="h-28 w-40 border border-zinc-300 bg-white absolute right-[99%] top-[50%] -translate-y-2/4 rounded hidden filter-selection flex-col justify-evenly">
              <div
                onClick={(e) => {
                  selectThisFilter(e, "Low");
                }}
                className="flex items-center px-3 gap-2"
              >
                <input className="pointer-events-none" type="radio" id="Low" />
                <p className="text-sm text-[#444] pointer-events-none">Low</p>
              </div>
              <div
                onClick={(e) => {
                  selectThisFilter(e, "Medium");
                }}
                className="flex items-center px-3 gap-2"
              >
                <input
                  className="pointer-events-none"
                  type="radio"
                  id="Medium"
                />
                <p className="text-sm text-[#444] pointer-events-none">
                  Medium
                </p>
              </div>
              <div
                onClick={(e) => {
                  selectThisFilter(e, "High");
                }}
                className="flex items-center px-3 gap-2"
              >
                <input className="pointer-events-none" type="radio" id="High" />
                <p className="text-sm text-[#444] pointer-events-none">High</p>
              </div>
            </div>
          </div>
          <div className="w-full relative cursor-pointer h-8 flex gap-2 items-center justify-between pl-2 rounded filter-option px-2">
            <div className="w-full flex justify-between items-center h-full">
              <p className="text-sm text-[#333]">Keyword </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  id="chevron"
                  height="20"
                  width="20"
                >
                  <path d="M11 10L7.859 6.58a.695.695 0 0 1 0-.978.68.68 0 0 1 .969 0l3.83 3.908a.697.697 0 0 1 0 .979l-3.83 3.908a.68.68 0 0 1-.969 0 .695.695 0 0 1 0-.978L11 10z"></path>
                </svg>
              </div>
            </div>
            <div className="h-auto w-60 p-2 py-3 border gap-2 border-zinc-300 bg-white absolute right-[99%] top-[50%] -translate-y-2/4 rounded hidden filter-selection flex-col justify-evenly">
              <div className="w-full">
                <input
                  type="text"
                  onChange={(e) => setKeyWord(e.target.value)}
                  placeholder="Enter Keyword..."
                  value={keyword}
                  maxLength="10"
                  className="p-1 placeholder:text-sm px-2 rounded outline-none w-full border border-[#ccc] font-lexend"
                />
                <p className="text-[10px] text-zinc-500 m-1">
                  Maximum 10 characters
                  <span className="text-red-600">*</span>
                </p>
              </div>
              <div className="flex gap-2">
                <div
                  onClick={() => {
                    setKeyWord(" ");
                  }}
                  className="h-8 w-2/4 grid place-items-center rounded border border-gray-300"
                >
                  <p className="text-sm text-[#444]">Cancel</p>
                </div>
                <div
                  onClick={() => {
                    addFilter(keyword);
                    setKeyWord("");
                  }}
                  className="h-8 w-2/4 grid place-items-center rounded  bg-blue-500"
                >
                  <p className="text-sm text-white">Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TasksBody = () => {
  const finalSpaceCharacters = [
    {
      id: "gary",
      name: "Gary Goodspeed",
    },
    {
      id: "cato",
      name: "Little Cato",
    },
    {
      id: "kvn",
      name: "KVN",
    },
    {
      id: "mooncake",
      name: "Mooncake",
    },
    {
      id: "quinn",
      name: "Quinn Ergon",
    },
  ];

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const [activeView, setActiveView] = useState("Board");
  const boardView = activeView === "Board";
  const tableView = activeView === "Table";
  const listView = activeView === "List";

  const toggleView = (view) => {
    setActiveView(view);
  };

  // dragging logic;

  const itemsFromBackend = [
    {
      id: "item1",
      title: "Design the Landing page and add responsiveness to footer",
      priority: "High",
      tag: "Design",
      subtasks: [
        {
          title: "Create wireframes",
          status: "Incomplete",
        },
        {
          title: "Design mockups",
          status: "Incomplete",
        },
        {
          title: "Collect feedback",
          status: "Incomplete",
        },
        {
          title: "Implement changes",
          status: "Incomplete",
        },
        {
          title: "Finalize designs",
          status: "Incomplete",
        },
      ],
      color: "teal",
      description:
        "This is a short description about the project above and it is acting as a placeholder and nothing more",
    },
    {
      id: "item2",
      title: "Deploy the bkmrk backend",
      priority: "Low",
      tag: "Development",
      subtasks: [
        {
          title: "Create wireframes",
          status: "Incomplete",
        },
        {
          title: "Design mockups",
          status: "Incomplete",
        },
      ],
      color: "purple",
      description:
        "This is a short description about the project above and it is acting as a placeholder and nothing more",
    },
    {
      id: "item3",
      title: "Check out some websites",
      priority: "Medium",
      tag: "Web dev",
      subtasks: [
        {
          title: "Create wireframes",
          status: "Incomplete",
        },
        {
          title: "Design mockups",
          status: "Incomplete",
        },
        {
          title: "Collect feedback",
          status: "Incomplete",
        },
        {
          title: "Finalize designs",
          status: "Incomplete",
        },
      ],
      color: "lime",
      description:
        "This is a short description about the project above and it is acting as a placeholder and nothing more",
    },
    {
      id: "item4",
      title: "Complete my assigment",
      priority: "High",
      tag: "Assignment",
      subtasks: [
        {
          title: "Create wireframes",
          status: "Incomplete",
        },
      ],
      color: "emerald",
      description:
        "This is a short description about the project above and it is acting as a placeholder and nothing more",
    },
    {
      id: "item5",
      title: "Take a nap",
      priority: "High",
      tag: "Leisure",
      subtasks: [
        {
          title: "Create wireframes",
          status: "Incomplete",
        },
        {
          title: "Design mockups",
          status: "Incomplete",
        },
      ],
      color: "purple",
      description:
        "This is a short description about the project above and it is acting as a placeholder and nothing more",
    },
  ];
  const [items, setItems] = useState(itemsFromBackend);

  const columnsFromBackend = {
    column1: {
      name: "Requested",
      items: items,
    },
    column2: {
      name: "To do",
      items: [],
    },
    column3: {
      name: "In Progress",
      items: [],
    },
    column4: {
      name: "Done",
      items: [],
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
      console.log(destination);
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <main className="w-full min-h-[50vh] mt-3">
      <section className="w-full h-12">
        <div className="flex items-center gap-2 relative translate-y-[1px] z-30 pl-7">
          <div
            onClick={() => {
              setActiveView("Board");
            }}
            className={`h-10 cursor-pointer grid place-items-center rounded-t-md border relative border-zinc-300 transition-all duration-200 ease ${
              boardView
                ? "z-30 bg-white border-b-white w-28"
                : "bg-zinc-100 w-20 text-[#888]"
            }`}
          >
            <p className={``}>Board</p>
          </div>
          <div
            onClick={() => {
              setActiveView("Table");
            }}
            className={`h-10 cursor-pointer grid place-items-center rounded-t-md border relative border-zinc-300 transition-all duration-200 ease ${
              tableView
                ? "z-30 bg-white border-b-white w-28"
                : "bg-zinc-100 w-20 text-[#888]"
            }`}
          >
            <p className="">Table</p>
          </div>
          <div
            onClick={() => {
              setActiveView("List");
            }}
            className={`h-10 cursor-pointer grid place-items-center rounded-t-md border relative border-zinc-300 transition-all duration-200 ease ${
              listView
                ? "z-30 bg-white border-b-white w-28"
                : "bg-zinc-100 w-20 text-[#888]"
            }`}
          >
            <p className="">List</p>
          </div>
        </div>
        <div className="w-full border-t border-zinc-300  z-20 bg-white"></div>
      </section>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <section className="w-full h-[78vh] grid grid-cols-4">
          {Object.entries(columns).map(([columnId, column], index) => {
            const isRequested = column.name === "Requested";
            const isTodo = column.name === "To do";
            const isProgress = column.name === "In Progress";
            const isDone = column.name === "Done";
            return (
              <div key={index} className="w-full h-full pl-7 py-4">
                <div className="w-full h-full border bg-zinc-50 task-column border-zinc-200 p-2 rounded-lg flex flex-col gap-2">
                  <div className="flex w-full h-10  items-center justify-between pl-2">
                    <span className="flex items-center gap-3">
                      <div
                        className={`h-[0.6rem] w-[0.6rem]
                      ${isRequested && "bg-blue-500"}
                      ${isTodo && "bg-green-500"}
                      ${isProgress && "bg-amber-500"}
                      ${isDone && "bg-red-500"}
                       rounded-full`}
                      ></div>
                      <div className="flex gap-3">
                        <p className="text-[#444]">{column.name}</p>
                        <p className="">{column.items.length}</p>
                      </div>{" "}
                    </span>

                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        id="more-vert"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full h-14 rounded-md border border-zinc-300 bg-white grid place-items-center cursor-pointer hover:border-zinc-400">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="add"
                        x="0"
                        y="0"
                        height="30"
                        width="30"
                        version="1.1"
                        viewBox="0 0 29 29"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M14.5 22V7M7 14.5h15"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#F8E1D7"
                              : "",
                          }}
                          className="w-full max-h-[60vh] min-h-[10rem] tasks-container p-2 bg-zinc-200 tranisition-all duration-200 ease flex flex-col gap-2 overflow-auto"
                        >
                          {column.items.map((item, index) => {
                            const colors = "purple";
                            const bgColor = `bg-${item.color}-200`;
                            const borderColor = `border-${item.color}-400`;
                            const textColor = `text-${item.color}-600`;
                            console.log(borderColor, textColor);
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  const addSubtask = (e) => {
                                    let title =
                                      e.target.parentNode.previousElementSibling
                                        .value;
                                    let subtasksArr = item.subtasks;
                                    let subtaskObj = {
                                      title,
                                      status: "Incomplete",
                                    };
                                    subtasksArr.push(subtaskObj);
                                    setItems([...items, item]);
                                    console.log(subtasksArr);
                                  };
                                  const dismissSubtaskForm = (e) => {
                                    let input = e.target.parentNode.parentNode;
                                    e.target.parentNode.previousElementSibling.value =
                                      "";
                                    const isInputHidden =
                                      input.className.includes("hidden");
                                    if (!isInputHidden) {
                                      input.classList.remove("flex");
                                      input.classList.add("hidden");
                                    }
                                  };

                                  const percentageSubtasksCompleted =
                                    (item.subtasks.filter(
                                      (task) => task.status === "Complete"
                                    ).length /
                                      item.subtasks.length) *
                                    100;

                                  return (
                                    <div
                                      key={index}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        borderColor: snapshot.isDragging
                                          ? "black"
                                          : "",
                                        transform: snapshot.isDragging
                                          ? "rotate(50deg) !important"
                                          : "",
                                        ...provided.draggableProps.style,
                                      }}
                                      className="border border-zinc-300 bg-white h-auto w-full rounded p-3 flex flex-col gap-3"
                                    >
                                      <div className="w-full flex gap-2 items-center">
                                        <div
                                          className={`border 
                                          ${
                                            item.priority === "High" &&
                                            "bg-red-200 border-red-600 text-red-700"
                                          } 
                                          ${
                                            item.priority === "Low" &&
                                            "bg-green-200 border-green-600 text-green-700"
                                          } 
                                          ${
                                            item.priority === "Medium" &&
                                            "bg-blue-200 border-blue-600 text-blue-700"
                                          } 

                                          rounded-full px-2`}
                                        >
                                          <p className="text-sm">
                                            {item.priority}
                                          </p>
                                        </div>
                                        <div
                                          className={`border
                                          ${
                                            item.color === "purple" &&
                                            "bg-purple-200 border-purple-600 text-purple-700"
                                          }
                                          ${
                                            item.color === "lime" &&
                                            "bg-lime-200 border-lime-600 text-lime-700"
                                          }
                                          ${
                                            item.color === "teal" &&
                                            "bg-teal-200 border-teal-600 text-teal-700"
                                          }
                                          ${
                                            item.color === "emerald" &&
                                            "bg-emerald-200 border-emerald-600 text-emerald-700"
                                          }
                                          rounded-full px-2`}
                                        >
                                          <p className="text-sm font-regular">
                                            {item.tag}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="w-full flex flex-col gap-1">
                                        <h1 className="text-lg font-medium text-[#444] max-w-full break-words h-auto">
                                          {item.title}
                                        </h1>{" "}
                                        <p className="break-words h-auto text-md text-[#888]">
                                          {item.description}
                                        </p>
                                      </div>
                                      <div>
                                        <ul className="p-2 pt-0 flex flex-col gap-1">
                                          {item.subtasks.map((subtask) => {
                                            const markDone = () => {
                                              if (
                                                subtask.status === "Complete"
                                              ) {
                                                subtask.status = "Incomplete";
                                                console.log(item)
                                                setItems([...items, item]);
                                              } else {
                                                subtask.status = "Complete";
                                                console.log(item)
                                                setItems([...items, item]);
                                              }
                                            };
                                            return (
                                              <li className="flex items-center gap-2">
                                                <input
                                                  onClick={markDone}
                                                  type="checkbox"
                                                  className="subtask-checkbox"
                                                />
                                                <p className="text-[15px] text-[#222]">
                                                  {subtask.title}
                                                </p>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                        <div className="mx-2 h-9 hidden border border-zinc-400 rounded items-center justify-between pr-1">
                                          <input
                                            type="text"
                                            className="rounded p-1 px-2 outline-none placeholder:text-sm"
                                            placeholder="New Subtask.."
                                          />
                                          <div className="flex h-full items-center pr-2">
                                            <div
                                              onClick={(e) => {
                                                addSubtask(e);
                                                dismissSubtaskForm(e);
                                              }}
                                              className="cursor-pointer"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="35"
                                                height="35"
                                                viewBox="0 0 512 512"
                                                id="tick"
                                                className="pointer-events-none"
                                              >
                                                <path d="M223.9 329.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z"></path>
                                              </svg>
                                            </div>{" "}
                                            <div
                                              onClick={(e) => {
                                                dismissSubtaskForm(e);
                                              }}
                                              className="cursor-pointer"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                id="cancel"
                                                width="25"
                                                height="25"
                                                className="pointer-events-none"
                                              >
                                                <path
                                                  strokeWidth="1"
                                                  d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                                                ></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="px-2 text-[#666] mt-2">
                                          <hr className="mb-2" />
                                          <span
                                            onClick={(e) => {
                                              let input =
                                                e.target.parentNode
                                                  .previousElementSibling;
                                              const isInputHidden =
                                                input.className.includes(
                                                  "hidden"
                                                );
                                              if (isInputHidden) {
                                                input.classList.remove(
                                                  "hidden"
                                                );
                                                input.classList.add("flex");
                                              }
                                            }}
                                            className="cursor-pointer"
                                          >
                                            + Add Subtask
                                          </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                          <div className="h-2 rounded-full overflow-hidden w-[85%] bg-zinc-300 flex items-center justify-start">
                                            <div
                                              style={{
                                                width: `${percentageSubtasksCompleted}%`,
                                              }}
                                              className={`h-full rounded-full ${
                                                percentageSubtasksCompleted <
                                                  20 && "bg-red-600"
                                              } ${
                                                percentageSubtasksCompleted <
                                                  40 &&
                                                percentageSubtasksCompleted >=
                                                  20 &&
                                                "bg-red-400"
                                              }

                                              ${
                                                percentageSubtasksCompleted <
                                                  60 &&
                                                percentageSubtasksCompleted >=
                                                  40 &&
                                                "bg-green-400"
                                              }

                                              ${
                                                percentageSubtasksCompleted <
                                                  80 &&
                                                percentageSubtasksCompleted >=
                                                  60 &&
                                                "bg-green-600"
                                              }   ${
                                                percentageSubtasksCompleted >=
                                                  80 && "bg-lime-600"
                                              }
                                              `}
                                            ></div>
                                          </div>
                                          <div>
                                            <span>
                                              {
                                                item.subtasks.filter(
                                                  (task) =>
                                                    task.status === "Complete"
                                                ).length
                                              }
                                              /{item.subtasks.length}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </section>
      </DragDropContext>
    </main>
  );
};

export default Dashboard;
