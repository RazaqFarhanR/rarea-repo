import room from "./assets/room.gif"
import Icon from "./components/Icon"

function App() {
  return (
    <div className='bg-[#1A1A2E] w-full min-h-screen'>
      <nav className='w-full flex justify-between px-16 py-5'>
        <h1 className='text-white font-azaret text-5xl'>HanR</h1>
        <div className="flex space-x-4">
          <h1 className="text-white font-azaret text-2xl">Home</h1>
          <h1 className="text-white font-azaret text-2xl">Sandbox</h1>
        </div>
      </nav>

      <div className="px-52 grid grid-cols-8 mt-2">
        <div className="col-span-5 py-20">
          <div className="bg-[#16213E] p-8 rounded-xl border-4 border-white">
            <h1 className="text-5xl font-azaret font-semibold text-white">Hello World</h1>
            <p className="text-4xl font-azaret font-semibold text-white">I'm <span className="text-[#E94560]">Razaq Farhan</span></p>
            <div className="h-14 my-2 text-ellipsis overflow-hidden">
              <p className="text-white text-lg font-azaret leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex mt-4 justify-between">
              <button className="bg-[#E94560] text-white py-2 px-12 rounded-xl font-azaret">about me</button>
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-8">
          <img className="scale-x-[-1]" src={room} alt="about-gif" />
        </div>
      </div>

      <div className="px-52 my-12">
        <h1 className="text-4xl font-azaret font-semibold text-white">Languages & Tools</h1>
        <div className="bg-[#16213E] w-full p-2 border-4 rounded-xl mt-2 flex justify-center space-x-[10px]">
          <Icon name="windows" className=""/>
          <Icon name="ubuntu" className=""/>
          <Icon name="nginx" className="w-[52px] h-[52px]"/>
          <Icon name="git" className="w-[52px] h-[52px]"/>
          <Icon name="vscode" className="w-[52px] h-[52px]"/>
          <Icon name="arduino" className="w-[52px] h-[52px]"/>
          <Icon name="js" className="w-[52px] h-[52px]"/>
          <Icon name="ts" className="w-[52px] h-[52px]"/>
          <Icon name="golang" className="w-[52px] h-[52px]"/>
          <Icon name="nodejs" className="w-[52px] h-[52px]"/>
          <Icon name="express" className="w-[52px] h-[52px]"/>
          <Icon name="bun" className="w-[52px] h-[52px]"/>
          <Icon name="react" className="w-[52px] h-[52px]"/>
          <Icon name="next" className="w-[52px] h-[52px]"/>
          <Icon name="tailwind" className="w-[52px] h-[52px]"/>
          <Icon name="mysql" className="w-[52px] h-[52px]"/>
          <Icon name="mariadb" className="w-[52px] h-[52px]"/>
          <Icon name="postgresql" className="w-[52px] h-[52px]"/>
          <Icon name="figma" className="w-[52px] h-[52px]"/>

        </div>
      </div>

      <div className="px-52 h-[500px]">
        <h1 className="text-4xl font-azaret font-semibold text-white">Featured Projects</h1>
      </div>
    </div>
  )
}

export default App
