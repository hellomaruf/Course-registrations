function Selectcart({ selectCarts }) {
  return (
    <div>
      <div className="bg-white p-5 rounded-lg w-full shadow-md">
        <h2 className="text-blue-500 font-bold text-xl">
          Credit Hour Remaining :{selectCarts.length}
        </h2>
        <hr className="my-3" />
        <h2 className="font-bold text-lg">Course Name </h2>
        <ul>
          {selectCarts.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <hr className="my-3" />
        <h2>
          Total Credit Hour: {selectCarts.reduce((p, c) => p + c.credit, 0)}
        </h2>
        <hr className="my-3" />
        <h2>Total Price : 1500 USD</h2>
      </div>
    </div>
  );
}

export default Selectcart;
