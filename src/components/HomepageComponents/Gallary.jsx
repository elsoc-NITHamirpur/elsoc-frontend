import React from "react";
import { motion } from "framer-motion";
import Heading from "../BasicComponents/Heading";
import { useState, useRef, useEffect } from "react";
import imageData from "../../data/imageData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallary = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="py-40 bg-black bg-opacity-60">
      <Heading title="Gallery" />
      <div className="py-8 md:pb-16 md:pt-12 px-2 md:px-20 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center -mx-4"
        >
          <div className="w-4/5 px-4">
            <div className="carousel mx-auto">
              <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                  <button
                    onClick={movePrev}
                    className="hover:bg-gray-800 hover:bg-opacity-50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled("prev")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-20 -ml-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="sr-only">Prev</span>
                  </button>
                  <button
                    onClick={moveNext}
                    className="hover:bg-gray-800 hover:bg-opacity-50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled("next")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-20 -ml-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </button>
                </div>
                <div
                  ref={carousel}
                  className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 rounded-lg"
                >
                  {imageData.resources.map((resource, index) => {
                    return (
                      <div
                        key={index}
                        className="carousel-item text-center relative w-full h-[200px] md:h-[500px] snap-start"
                      >
                        <div
                          className="h-full w-full aspect-video block bg-cover bg-origin-padding bg-left-top bg-no-repeat z-0"
                          style={{
                            backgroundImage: `url(${resource.imageUrl || ""})`,
                          }}
                        >
                          <LazyLoadImage
                            src={resource.imageUrl || ""}
                            alt={resource.title}
                            className="w-full aspect-square hidden"
                          />
                        </div>
                        <div
                          className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-gray-800 hover:bg-opacity-40 z-10"
                        >
                          <h3 className="text-white py-6 px-3 mx-auto text-2xl">
                            {resource.title}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallary;
