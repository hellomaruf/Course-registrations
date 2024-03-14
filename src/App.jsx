import Courses from "./components/courses/Courses";
import Selectcart from "./components/selectedcart/Selectcart";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className=" font-bold text-3xl text-center py-5 text-gray-800">
          Course Registration
        </h1>
        <div className="grid grid-cols-12">
          <div className=" col-span-10">
            <Courses />
          </div>
          <div className=" col-span-2">
            <Selectcart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
