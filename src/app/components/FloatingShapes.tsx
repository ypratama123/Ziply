"use client";

const FloatingShapes = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute w-52 h-52 bg-pink-400/20 rounded-full -top-12 -left-12 animate-float"></div>
      <div className="absolute w-64 h-64 bg-purple-400/20 rounded-full -bottom-12 -right-4 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute w-40 h-40 bg-blue-400/20 rounded-lg top-1/2 left-1/4 animate-float" style={{ animationDelay: '6s' }}></div>
      <div className="absolute w-32 h-32 bg-indigo-400/20 rounded-xl bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '9s' }}></div>
    </div>
  );
};

export default FloatingShapes; 