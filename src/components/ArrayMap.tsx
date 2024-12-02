import React from 'react';

const ArrayMap = () => {
  const carName = [
    {
      carImage: "Toyota Corolla.jpg",
      carName: "Toyota Corolla",
      carPrice: "PKR: 60,00,000",
      carReviews: 452
    },
    {
      carImage: "Honda City.jfif",
      carName: "Honda City",
      carPrice: "PKR: 55,00,000",
      carReviews: 290
    },
    {
      carImage: "Suzuki Alto.jfif",
      carName: "Suzuki Alto",
      carPrice: "PKR: 34,00,000",
      carReviews: 323
    },
    {
      carImage: "Honda Civic.jfif",
      carName: "Honda Civic",
      carPrice: "PKR: 90,00,000",
      carReviews: 433
    }
  ];

  return (
    <div className="flex flex-wrap justify-between gap-6 p-10">
      {carName.map((vehicle, index) => (
        <div
          key={index}
          className="group relative text-center justify-center pb-4 w-full sm:w-1/2 md:w-1/4 border-2 border-green-900 rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
        >
          <img
            src={vehicle.carImage}
            alt={vehicle.carName}
            className="w-full h-auto transition-transform duration-300 transform group-hover:scale-100"
          />
          <h1 className="text-blue-600 font-semibold text-xl mt-4">
            {vehicle.carName}
          </h1>
          <h2 className="text-green-500 font-semibold text-lg">{vehicle.carPrice}</h2>
          <h3 className="text-gray-600 font-semibold">Reviews: {vehicle.carReviews}</h3>
        </div>
      ))}
    </div>
  );
};

export default ArrayMap;
