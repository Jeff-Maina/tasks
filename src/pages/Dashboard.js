import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main className="w-full min-h-screen h-screen flex">
        <section className="h-full border w-60 absolute overflow-hidden">
            <Sidebar/>
        </section>
        <section className="h-full  flex-grow"></section>
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
      <header className="w-full h-16 border-b "></header>
      <section className="w-full h-auto p-3">
        <h1 className="font-poppins text-[16px] my-4 font-semibold text-[#222]">
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
          <h1 className="font-poppins  font-medium text-[#333]">Home</h1>
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
          <h1 className="font-poppins  font-medium text-[#333]">Reminders</h1>
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
          <h1 className="font-poppins  font-medium text-[#333]">Notes</h1>
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
          <h1 className="font-poppins  font-medium text-[#333]">Tasks</h1>
        </div>
      </section>
      <section className="h-auto w-full p-3 pt-0 pr-1">
        <div
          onClick={() => {
            setProjectsVisible(!areProjectvisible);
          }}
          className="w-full flex items-center gap-1 cursor-pointer justify-between pr-4"
        >
          <h1 className="font-poppins text-[16px] font-semibold text-[#222]">
            All projects
          </h1>
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
                <motion.div className="w-[98%] h-12  border-zinc-300 flex items-center px-2 rounded my-2 cursor-pointer gap-3 hover:bg-light-hover">
                  <div className={`h-2 w-2 rounded ${project.color}`}></div>
                  <h1 className="font-poppins w-3/4 text-sm font-semibold text-[#666] truncate">
                    {project.name}
                  </h1>
                  <div className="bg-[#E3E8EE] w-6 h-6 grid place-items-center rounded-full">
                    <h1 className="text-black font-poppins text-xs font-semibold">
                      {project.tasks > 99 ? "99+" : project.tasks}
                    </h1>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <div className="absolute w-full grid place-items-center bottom-8">
        <div className="w-[90%] mt-10 border border-zinc-400 cursor-pointer hover:bg-black group hover:border-transparent transition-all duration-200 ease bg-zinc-200 h-12 rounded font-poppins cursor flex items-center justify-center gap-1">
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
                stroke="#000"
                className="group-hover:stroke-[#fff] transition-all duration-200 ease"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M14.5 22V7M7 14.5h15"
              ></path>
            </svg>
          </div>

          <p className="text-sm group-hover:text-[#fff] transition-all duration-200 ease">
            Add New project
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
