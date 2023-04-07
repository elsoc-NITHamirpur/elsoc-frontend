import React, { Fragment } from "react";
import { eventItems } from "../data/events/eventItems";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TabChange } from "../utils/dynamic-title-function.js"

const Events = () => {
  TabChange('ELSOC | events')
  return (
    <Fragment>
      <div className="py-40 px-4 md:px-40 flex flex-col items-center gap-20 md:gap-40">
        {eventItems.map(({ id, title, description, imageUrl, left, downloadLink }) => (
          <div
            key={id}
            className={`gap-8 flex flex-col ${
              left ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full rounded-md overflow-hidden">
              <LazyLoadImage
                className="aspect-video"
                src={imageUrl}
                alt="events"
              />
            </div>
            <div className="w-full p-2 flex flex-col items-center">
              <h2 className="text-center text-5xl text-teal-700 mb-8">
                {title}
              </h2>
              <p className="text-center text-white text-1xl">{description}</p>
              <br />
              <a href={downloadLink} className="border text-white border-teal-700 rounded-md px-4 py-2 hover:bg-teal-700">
                Download Docs
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Events;
