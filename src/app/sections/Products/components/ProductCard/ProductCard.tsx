import { Product } from "@/domain/models/product";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <figure className="flex flex-col w-full lg:w-96 mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full object-cover"
        width={400}
        height={400}
      />
      <figcaption className="mt-4">
        <h3 className="font-bold text-xl lg:text-2xl">{product.title}</h3>
        <p className="mt-4 text-base lg:text-lg">{product.description}</p>
      </figcaption>
    </figure>
  );
}
