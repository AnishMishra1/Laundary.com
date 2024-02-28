const cuisines = [
  {
    name: "Laundry Service",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dry Cleaning",
    image:
      "https://images.unsplash.com/photo-1549037173-e3b717902c57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carpet Cleaning",
    image:
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fabric Care",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedRecepie = () => {
  return (
    <div className="flex flex-col items-start py-[3rem] px-[3rem] md:px-[5rem] gap-[3rem] ">
      <h1 className="font-bold text-[2rem]">Featured Services</h1>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-[1rem] md:gap-[2rem] lg:gap-[3rem]">
        {cuisines.map((data, index) => (
          <div className="cursor-pointer hover:scale-105 transition">
            <div
              className="bg-no-repeat bg-center bg-cover h-[15rem] rounded-3xl"
              style={{
                backgroundImage: `url("${data.image}")`,
              }}
            ></div>
            <p className="text-[1.2rem] font-bold text-center text-default-400">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecepie;
