const LoadingSkeleton = () => {
    return (
      <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gray-200 h-48 w-full"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoadingSkeleton;