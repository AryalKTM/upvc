import { Section, TextUnderline, Title } from "@/app/components";
import { Product } from "@/domain/models/product";
import { ProductCard } from "./components/ProductCard";

const Products = () => {
  const products: Product[] = [
    {
      image: "/images/products/Door.png",
      title: "Doors",
      description:
        "Durable and secure entrance doors, patio doors, and sliding doors crafted from premium uPVC materials.",
        profiles : [],
    },


    {
      image: "/images/products/profiles1.png",
      title: "Profiles",
      description:
        "Versatile uPVC profiles used for various applications such as skirting boards, trimmings, and decorative elements.",
        profiles : [
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
        ],
      },
      {
        image: "/images/products/Window.png",
        title: "Windows",
        description:
          "High-quality, energy-efficient windows in various styles and designs, customized to fit any architectural requirement.",
        profiles: []
      },
      {
        image: "/images/products/Structural-Glazing.png",
        title: "Structural Glazing",
        description:
          "Frameless glass panels seamlessly integrated to create unobstructed views and bright, energy-efficient spaces.",
          profiles : [],
      },
      {
        image: "/images/products/Conservatory.png",
        title: "Conservatories",
        description:
          "Harmonious spaces that merge indoor luxury with the beauty of the outdoors. Durable, energy-efficient, and elegantly designed to create your personal oasis.",
          profiles : [],
      },
      {
        image: "/images/products/Skylight.png",
        title: "Skylights",
        description:
          "Discover a brighter ambiance bringing the beauty of the outdoors inside, while ensuring energy efficiency.",
          profiles : [],
      },
      
  ];

  return (
    <Section className="py-20" id="products">
      <Title>
        OUR <TextUnderline>PRODUCTS</TextUnderline>
      </Title>
      <div className="flex flex-col lg:flex-row flex-wrap mt-16 gap-y-6">
        {products.map((product, i) => (
          <div className="lg:basis-1/2 xl:basis-1/3 p-5 flex-start" key={product.title + "-" + i}>
            <ProductCard product={product} />
           
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Products;
