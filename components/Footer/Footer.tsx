const footer = () => {
  return (
    <footer className="bg-black text-white/70 py-6">
      <div className="w-[90%] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} W4 TEAM. All rights reserved.
        </div>

        {/* Right - Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="/"
            className="hover:text-white transition-colors text-sm"
          >
            Home
          </a>
          <a
            href="/auth/Register"
            className="hover:text-white transition-colors text-sm"
          >
            Register
          </a>
          <a
            href="/about"
            className="hover:text-white transition-colors text-sm"
          >
            About
          </a>
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
