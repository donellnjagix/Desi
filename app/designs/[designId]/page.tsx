'use client'
import React, { useState } from 'react';
import { designs } from '@/app/properties/Design';
import Nav from '@/app/properties/navbar';
import Footer from '@/app/footer';
import Link from 'next/link';
import Image from 'next/image';
import { DesignType } from '../../types/types';



const DesignsListPage = () => {
  const [category, setCategory] = useState('bungalows'); // Default category
  const [selectedDesign, setSelectedDesign] = useState<DesignType | null>(null);

  const filteredDesigns = designs.filter((design) => design.category === category);

  const handleDesignClick = (design: DesignType) => {
    setSelectedDesign(design);
  };

  return (
    <div>
      <Nav />
      <div className="category-filter">
        <button onClick={() => setCategory('bungalows')}>Bungalows</button>
        <button onClick={() => setCategory('mansionettes')}>Mansionettes</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredDesigns.map((design) => (
          <div key={design.id} onClick={() => handleDesignClick(design)}>
            {/* Thumbnail or summary of the design here */}
          </div>
        ))}
      </div>
      {selectedDesign && (
        <div className="md:flex justify-between items-start pt-28 gap-8 mb-4 w-5/6 mx-auto">
          {/* image */}
          <div className="basis-1/2 relative w-auto h-[60vh]">
            <Image
              fill
              src={selectedDesign.image}
              alt="propertyImg"
              style={{ objectFit: "cover", borderRadius: "10px" }}
              sizes="(max-width: 480px) 100vw,
                     (max-width: 768px) 75vw,
                     (max-width: 1060px) 50vw,
                     33vw"
            />
          </div>
          {/* description */}
          <div className="flex flex-col basis-1/2 gap-2 mt-6">
            <h1 className="font-bold text-xl text-accent-orange">{selectedDesign.name}</h1>
            <p>Ksh <span className="text-accent-gray font-extrabold">{selectedDesign.price}</span> </p>
            <p className="text-accent-black">{selectedDesign.longDescription}</p>
            <button className="bg-accent-orange text-accent-black rounded-sm py-1 px-4 w-fit hover:bg-orange-400" onClick={() => setSelectedDesign(null)}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DesignsListPage;
