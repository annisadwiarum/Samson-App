import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface EmailSenderProps {
  username: string;
}

export const EmailSender = ({ username }: EmailSenderProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Ahlan Wa Sahlan Ya {username}</Heading>
        <Section style={body}>
          <Text style={paragraph}></Text>
          <Text style={paragraph}>
            Syukran katsiran of your feedback to our services. :)
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />- Moeslim Syara Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Moeslim Syara Inc.</Text>
        <Text style={footer}>Copyright @ 2024 on Earth of Allah</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailSender;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
