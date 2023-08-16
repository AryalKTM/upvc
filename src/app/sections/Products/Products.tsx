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
            image: '/images/productMap/Frame 48.svg'
          },
          {
            image: '/images/productMap/Frame 49.svg'
          },
          {
            image: '/images/productMap/Frame 50.svg'
          },
          {
            image: '/images/productMap/Frame 51.svg'
          },
          {
            image: '/images/productMap/Frame 52.svg'
          },
          {
            image: '/images/productMap/Frame 53.svg'
          },
          {
            image: '/images/productMap/Frame 54.svg'
          },
          {
            image: '/images/productMap/Frame 55.svg'
          },
          {
            image: '/images/productMap/Frame 56.svg'
          },
          {
            image: '/images/productMap/Frame 57.svg'
          },
          {
            image: '/images/productMap/Frame 58.svg'
          },
          {
            image: '/images/productMap/Frame 59.svg'
          },
          {
            image: '/images/productMap/Frame 60.svg'
          },
          {
            image: '/images/productMap/Frame 61.svg'
          },
          {
            image: '/images/productMap/Frame 62.svg'
          },
          {
            image: '/images/productMap/Frame 63.svg'
          },
          {
            image: '/images/productMap/Frame 64.svg'
          },
          {
            image: '/images/productMap/Frame 65.svg'
          },
          {
            image: '/images/productMap/Frame 66.svg'
          },
          {
            image: '/images/productMap/Frame 67.svg'
          },
          {
            image: '/images/productMap/Frame 68.svg'
          },
          {
            image: '/images/productMap/Frame 69.svg'
          },
          {
            image: '/images/productMap/Frame 70.svg'
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
    <Section className="" id="products">
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
