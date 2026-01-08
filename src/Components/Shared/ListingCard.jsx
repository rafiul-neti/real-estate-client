import React from 'react';

const ListingCard = ({ image, main, meta, side }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-5 rounded-md overflow-hidden shadow">
      {/* Image */}
      <div className="flex-1 w-full aspect-square overflow-hidden">{image}</div>

      {/* Main Content */}
      <div className="flex-1 lg:flex-2 flex flex-col justify-center space-y-3">
        {main}
        {meta}
      </div>

      {/* Side Panel */}
      <div className="flex-1 lg:p-1  flex flex-col justify-center space-y-2 bg-gray-100 text-center">
        {side}
      </div>
    </div>
  );
};

export default ListingCard;
