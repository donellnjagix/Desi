"use client";
import React from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import img1 from "@/public/images/design/img1.jpg";
import img2 from "@/public/images/design/img2.jpg";
import img3 from "@/public/images/design/img3.jpg";
import img4 from "@/public/images/design/img4.jpg";
import img5 from "@/public/images/design/img5.jpg";
import Link from "next/link";

export const properties: Array<ClassType> = [
  {
    id: 1,
    name: "Properties",
    price: 10,
    image: img1.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id: 2,
    name: "Properties",
    price: 10,
    image: img2.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id:3,
    name: "Properties",
    price: 10,
    image: img3.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id: 4,
    name: "Properties",
    price: 10,
    image: img4.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
  {
    id:5,
    name: "Properties",
    price: 10,
    image: img5.src,
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
  },
];

const Property = () => {
  return (
    <div id="properties" className="mx-auto w-5/6 pt-28">
      {/* Heading */}
      <div className="flex flex-col justify-center mb-4 w-full md:w-3/4">
        <p className="font-bold text-accent-black text-lg">What we do</p>
        <h1 className="text-3xl font-bold text-accent-orange">
          Our Properties
        </h1>
        <p className="text-accent-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          suscipit delectus nam cumque debitis, esse excepturi ea eligendi id
          optio corporis similique, a voluptatum eaque, consequuntur consequatur
          voluptatibus quam? Deleniti?
        </p>
      </div>
      {/* end */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {properties.map(
          ({ id,name, price, image, shortDescription }: ClassType) => (
            <div key={id}>
              <Link href={`/properties/${id}`}>
              <Card
              id={id}
                name={name}
                price={price}
                image={image}
                shortDescription={shortDescription}
              />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Property;
