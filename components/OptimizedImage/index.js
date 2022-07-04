import Image from "next/image";
const OptimizedImage = ({
  file,
  fileWebp,
  type,
  loading = "lazy",
  ...props
}) => {
  if (fileWebp && fileWebp.includes("data:image")) {
    return (
      <Image src={fileWebp} layout="fill"></Image>
      /*   <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={fileWebp}
        alt={file}
        fetchpriority={loading === "eager" ? "high" : "low"}
        loading={loading}
        {...props}
      /> */
    );
  }
  return (
    <Image
      src={file}
      loading={loading}
      fetchpriority={loading === "eager" ? "high" : "low"}
      layout="fill"
    ></Image>

    /*  <picture>
      <source
        srcSet={require(`../../public/images/${file}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840&format=webp`)}
        type="image/webp"
        loading={loading}
      />
      <source
        type={"image/" + type}
        loading={loading}
        srcSet={require(`../../public/images/${file}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840`)}
      />
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={require(`../../public/images/${file}?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840`)}
        alt={file}
        fetchpriority={loading === "eager" ? "high" : "low"}
        loading={loading}
        {...props}
      />
    </picture> */
  );
};

export default OptimizedImage;
