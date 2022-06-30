import React from "react";

const OptimizedImage = ({ file, type, ...props }) => (
  <picture>
    <source
      srcSet={require(`../../public/images/${file}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840&format=webp`)}
      type="image/webp"
    />
    <source
      type={"image/" + type}
      srcSet={require(`../../public/images/${file}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840`)}
    />
    <img
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      src={require(`../../public/images/${file}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840`)}
      alt={file}
      {...props}
    />
  </picture>
);

export default OptimizedImage;
