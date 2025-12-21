import React from "react";

function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="https://cdn.dribbble.com/userupload/19483265/file/original-e31f5d58afd61ecaef35dde566ee87bf.gif"
        alt="preloader"
        className="w-56 h-56 md:w-72 md:h-72"
      />
    </div>
  );
}

export default Preloader;
