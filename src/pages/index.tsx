import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"
import camiseta1 from '@/assets/shirt_01.png'


const Button = styled('button', {
  backgroundColor: "Azure",
})

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={640} height={520} alt='produto'></Image>
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 99.99</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta1} width={640} height={520} alt='produto'></Image>
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 99.99</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
