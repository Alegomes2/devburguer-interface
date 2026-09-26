
import {
  InstagramLogo,
  WhatsappLogo,
  Envelope,
} from "@phosphor-icons/react";

import { Container, Content, SocialLinks, SocialLink } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <p>
          Desenvolvido por Alexandre Gomes · DevClub · 2026 · Todos os
          direitos reservados
        </p>

        <SocialLinks>
          <SocialLink
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramLogo size={24} weight="bold" />
          </SocialLink>

          <SocialLink
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsappLogo size={24} weight="bold" />
          </SocialLink>

          <SocialLink
            href="mailto:seuemail@email.com"
            aria-label="Enviar e-mail"
          >
            <Envelope size={24} weight="bold" />
          </SocialLink>
        </SocialLinks>
      </Content>
    </Container>
  );
}

