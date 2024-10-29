export const Header = () => {
    return (
      <header className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">AimFlare</h1>
          <nav>
            <ul className="flex space-x-6">
              {["About", "Features", "Pricing", "Community", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a 
            href="#get-started" 
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded hover:shadow-lg transition duration-300"
          >
            Start Training
          </a>
        </div>
      </header>
    );
  };