export const Footer = () => {
    return (
      <footer className="bg-gray-900 p-6 text-gray-400">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AimFlare. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    );
  };