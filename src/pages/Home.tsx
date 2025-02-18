import room from "../assets/room.gif"
import Icon from "../components/Icon"
import Project from "../assets/project.png"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='bg-[#1A1A2E] w-full min-h-screen h-auto'>
      <header className='w-full flex justify-between items-center px-4 py-2 lg:px-16 lg:py-5'>
        <h1 className='text-white font-azaret text-3xl lg:text-5xl'>HanR</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-white font-azaret text-lg lg:text-2xl list-none">Home</Link>
          <Link to="/sandbox" className="text-white font-azaret text-lg lg:text-2xl list-none">Sandbox</Link>
        </nav>
      </header>

      <div className="px-8 grid grid-cols-1 md:px-12 lg:px-52 md:grid-cols-8 mt-2">
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

      <div className="px-8 lg:px-52 lg:my-12">
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

      <div className="px-8 lg:px-52 my-12">
        <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white">Featured Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          <div className="p-3 w-[100%] bg-[#16213E] rounded-xl">
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
          
          <div className="p-3 w-[100%] bg-[#16213E] rounded-xl">
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

          <div className="p-3 w-[100%] bg-[#16213E] rounded-xl">
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
        </div>
      </div>

      <div className="px-8 lg:px-52 my-12">
        <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white">The Journey so Far</h1>
        <div className="grid gap-4 h-max">
          {(() => {
            let rows = [];
            for (let i = 0; i < 6; i++) {
              if (i%2!=0) {
                rows.push(
                  <div className="z-10 grid grid-cols-9 gap-2">
                    <div className="col-start-5 bg-green-200">
      
                    </div>
                    <div className="col-span-4 col-end-10 bg-red-200 h-32 rounded-lg">
      
                    </div>
                  </div>
                );
              } else {
                rows.push(
                  <div className="z-10 grid grid-cols-9 gap-2">
                    <div className="col-span-4 bg-red-200 h-32 rounded-lg">

                    </div>
                    <div className="bg-green-200">

                    </div>
                  </div>
                )
              }
            }
            return rows;
          })()}
        </div>
      </div>

      <div className="flex justify-center py-2 lg:py-4 border-t-2 border-white">
        <h1 className="text-sm lg:text-base font-azaret font-semibold text-white">Develop by <span className="text-[#E94560]">Farhan</span> 2025</h1>
      </div>
    </div>
  )
}

export default App