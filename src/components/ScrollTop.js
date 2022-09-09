import React from "react";

const ScrollTop = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("myBtn").style.transform = "translateY(-100px)";
    } else {
      document.getElementById("myBtn").style.transform = "translateY(0)";
    }
  };

  const scrollFun = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <button onClick={scrollFun} id="myBtn" title="Go to top">
      <img
        src="https://img.icons8.com/ios/50/000000/collapse-arrow--v2.png"
        className="top-img"
      />
    </button>
  );
};

export default ScrollTop;
