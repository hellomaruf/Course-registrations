import Courses from "./components/courses/Courses";
import Selectcart from "./components/selectedcart/Selectcart";

function App() {
  const handleSelectBtn = () => {
    console.log('select');
  }
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className=" font-bold text-3xl text-center py-8 text-gray-800">
          Course Registration
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <div className=" col-span-9">
            <Courses />
          </div>
          <div className=" col-span-3">
            <Selectcart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
