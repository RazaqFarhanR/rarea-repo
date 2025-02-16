import React from 'react';
import { ReactComponent as WindowsIcon } from '../assets/icons/windows.svg';
import { ReactComponent as UbuntuIcon } from '../assets/icons/ubuntu.svg';
import { ReactComponent as NginxIcon } from '../assets/icons/nginx.svg';
import { ReactComponent as GitIcon } from '../assets/icons/git.svg';
import { ReactComponent as VscodeIcon } from '../assets/icons/vscode.svg';
import { ReactComponent as ArduinoIcon } from '../assets/icons/arduino.svg';
import { ReactComponent as JsIcon } from '../assets/icons/js.svg';
import { ReactComponent as TsIcon } from '../assets/icons/ts.svg';
import { ReactComponent as GoIcon } from '../assets/icons/golang.svg';
import { ReactComponent as NodeIcon } from '../assets/icons/nodejs.svg';
import { ReactComponent as ExpressIcon } from '../assets/icons/express.svg';
import { ReactComponent as BunIcon } from '../assets/icons/bun.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as NextIcon } from '../assets/icons/nextjs.svg';
import { ReactComponent as TailwindIcon } from '../assets/icons/tailwind.svg';
import { ReactComponent as MysqlIcon } from '../assets/icons/mysql.svg';
import { ReactComponent as MariadbIcon } from '../assets/icons/mariadb.svg';
import { ReactComponent as PostgresqlIcon } from '../assets/icons/postgresql.svg';
import { ReactComponent as FigmaIcon } from '../assets/icons/figma.svg';


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