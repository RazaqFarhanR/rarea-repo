import room from "../assets/room.gif"
import Icon from "../components/Icon"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"
import portfolioData from "../data.json";

const ProjectCard = ({ project }: { project: any }) => {
  const [flipDirection, setFlipDirection] = useState<'left' | 'right' | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setFlipDirection(x < rect.width / 2 ? 'left' : 'right');
  };

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <Link to={`/projects/${project.slug}`} className="block h-full cursor-pointer hover:scale-[1.02] transition-transform">
      <div
        className={`card-container h-full ${isFlipped ? 'is-flipped' : ''} ${flipDirection === 'left' ? 'hover-left' : (flipDirection === 'right' ? 'hover-right' : '')}`}
        onMouseEnter={handleMouseEnter}
      >
        <div className="card bg-[#16213E] rounded-xl" >
          <div className="card-front p-3 h-full flex flex-col relative">
            <button
              onClick={handleFlip}
              className="absolute top-5 right-5 z-20 bg-[#1A1A2E]/80 border border-white/20 p-2 rounded-full text-white hover:text-[#E94560] active:scale-90 transition-all md:hidden"
              title="Flip Card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>

            {project.thumbnail.includes('placehold.co') ? (
              <div className="w-full h-40 lg:h-48 bg-[#1E1E1E] rounded-lg flex flex-col items-center justify-center p-4">
                <span className="text-[#E94560] font-azaret text-xs font-semibold tracking-widest uppercase mb-2">Project</span>
                <h2 className="text-white font-azaret font-bold text-center text-lg lg:text-xl line-clamp-2">{project.title}</h2>
              </div>
            ) : (
              <img className="w-full h-40 lg:h-48 object-cover rounded-lg" src={project.thumbnail} alt={project.title} />
            )}
            <div className="flex-grow flex flex-col">
              <h1 className="text-xl lg:text-2xl text-white font-azaret font-bold mt-2">{project.title}</h1>
              <div className="mt-4 h-24 text-ellipsis overflow-hidden">
                <p className="text-white text-sm font-azaret leading-5 line-clamp-4">{project.description}</p>
              </div>
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag: string, i: number) => (
                  <span key={i} className="bg-[#E94560]/10 border border-[#E94560]/50 text-[#E94560] py-1 px-3 rounded-full font-azaret font-bold text-[10px] lg:text-xs whitespace-nowrap">{tag}</span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-[#1A1A2E] border border-white/20 text-white/70 py-1 px-2 rounded-full font-azaret font-bold text-[10px] lg:text-xs">+{project.tags.length - 3}</span>
                )}
              </div>
            </div>
          </div>
          <div className="card-back bg-[#1A1A2E] rounded-xl border-2 border-[#E94560] p-5 lg:p-6 flex flex-col justify-between h-full shadow-lg overflow-hidden relative">
            <button
              onClick={handleFlip}
              className="absolute top-5 right-5 z-20 bg-[#16213E]/80 border border-[#E94560]/30 p-2 rounded-full text-white hover:text-[#E94560] active:scale-90 transition-all md:hidden"
              title="Flip Back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
            </button>

            <div className="flex flex-col gap-3 lg:gap-4 flex-grow justify-center">
              <div>
                <h3 className="text-[#E94560] font-azaret text-xs uppercase tracking-widest font-bold mb-1">Role</h3>
                <p className="text-white font-azaret text-sm lg:text-base font-semibold">{project.role}</p>
              </div>

              <div>
                <h3 className="text-[#E94560] font-azaret text-xs uppercase tracking-widest font-bold mb-1">Made With</h3>
                <p className="text-white font-azaret text-sm lg:text-base font-semibold">{project.client}</p>
              </div>

              <div>
                <h3 className="text-[#E94560] font-azaret text-xs uppercase tracking-widest font-bold mb-1">Impact</h3>
                <p className="text-white font-azaret text-sm font-semibold leading-relaxed line-clamp-3">{project.impact}</p>
              </div>

              <div>
                <h3 className="text-[#E94560] font-azaret text-xs uppercase tracking-widest font-bold mb-1">Overview</h3>
                <p className="text-white/80 font-azaret text-xs lg:text-sm leading-relaxed line-clamp-4">{project.background}</p>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-[#E94560]/30 flex justify-end shrink-0">
              <span className="text-[#E94560] text-xs lg:text-sm font-azaret font-bold hover:underline decoration-2 underline-offset-4">View Case Study &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

function App() {
  return (
    <div className='bg-[#1A1A2E] w-full min-h-screen h-auto'>
      <header className='w-full flex justify-between items-center m-auto max-w-[172ch] px-5 lg:px-8 py-2 lg:py-5'>
        <h1 className='text-white font-azaret text-3xl lg:text-5xl'>HanR</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-[#E94560] font-azaret text-lg lg:text-2xl list-none border-b-2 border-[#E94560]">Home</Link>
          <Link to="/projects" className="text-white font-azaret text-lg lg:text-2xl list-none">Projects</Link>
          <Link to="/sandbox" className="hidden text-white font-azaret text-lg lg:text-2xl list-none">Sandbox</Link>
        </nav>
      </header>

      <div className="m-auto max-w-[140ch] px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-8 mt-2">
          <div className="col-span-5 py-12 lg:py-20">
            <div className="bg-[#16213E] p-5 lg:p-8 rounded-xl border-4 border-white relative">
              <div className="absolute top-3 right-3 lg:top-8 lg:right-8 flex items-center gap-1.5 lg:gap-2 bg-[#1A1A2E]/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#E94560]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-white/90 font-azaret text-xs lg:text-sm font-semibold tracking-wide">Bandung, Indonesia</span>
              </div>
              <h1 className="text-2xl lg:text-5xl font-azaret font-semibold text-white">Hello World</h1>
              <p className="text-xl lg:text-4xl font-azaret font-semibold text-white">I'm <span className="text-[#E94560]">Razaq Farhan</span></p>
              <div className="my-6 text-white text-sm lg:text-lg font-azaret leading-relaxed space-y-3 text-justify">
                <p>
                  A dedicated <strong>Full-Stack Developer</strong> blending creativity and logic to build seamless digital experiences. I specialize in crafting scalable end-to-end solutions using modern technologies like <strong>React, Next.js, Node.js, and Express</strong>.
                </p>
                <p>
                  Currently, I am actively exploring the world of <strong>IoT</strong>—designing and building custom hardware and integrating it for real-time applications using <strong>MQTT</strong>.
                </p>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <span className="text-[#E94560] font-azaret text-sm lg:text-lg font-bold">Let's Connect &rarr;</span>
                <div className="flex gap-3 items-center">
                  <a href="https://linkedin.com/in/razaq-farhan-hanr" target="_blank" rel="noreferrer" className="text-white hover:text-[#E94560] transition-colors active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-7 lg:h-7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href="https://github.com/RazaqFarhanR" target="_blank" rel="noreferrer" className="text-white hover:text-[#E94560] transition-colors active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-7 lg:h-7"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                </div>
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
            <Icon name="windows" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="ubuntu" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="nginx" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="git" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="vscode" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="arduino" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="js" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="ts" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="golang" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="nodejs" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="express" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="bun" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="react" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="next" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="tailwind" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="mysql" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="mariadb" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="postgresql" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
            <Icon name="figma" className="w-8 h-8 lg:w-[52px] lg:h-[52px]" />
          </div>
        </div>

        <div className="my-12">
          <div className="flex justify-between items-end mb-4">
            <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white">Featured Projects</h1>
            <Link to="/projects" className="text-[#E94560] font-azaret text-sm lg:text-base font-bold hover:underline underline-offset-4 decoration-2 active:scale-95 transition-all mb-1">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {portfolioData.projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="my-12">
          <h1 className="text-2xl lg:text-4xl font-azaret font-semibold text-white mt-4 mb-10">The Journey so Far</h1>
          <div className="grid gap-6 relative after:rounded-xl after:w-1 md:after:w-4 after:absolute after:bg-[#16213E] after:h-full after:top-0 after:left-[28px] after:-ml-[2px] md:after:left-1/2 md:after:-ml-[8px]">
            {portfolioData.journeys.map((item, index) => {
              const getIcon = (id: number) => {
                switch (id) {
                  case 1: // Freelance
                    return (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 text-[#E94560]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                      </svg>
                    );
                  case 2: // IoT
                    return (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 text-[#E94560]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    );
                  case 3: // Intern
                    return (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 text-[#E94560]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 18.4v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 14.15m17.25 0a2.25 2.25 0 0 1-2.25 2.25H5.25a2.25 2.25 0 0 1-2.25-2.25M9 3h6.75M12 9v2.25" />
                      </svg>
                    );
                  case 4: // Student
                  default:
                    return (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 text-[#E94560]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    );
                }
              };

              return (
                <div key={item.id} className={`z-10 relative flex w-full justify-start ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {/* Timeline Icon Marker */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1A1A2E] border-2 md:border-4 border-[#E94560] shadow-[0_0_10px_rgba(233,69,96,0.3)]">
                    {getIcon(item.id)}
                  </div>

                  <div className={`w-full md:w-[56%] flex justify-start pl-16 md:pl-0 ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className={`bg-[#16213E] w-full md:w-[78%] h-full rounded-xl flex ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} p-4 md:p-5 justify-between border-2 border-transparent hover:border-[#E94560]/40 transition-all shadow-lg`}>
                      <div className={`w-full ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                        <h1 className="text-white font-azaret text-lg md:text-xl font-bold">{item.role}</h1>
                        <h2 className="font-azaret text-sm font-bold text-[#E94560] mt-1">{item.institution}</h2>
                        <div className="text-sm text-white/90 font-azaret font-medium my-3 text-justify leading-relaxed">
                          <p>{item.description}</p>
                        </div>
                        <p className="text-white/60 text-xs md:text-sm font-azaret font-semibold mt-2">{item.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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