import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import Transactions from "./components/Transactions";
function App() {
  return (
<div className="min-h-screen flex bg-black w-full overflow-hidden">


      <Sidebar />

      {/* Main Content */}
<div className="flex-1 p-3 sm:p-4 md:p-6 mt-2 mb-2 mr-2 flex flex-col bg-white rounded-2xl overflow-y-auto">

        <Header />

<div className="mt-6 flex gap-6 items-start flex-1">
          <BalanceCard />
          <Transactions/>
         
        </div>
      </div>

    </div>
  );
}

export default App;
