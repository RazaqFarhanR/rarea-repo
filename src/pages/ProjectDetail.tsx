import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import portfolioData from '../data.json';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const project = portfolioData.projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate('/not-found');
      return;
    }

    // Fetch the markdown file from public folder
    fetch(`/projects/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Markdown file not found');
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error(err);
        setContent('# Error\nFailed to load project details.');
      });
  }, [slug, project, navigate]);

  if (!project) return null; // Wait for redirect

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

      {/* Hero Section */}
      <div className="w-full bg-[#16213E] border-b-4 border-[#E94560]">
        <div className="m-auto max-w-[100ch] px-5 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-3xl lg:text-6xl font-azaret font-bold text-white mb-6">{project.title}</h1>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-[#E94560]/10 border border-[#E94560]/50 text-[#E94560] py-1 px-4 rounded-full font-azaret font-bold text-sm lg:text-base whitespace-nowrap">{tag}</span>
            ))}
          </div>
          <div className="hidden justify-center gap-4">
            <a href={project.links.github} target="_blank" rel="noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] py-2 px-6 rounded-lg font-azaret font-bold transition-colors">
              Source Code
            </a>
            <a href={project.links.live_demo} target="_blank" rel="noreferrer" className="bg-[#E94560] border-2 border-[#E94560] text-white hover:bg-transparent hover:text-[#E94560] py-2 px-6 rounded-lg font-azaret font-bold transition-colors">
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="m-auto max-w-[100ch] px-5 lg:px-8 py-12 lg:py-20 text-white font-azaret">
        <div className="max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-[#E94560] mt-10 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-gray-700 pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="leading-relaxed mb-6 text-gray-300" {...props} />,
              img: ({node, ...props}) => <img className="w-full rounded-xl shadow-2xl my-8 border-2 border-gray-800 object-cover" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 text-gray-300 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
              hr: ({node, ...props}) => <hr className="border-gray-700 my-10" {...props} />,
              code: ({node, ...props}) => <code className="bg-gray-800 text-[#E94560] px-1.5 py-0.5 rounded text-sm" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      
      <div className="flex justify-center py-2 lg:py-4 border-t-2 border-white">
        <h1 className="text-sm lg:text-base font-azaret font-semibold text-white">Develop by <span className="text-[#E94560]">Farhan</span> 2025</h1>
      </div>
    </div>
  );
};

export default ProjectDetail;
