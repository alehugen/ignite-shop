import { ImageContainer, ProductContainer, ProductsDetails } from "@/styles/pages/product";
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductsDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, esse at, reprehenderit excepturi nobis perferendis quaerat officiis expedita facere ad odio maxime mollitia reiciendis dignissimos fugiat aliquam ipsa veniam autem?</p>

        <button>
          Comprar agora
        </button>
      </ProductsDetails>
    </ProductContainer>
  )
}