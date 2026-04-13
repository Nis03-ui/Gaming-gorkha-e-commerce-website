export default function GameList() {
  const games = [
    {
      image: "/COD MW2.jpg",
      title: "Call of Duty",
      price: "Rs 2000",
    },
    {
      image: "/download (3).jpg",
      title: "FC 35",
      price: "Rs 2500",
    },
    {
      image: "/Frontnite.jpg",
      title: "Frontnite",
      price: "Rs 3000",
    },
    {
      image: "/Mortal Kombat 11 Ultimate (PlayStation 5).jpg",
      title: "Mortal Kombat 11",
      price: "Rs 1500",
    },
    {
      image: "/NBA 2k26.jpg",
      title: "NBA 2k26",
      price: "Rs 2500",
    },
    {
      image: "/PS5 Spiderman.jpg",
      title: "Spiderman",
      price: "Rs 4500",
    },
    {
      image: "/Tekken 8.jpg",
      title: "Tekken 8",
      price: "Rs 4500",
    },
    {
      image: "/UFC5 VideoGame.jpg",
      title: "UFC 5",
      price: "Rs 1000",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {games.map((game, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-4 flex flex-col items-center"
        >
          {/* Image */}
          <img
            src={game.image}
            alt={game.title}
            className="h-60 w-full object-fit rounded-xl"
          />

          {/* Title */}
          <h2 className="text-lg font-semibold mt-3 text-center">
            {game.title}
          </h2>

          {/* Price */}
          <p className="text-gray-600 font-bold mt-1">{game.price}</p>

          {/* Buttons */}
          <div className="flex gap-2 mt-4 w-full">
            <button className="w-1/2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold">
              Buy Now
            </button>
            <button className="w-1/2 bg-black hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}