import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectCard from "./ProjectCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen fixed inset-0">
        <header className="flex items-center gap-6 py-2 text-gray-600 font-medium w-[1080px] mx-auto top-0 blur-background ">
          <div className="ml-auto">home</div>
          <div>work</div>
          <div>contact</div>
          <div className="px-5 py-3 bg-gray-800 text-white rounded-3xl">
            Book a call
          </div>
        </header>
      </div>
      <div className="max-w-[1080px] mx-auto my-20">
        <div className="text-center text-7xl font-extralight mt-44 mb-32">
          Hello, I’m <b className="font-light">Piyush.</b> <br />
          <p className="text-5xl my-3">
          I develop <b>full-stack solutions</b> for seamless digital experiences.
          {/* I engineer <b>end-to-end</b> digital solutions, from frontend to backend. */}
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-2 py-10 w-full h-[680px] ">
          <div className="row-span-2 bg-gray-200 rounded-2xl p-6 h-full flex flex-col">
            <div className="bg-gray-300 rounded-full h-24 w-24 my-3 overflow-hidden ">
              <img src="https://framerusercontent.com/images/tesEBq7lPhKKSxibzhNWCQJUKmY.png" alt="" />
            </div>

            <div className="text-2xl">Piyush Kumar</div>
            <div className="text-base font-light">
               Full Stack Web Developer
            </div>
            
            <div className="text-2xl font-extralight py-auto my-10">
              
            I implement <b>end-to-end</b> solutions, merging front-end and back-end expertise. 
            </div>
            <div className="text-base font-light flex gap-2 underline mt-auto">
                <a href="">Github</a>
                <a href="">LinkedIn</a>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl">
            Frontend
            </div>
          <div className="col-start-2 row-start-2 bg-gray-200 rounded-2xl">
          RESTful API Development
          </div>
          <div className="col-start-3 row-start-1 bg-gray-200 rounded-2xl">
          Database Optimization
          </div>
          <div className="col-start-3 bg-gray-200 rounded-2xl">
            Ideate, develop, and deploy.
            </div>
        </div>

       
        <div className="my-20 text-center h-full text-2xl font-extralight">
          I worked with
          <div className="flex justify-center gap-10 my-5 ">
            <div>
              React
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
            <div>
              Next js
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
            <div>
              Express
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
            <div>
              TypeScript
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
            <div>
              Mongo DB
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
            
            <div>
              Prisma
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
            <div>
              Tailwind
              <img
                className="w-20 contrast-50 "
                src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-3xl h-full text-center font-light my-28">
          Projects
          <div className="flex gap-4 justify-between py-10 h-[480px]">
           
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
            
          </div>
          <p className="font-extralight text-2xl">view works → </p>
        </div>
        <div className="flex gap-6 h-[480px] my-20">
          <div className="flex-grow-1 bg-gray-200 rounded-2xl"></div>
          <div className="flex-grow-1 bg-gray-200 rounded-2xl"></div>
        </div>
        <div>© Copyright 2024, Piyush Kumar.</div>
      </div>
    </>
  );
}

export default App;
