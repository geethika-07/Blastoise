import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import { Outlet, useLocation } from "react-router-dom";
import { useMovieDetails } from "./hooks/useMovieApi";

const App = () => {
  const location = useLocation();

  // Determine the title based on the current route
  const getPageTitle = () => {
    if (location.pathname.startsWith("/media/")) {

      const movieId = location.pathname.split("/")[2];
      const { movie } = useMovieDetails(movieId);
      return movie ? movie.title : "Loading...";
    
    } else if (location.pathname === "/tierlist") {
      return "Tierlist";
    
    } else {
      return "Main";
    
    }
  };

  return (
    <div className="flex bg-black text-white h-screen w-full">
      
      {/* Sidebar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-col flex-1 py-[10px] overflow-hidden text-white">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#2A2A2A]">
          <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col">
          

          <div className="p-6 text-gray-400 flex-1">
            <Outlet />
          </div>
          
          {/* Footer */}
          <Footer />
          
        </div>
        
      </div>
    </div>
  );
};

export default App;