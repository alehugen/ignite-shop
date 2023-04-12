import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>
      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Alssandro</strong>, sua <strong>Camisa</strong> logo estará em suas mãos!
      </p>

      <Link href={'/'}>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}