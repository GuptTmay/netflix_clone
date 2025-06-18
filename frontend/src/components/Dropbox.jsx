import { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

export default function Dropbox() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [currLang, setCurrLang] = useState('English');
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center space-x-1 rounded-sm border border-gray-500 bg-black/50 px-4 py-2 text-white outline-offset-2 hover:bg-black/70 focus:outline-2 focus:outline-white"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Languages className="h-4 w-4" />
        <span className="hidden text-sm md:inline">{currLang}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <ul
          role="menu"
          className="animate-fade-in absolute right-0 mt-2 w-20 divide-y-1 divide-slate-500 overflow-auto md:w-30"
        >
          {['English', 'Hindi', 'Spanish'].map((value, index) => (
            <li
              key={index}
              role="menuitem"
              tabIndex={0}
              onClick={() => setCurrLang(value)}
              className={`text-md cursor-pointer p-1 font-medium text-black ${
                value === currLang ? 'bg-blue-300' : 'bg-white'
              }`}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
