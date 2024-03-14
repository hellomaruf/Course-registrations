function Course({ courses }) {
  const { name, credit, price, description, photo } = courses;
  console.log(name);
  return (
    <div className="">
      <div className="card bg-white shadow-md">
        <figure className="px-4 pt-4">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="px-4 py-6">
          <h2 className="font-extrabold ">{name}</h2>
          <p className=" text-base py-2">{description}</p>
          <div className="flex justify-between py-2">
            <div className="flex gap-2 text-lg font-medium text-gray-500">
              <i className="ri-money-dollar-circle-line"></i>Price:{price}
            </div>
            <div className=" flex gap-2 text-lg font-medium text-gray-500">
              <i className="ri-book-open-line"></i>Credit:{credit}
            </div>
          </div>
          <div className="card-actions">
            <button className="btn bg-blue-500 text-white w-full hover:bg-blue-600">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
