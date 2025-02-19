import room from "../assets/room.gif"
import Icon from "../components/Icon"
import Project from "../assets/project.png"
import { Link } from "react-router-dom";
import "./Home.css"
import { useEffect, useRef, useState } from "react";

function App() {
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  const [totalHeight, setTotalHeight] = useState<number>(0);

  useEffect(() => {
    function calculateTotalHeight() {
      const imgHeight = imgRef.current?.offsetHeight || 0;
      const titleHeight = titleRef.current?.offsetHeight || 0;
      const descriptionHeight = descriptionRef.current?.offsetHeight || 0;
      const tagHeight = tagRef.current?.offsetHeight || 0;

      const total = imgHeight + titleHeight + descriptionHeight + tagHeight + 75;
      setTotalHeight(total);

      console.log("Image Height:", imgHeight);
      console.log("Title Height:", titleHeight);
      console.log("Description Height:", descriptionHeight);
      console.log("Tag Height:", tagHeight);
      console.log("Total Height:", total);
    }

    calculateTotalHeight(); // Hitung saat pertama kali dimuat
    window.addEventListener("resize", calculateTotalHeight); // Update saat resize

    return () => {
      window.removeEventListener("resize", calculateTotalHeight); // Cleanup event listener
    };
  }, []);

  return (
    <div className='bg-[#1A1A2E] w-full min-h-screen h-auto'>
      <header className='w-full flex justify-between items-center m-auto max-w-[172ch] px-8 py-2 lg:py-5'>
        <h1 className='text-white font-azaret text-3xl lg:text-5xl'>HanR</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-white font-azaret text-lg lg:text-2xl list-none">Home</Link>
          <Link to="/sandbox" className="text-white font-azaret text-lg lg:text-2xl list-none">Sandbox</Link>
        </nav>
      </header>

      <div className="m-auto max-w-[140ch] px-8">
        <div className="grid grid-cols-1 md:grid-cols-8 mt-2">
          <div className="col-span-5 py-12 lg:py-20">
            <div className="bg-[#16213E] p-4 lg:p-8 rounded-xl border-4 border-white">
              <h1 className="text-2xl lg:text-5xl font-azaret font-semibold text-white">Hello World</h1>
              <p className="text-xl lg:text-4xl font-azaret font-semibold text-white">I'm <span className="text-[#E94560]">Razaq Farhan</span></p>
              <div className="h-14 my-2 text-ellipsis overflow-hidden">
                <p className="text-white text-xs lg:text-lg font-azaret leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="flex mt-4 justify-between">
                <button className="bg-[#E94560] text-white py-1 px-3 text-sm rounded-md lg:text-base lg:py-2 lg:px-12 lg:rounded-xl font-azaret border-2 border-transparent hover:bg-transparent hover:border-2 hover:!border-[#E94560] hover:text-[#E94560] active:scale-95 transition-all">about me</button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:col-span-3 md:ml-8">
            <img className="scale-x-[-1] w-full" src={room} alt="about-gif" />
          </div>
        </div>

        <div className="lg:my-12">
          <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white">Languages & Tools</h1>
          <div className="bg-[#16213E] w-full flex justify-center flex-wrap p-2 gap-3 border-4 rounded-xl mt-2 lg:!px-0 lg:gap-[6px]">
            <Icon name="windows" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="ubuntu" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="nginx" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="git" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="vscode" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="arduino" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="js" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="ts" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="golang" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="nodejs" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="express" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="bun" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="react" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="next" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="tailwind" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="mysql" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="mariadb" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="postgresql" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
            <Icon name="figma" className="w-8 h-8 lg:w-[52px] lg:h-[52px]"/>
          </div>
        </div>

        <div className="my-12">
          <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white">Featured Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">

            <div className="card-container" style={{height:totalHeight}}>
              <div className="card bg-[#16213E] rounded-xl" >
                <div className="card-front p-3">
                  <img className="w-full" src={Project} alt="project-img" ref={imgRef}/>
                  <div className="">
                    <h1 ref={titleRef} className="text-2xl text-white font-azaret font-bold mt-2">Project 1</h1>
                    <div ref={descriptionRef} className="mt-4 h-16 text-ellipsis overflow-hidden">
                      <p className="text-white text-sm font-azaret leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div ref={tagRef} className="mt-4 grid grid-cols">
                      <p className="bg-[#E94560] py-1 px-6 w-fit rounded-full text-[#1A1A2E] font-bold text-base">React</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-back">

                </div>
              </div>
            </div>
            
            <div className="card-container">
              <div className="card bg-[#16213E] rounded-xl">
                <div className="card-front p-3">
                  <img className="w-full" src={Project} alt="project-img"/>
                  <div className="">
                    <h1 className="text-2xl text-white font-azaret font-bold mt-2">Project 1</h1>
                    <div className="mt-4 h-16 text-ellipsis overflow-hidden">
                      <p className="text-white text-sm font-azaret leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="mt-4 grid grid-cols">
                      <p className="bg-[#E94560] py-1 px-6 w-fit rounded-full text-[#1A1A2E] font-bold text-base">React</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-back">

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card bg-[#16213E] rounded-xl">
                <div className="card-front p-3">
                  <img className="w-full" src={Project} alt="project-img"/>
                  <div className="">
                    <h1 className="text-2xl text-white font-azaret font-bold mt-2">Project 1</h1>
                    <div className="mt-4 h-16 text-ellipsis overflow-hidden">
                      <p className="text-white text-sm font-azaret leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="mt-4 grid grid-cols">
                      <p className="bg-[#E94560] py-1 px-6 w-fit rounded-full text-[#1A1A2E] font-bold text-base">React</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-back">

                </div>
              </div>
            </div>
            x
          </div>
        </div>

        <div className="my-12">
          <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white mt-4">The Journey so Far</h1>
          <div className="grid gap-4 relative after:rounded-xl after:-ml-[6px] after:w-4 after:absolute after:bg-[#16213E] after:h-full after:top-0 after:left-1/2">
            {(() => {
              let rows = [];
              for (let i = 0; i < 4; i++) {
                if (i%2!=0) {
                  rows.push(
                    <div className="z-10 relative flex justify-end">
                      <div className="w-[56%] h-32 flex justify-end">
                        <div className="bg-red-100 w-[78%] h-full rounded-xl">

                        </div>
                      </div>
                    </div>
                  );
                } else {
                  rows.push(
                    <div className="z-10 relative flex justify-start">
                      <div className="w-[56%] h-32 flex justify-start">
                        <div className="bg-red-100 w-[78%] h-full rounded-xl">

                        </div>
                      </div>
                    </div>
                  )
                }
              }
              return rows;
            })()}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-2 lg:py-4 border-t-2 border-white">
        <h1 className="text-sm lg:text-base font-azaret font-semibold text-white">Develop by <span className="text-[#E94560]">Farhan</span> 2025</h1>
      </div>
    </div>
  )
}

export default App