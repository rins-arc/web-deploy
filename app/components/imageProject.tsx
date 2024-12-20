import React from 'react';
import Image from 'next/image';

interface ImageProjectProps {
  publicId: string; 
  altText: string;
}

const ImageProject: React.FC<ImageProjectProps> = ({ publicId, altText}) => {


  return (
    <div
    style={{
      position: 'relative',
      display: 'inline-block',
      width: '100%', 
      height: 0,
      paddingBottom: '75%',
      overflow: 'hidden',
    }}
  >
    <Image
      src={publicId}
      alt={altText}
      quality={75}
      loading="lazy"
      objectFit="cover"
      layout="fill"
    />
  </div>
  );
};

export default ImageProject;
