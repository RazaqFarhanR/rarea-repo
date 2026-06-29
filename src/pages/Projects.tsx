import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data.json';
import './Home.css';

const Projects: React.FC = () => {
  return (
    <div className="bg-[#1A1A2E] w-full min-h-screen h-auto">
      <header className="w-full flex justify-between items-center m-auto max-w-[172ch] px-5 lg:px-8 py-2 lg:py-5">
        <h1 className="text-white font-azaret text-3xl lg:text-5xl">HanR</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-white font-azaret text-lg lg:text-2xl list-none">Home</Link>
          <Link to="/projects" className="text-[#E94560] font-azaret text-lg lg:text-2xl list-none border-b-2 border-[#E94560]">Projects</Link>
          <Link to="/sandbox" className="hidden text-white font-azaret text-lg lg:text-2xl list-none">Sandbox</Link>
        </nav>
      </header>

      <div className="m-auto max-w-[140ch] px-5 lg:px-8 py-12">
        <h1 className="text-3xl lg:text-5xl font-azaret font-bold text-white mb-8">All Projects</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {portfolioData.projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="block h-full">
              <div className="h-full cursor-pointer hover:scale-[1.02] transition-transform flex flex-col">
                <div className="bg-[#16213E] rounded-xl shadow-lg border-2 border-transparent hover:border-[#E94560] transition-colors h-full flex flex-col">
                  <div className="p-3 h-full flex flex-col flex-grow">
                    {project.thumbnail.includes('placehold.co') ? (
                      <div className="w-full h-40 lg:h-48 bg-[#1E1E1E] rounded-lg flex flex-col items-center justify-center p-4">
                        <span className="text-[#E94560] font-azaret text-xs font-semibold tracking-widest uppercase mb-2">Project</span>
                        <h2 className="text-white font-azaret font-bold text-center text-lg lg:text-xl line-clamp-2">{project.title}</h2>
                      </div>
                    ) : (
                      <img className="w-full h-40 lg:h-48 object-cover rounded-lg" src={project.thumbnail} alt={project.title} />
                    )}
                    <div className="flex-grow flex flex-col mt-4">
                      <h1 className="text-xl lg:text-2xl text-white font-azaret font-bold">{project.title}</h1>
                      <div className="mt-4 h-24 text-ellipsis overflow-hidden">
                        <p className="text-white text-sm font-azaret leading-5 line-clamp-4">{project.description}</p>
                      </div>
                      <div className="mt-auto pt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="bg-[#E94560]/10 border border-[#E94560]/50 text-[#E94560] py-1 px-3 rounded-full font-azaret font-bold text-[10px] lg:text-xs whitespace-nowrap">{tag}</span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="bg-[#1A1A2E] border border-white/20 text-white/70 py-1 px-2 rounded-full font-azaret font-bold text-[10px] lg:text-xs">+{project.tags.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-2 lg:py-4 border-t-2 border-white">
        <h1 className="text-sm lg:text-base font-azaret font-semibold text-white">Develop by <span className="text-[#E94560]">Farhan</span> 2025</h1>
      </div>
    </div>
  );
};

export default Projects;
