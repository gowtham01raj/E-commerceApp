export const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card shimmer-menu rounded-sm w-[200px] h-[450px] restaurant-card m-2 p-2 border bg-neutral-200 border-solid border-black   hover:bg-green-300 justify-between"
          ></div>
        ))}
    </div>
  );
};

export const RestaurantMenuShimmer = () => {
  return (
    <>
      <div className="mx-auto flex align-baseline bg-pink-300 p-5 m-2 mb-6 overflow-hidden h-full max-w-sm rounded-md border border-blue-300">
        <div className="flex animate-pulse space-x-4">
          <div className="size-20 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 roundedbg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-4 rounded bg-gray-200"></div>
                <div className="col-span-1 h-4 rounded bg-gray-200"></div>
              </div>
              <div className="h-4 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex align-baseline bg-black-300 p-5 m-2 mb-6 overflow-hidden h-full max-w-sm rounded-md border border-blue-300">
        {" "}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-4 rounded bg-gray-200"></div>
          <div className="col-span-1 h-4 rounded bg-gray-200"></div>
        </div>
        <div className="right animate-pulse flex flex-col items-center justify-center">
          <div className="size-20 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};
