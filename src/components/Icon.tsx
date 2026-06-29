// @ts-nocheck
import React from 'react';
import WindowsIcon from '../assets/icons/windows.svg';
import UbuntuIcon from '../assets/icons/ubuntu.svg';
import NginxIcon from '../assets/icons/nginx.svg';
import GitIcon from '../assets/icons/git.svg';
import VscodeIcon from '../assets/icons/vscode.svg';
import ArduinoIcon from '../assets/icons/arduino.svg';
import JsIcon from '../assets/icons/js.svg';
import TsIcon from '../assets/icons/ts.svg';
import GoIcon from '../assets/icons/golang.svg';
import NodeIcon from '../assets/icons/nodejs.svg';
import ExpressIcon from '../assets/icons/express.svg';
import BunIcon from '../assets/icons/bun.svg';
import ReactIcon from '../assets/icons/react.svg';
import NextIcon from '../assets/icons/nextjs.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import MysqlIcon from '../assets/icons/mysql.svg';
import MariadbIcon from '../assets/icons/mariadb.svg';
import PostgresqlIcon from '../assets/icons/postgresql.svg';
import FigmaIcon from '../assets/icons/figma.svg';


interface IconProps {
  name: 'windows' | 'ubuntu' | 'nginx' | 'git' | 'vscode' | 'arduino' | 'js' | 'ts' | 'golang' | 'nodejs' | 'express' | 'bun' | 'react' | 'next' | 'tailwind' | 'mysql' | 'mariadb' | 'postgresql' | 'figma'
  className?: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, alt = 'icon' }) => {
  const icons = {
    windows: <WindowsIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    ubuntu: <UbuntuIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    nginx: <NginxIcon className={`${className} text-white hover:text-[#E94560] px-1`} aria-label={alt} />,
    git: <GitIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    vscode: <VscodeIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    arduino: <ArduinoIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    js: <JsIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    ts: <TsIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    golang: <GoIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    nodejs: <NodeIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    express: <ExpressIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    bun: <BunIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    react: <ReactIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    next: <NextIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    tailwind: <TailwindIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    mysql: <MysqlIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    mariadb: <MariadbIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    postgresql: <PostgresqlIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
    figma: <FigmaIcon className={`${className} text-white hover:text-[#E94560]`} aria-label={alt} />,
  };

  return icons[name];
};

export default Icon;