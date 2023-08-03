import Image from "next/image";

const images = [
  {
    image: '/images/productMap/Frame 29.png'
    //profiles[]=nAME,IMG
  },
  {
    image: '/images/productMap/Frame 30.png'
  },
  {
    image: '/images/productMap/Frame 31.png'
  },
  {
    image: '/images/productMap/Frame 32.png'
  },
  {
    image: '/images/productMap/Frame 33.png'
  },
  {
    image: '/images/productMap/Frame 34.png'
  },
  {
    image: '/images/productMap/Frame 35.png'
  },
  {
    image: '/images/productMap/Frame 36.png'
  },
  {
    image: '/images/productMap/Frame 37.png'
  },
  {
    image: '/images/productMap/Frame 38.png'
  },
  {
    image: '/images/productMap/Frame 39.png'
  },
  {
    image: '/images/productMap/Frame 40.png'
  },
  {
    image: '/images/productMap/Frame 41.png'
  },
  {
    image: '/images/productMap/Frame 42.png'
  },
  {
    image: '/images/productMap/Frame 43.png'
  },
  {
    image: '/images/productMap/Frame 44.png'
  },
  {
    image: '/images/productMap/Frame 45.png'
  },
  {
    image: '/images/productMap/Frame 46.png'
  },
  {
    image: '/images/productMap/Frame 47.png'
  },
 
];

const ProductMap = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="">UPVC Profiles</h1>
      <p>Find the ideal profile to match your build.</p>
      <div className="flex flex-col items-center">
        {images.map((image) => (
        <Image
            key={image.name}
            className="object-contain"
            src={image.image}
            alt={"error"}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductMap;
