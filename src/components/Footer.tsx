
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Panduan API AI</h3>
            <p className="mt-2">© 2025 Rifan Muazin. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="https://facebook.com/rifanmuazin" className="hover:text-blue-400 transition-colors">Facebook</a>
              <a href="https://ebot.my.id" className="hover:text-blue-400 transition-colors">eBot.my.id</a>
              <a href="mailto:boss@bosspulsa.com" className="hover:text-blue-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
