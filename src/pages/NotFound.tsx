import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='bg-[#1A1A2E] w-full min-h-screen h-auto'>
        <header className='w-full flex justify-between items-center m-auto max-w-[172ch] px-8 py-2 lg:py-5'>
          <h1 className='text-white font-azaret text-3xl lg:text-5xl'>HanR</h1>
          <nav className="flex space-x-4">
            <Link to="/" className="text-white font-azaret text-lg lg:text-2xl list-none">Home</Link>
            <Link to="/projects" className="text-white font-azaret text-lg lg:text-2xl list-none">Projects</Link>
            <Link to="/sandbox" className="text-white font-azaret text-lg lg:text-2xl list-none">Sandbox</Link>
          </nav>
        </header>
        <div className="flex justify-center">
            <h1 className="text-5xl text-white font-azaret"><span className="text-[#E94560]">404 </span>Not Found</h1>
        </div>
    </div>
  )
}

export default NotFound