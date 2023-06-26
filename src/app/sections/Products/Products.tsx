import { Section, TextUnderline, Title } from "@/app/components";
import { Product } from "@/domain/models/product";
import { ProductCard } from "./components/ProductCard";

const Products = () => {
  const products: Product[] = [
    {
      image: "/images/products/windows.png",
      title: "uPVC Windows",
      description:
        "High-quality, energy-efficient windows in various styles and designs, customized to fit any architectural requirement.",
    },
    {
      image: "/images/products/doors.png",
      title: "uPVC Doors",
      description:
        "Durable and secure entrance doors, patio doors, and sliding doors crafted from premium uPVC materials.",
    },
    {
      image: "/images/products/profiles.png",
      title: "uPVC Profiles",
      description:
        "Versatile uPVC profiles used for various applications such as skirting boards, trimmings, and decorative elements.",
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
