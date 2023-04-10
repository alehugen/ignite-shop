
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'
import { Container, Header, TextContainer } from '@/styles/pages/app'
import logoImg from '@/assets/LOA_LOGO.png'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt={'logotipo'} height={76} width={76}></Image>
        <TextContainer>
          <strong>Ignite</strong>
          <span>SHOP</span>
        </TextContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
