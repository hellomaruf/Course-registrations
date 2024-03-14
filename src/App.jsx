import { useState } from "react";
import Courses from "./components/courses/Courses";
import Selectcart from "./components/selectedcart/Selectcart";

function App() {
  const [selectCarts, setSelectCarts] = useState([]);
  const handleSelectBtn = (course) => {
    let newSelectCarts = [...selectCarts, course];
    setSelectCarts(newSelectCarts);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className=" font-bold text-3xl text-center py-8 text-gray-800">
          Course Registration
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <div className=" col-span-9">
            <Courses handleSelectBtn={handleSelectBtn} />
          </div>
          <div className=" col-span-3">
            <Selectcart selectCarts={selectCarts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
