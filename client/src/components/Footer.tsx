import { Instagram, Linkedin, Mail } from "lucide-react";

const imdbIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M23.23 0H.77C.345 0 0 .345 0 .77v22.46c0 .425.345.77.77.77h22.46c.425 0 .77-.345.77-.77V.77c0-.425-.345-.77-.77-.77zM4.12 18.25V5.75H6.2v12.5H4.12zm4.13 0V5.75h4.12c.57 0 1.03.46 1.03 1.03v10.44c0 .57-.46 1.03-1.03 1.03H8.25zm6.18 0V5.75h2.06l1.55 4.64 1.54-4.64h2.06v12.5h-2.06V9.35l-1.54 4.64h-1l-1.55-4.64v8.9h-2.06z"/>
  </svg>
);

const actorsAccessIcon = (
  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[8px] font-bold leading-none px-0.5 text-center">
    ACTORS ACCESS
  </div>
);

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-center">
      <div className="flex justify-center items-center gap-6 md:gap-8">
        <a 
          href="https://www.imdb.com/name/nm6025384/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="IMDb"
        >
          {imdbIcon}
        </a>
        <a 
          href="https://www.instagram.com/jackiehdanna/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/jackiedanna/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://resumes.actorsaccess.com/jackiedanna" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="Actors Access"
        >
          {actorsAccessIcon}
        </a>
        <a 
          href="mailto:contact@jackiedanna.com" 
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="Email"
        >
          <Mail size={24} />
        </a>
      </div>
      <div className="pt-8 text-xs text-gray-600 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Jackie D'Anna. All Rights Reserved.
      </div>
    </footer>
  );
}