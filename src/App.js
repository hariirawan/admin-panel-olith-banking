import Sidebar from "./components/Sidebar";
import ContentRight from "./components/Content/ContentRight";
import ContentLeft from "./components/Content/ContentLeft";

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <ContentLeft />
      <ContentRight />
    </div>
  );
}

export default App;
