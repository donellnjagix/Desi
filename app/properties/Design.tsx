'use client'
import React, { useState } from "react"; // Import useState

import { ClassType } from "../types/types";
import Card from "../components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "@/public/images/properties/christian-mackie-cc0Gg3BegjE-unsplash.jpg";
import img2 from "@/public/images/properties/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg";
import img3 from "@/public/images/properties/marcus-lenk-wKO0rx50VWo-unsplash.jpg";
import img4 from "@/public/images/properties/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import img5 from "@/public/images/properties/r-architecture-CCjAPxoQWgQ-unsplash.jpg";
import Link from "next/link";

type Props = {};

export const designs: Array<ClassType> = [
  {
    id: 1,
    name: "Designs",
    category: "bungalows",
    price: 10,
    image: img1.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id: 2,
    name: "Designs",
    category: "mansionettes",
    price: 10,
    image: img2.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id: 3,
    name: "Designs",
    category: "apartments",
    price: 10,
    image: img3.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id: 4,
    name: "Designs",
    category: "villas",
    price: 10,
    image: img4.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id: 5,
    name: "Designs",
    category: "bungalows",
    price: 10,
    image: img5.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
];

const Design = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Add state for selected category
  const filteredDesigns = selectedCategory
    ? designs.filter((design) => design.category === selectedCategory)
    : designs; // Filter designs by selected category

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="design" className="mx-auto w-full sm:w-5/6 mt-4 pt-20">
  {/* Category filter */}
  <div className="category-filter flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 p-2">
    <button 
      className="bg-accent-orange hover:bg-orange-700 text-accent-white font-bold py-2 px-4 rounded-full sm:text-sm md:text-base" 
      onClick={() => setSelectedCategory('bungalows')}>
      Bungalows
    </button>
    <button 
      className="bg-accent-orange hover:bg-orange-700 text-accent-white font-bold py-2 px-4 rounded-full sm:text-sm md:text-base" 
      onClick={() => setSelectedCategory('mansionettes')}>
      Mansionettes
    </button>
    <button 
      className="bg-accent-orange hover:bg-orange-700 text-accent-white font-bold py-2 px-4 rounded-full sm:text-sm md:text-base" 
      onClick={() => setSelectedCategory('apartments')}>
      Apartments
    </button>
    <button 
      className="bg-accent-orange hover:bg-orange-700 text-accent-white font-bold py-2 px-4 rounded-full sm:text-sm md:text-base" 
      onClick={() => setSelectedCategory('villas')}>
      Villas
    </button>
    <button 
      className="bg-accent-orange hover:bg-orange-700 text-accent-white font-bold py-2 px-4 rounded-full sm:text-sm md:text-base" 
      onClick={() => setSelectedCategory(null)}> {/* Button to show all categories */}
      All
    </button>
  
</div>


      {/* Heading */}
      <div className="flex flex-col justify-center mb-4 items-center">
        <p className="font-bold text-accent-black text-lg">How we design</p>
        <h1 className="text-3xl font-bold text-accent-orange">Our Designs</h1>
        <p className="text-accent-black w-full md:w-3/4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eius
          quo, similique doloribus expedita quasi soluta pariatur accusantium
          obcaecati iure quam officiis necessitatibus repellendus modi dicta
          temporibus eos facere numquam.
        </p>
      </div>
      {/* end */}
      <Carousel responsive={responsive}>
        {filteredDesigns.map(
          ({ id, name, price, shortDescription, image }: ClassType) => (
            <div key={id} className="ml-4">
              <Link href={`/designs/${id}`}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  shortDescription={shortDescription}
                  image={image}
                />
              </Link>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Design;
