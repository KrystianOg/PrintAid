import {
  Text,
  Column,
  Container,
  Heading,
  Html,
  Row,
  Section,
  Tailwind,
  Head,
  Preview,
  Body,
  Link,
} from "@react-email/components";
import { ProductDTO } from "@medusajs/framework/types";

type ProductCreatedEmailProps = {
  product: ProductDTO;
  email_banner?: {
    body: string;
    title: string;
    url: string;
  };
};

function ProductCreatedEmailComponent({
  product,
  email_banner,
}: ProductCreatedEmailProps) {
  const shouldDisplayBanner = email_banner && "title" in email_banner;

  return (
    <Tailwind>
      <Html className="font-sans bg-gray-100">
        <Head />
        <Preview>Thank you for your product from Medusa</Preview>
        <Body className="bg-white my-10 mx-auto w-full max-w-2xl">
          {/* Header */}
          <Section className="bg-[#27272a] text-white px-6 py-4">
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2447 3.92183L12.1688 1.57686C10.8352 0.807712 9.20112 0.807712 7.86753 1.57686L3.77285 3.92183C2.45804 4.69098 1.63159 6.11673 1.63159 7.63627V12.345C1.63159 13.8833 2.45804 15.2903 3.77285 16.0594L7.84875 18.4231C9.18234 19.1923 10.8165 19.1923 12.15 18.4231L16.2259 16.0594C17.5595 15.2903 18.3672 13.8833 18.3672 12.345V7.63627C18.4048 6.11673 17.5783 4.69098 16.2447 3.92183ZM10.0088 14.1834C7.69849 14.1834 5.82019 12.3075 5.82019 10C5.82019 7.69255 7.69849 5.81657 10.0088 5.81657C12.3191 5.81657 14.2162 7.69255 14.2162 10C14.2162 12.3075 12.3379 14.1834 10.0088 14.1834Z"
                fill="currentColor"
              ></path>
            </svg>
          </Section>

          {/* Thank You Message */}
          <Container className="p-6">
            <Heading className="text-2xl font-bold text-center text-gray-800">
              Thank you for your product,{" "}
            </Heading>
            <Text className="text-center text-gray-600 mt-2">
              We're processing your product and will notify you when it ships.
            </Text>
          </Container>

          {/* Promotional Banner */}
          {shouldDisplayBanner && (
            <Container
              className="mb-4 rounded-lg p-7"
              style={{
                background: "linear-gradient(to right, #3b82f6, #4f46e5)",
              }}
            >
              <Section>
                <Row>
                  <Column align="left">
                    <Heading className="text-white text-xl font-semibold">
                      {email_banner.title}
                    </Heading>
                    <Text className="text-white mt-2">{email_banner.body}</Text>
                  </Column>
                  <Column align="right">
                    <Link
                      href={email_banner.url}
                      className="font-semibold px-2 text-white underline"
                    >
                      Shop Now
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Container>
          )}

          {/* Product Items */}
          <Container className="px-6">
            <Heading className="text-xl font-semibold text-gray-800 mb-4">
              Your Items
            </Heading>
            <Row>
              <Column>
                <Text className="text-sm m-0 my-2 text-gray-500">
                  Product: {product.title}
                </Text>
              </Column>
            </Row>
            {product.variants?.map((item) => (
              <Section key={item.id} className="border-b border-gray-200 py-4">
                <Row>
                  <Column className="w-2/3 pl-4">
                    <Text className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </Text>
                    <Text className="text-gray-600">{item.title}</Text>
                  </Column>
                </Row>
              </Section>
            ))}

            {/* Order Summary */}
            <Section className="mt-8">
              <Heading className="text-xl font-semibold text-gray-800 mb-4">
                Order Summary
              </Heading>
              <Row className="text-gray-600">
                <Column className="w-1/2">
                  <Text className="m-0">Subtotal</Text>
                </Column>
              </Row>
              <Row className="text-gray-600">
                <Column className="w-1/2">
                  <Text className="m-0">Tax</Text>
                </Column>
              </Row>
              <Row className="border-t border-gray-200 mt-4 text-gray-800 font-bold">
                <Column className="w-1/2">
                  <Text>Total</Text>
                </Column>
              </Row>
            </Section>
          </Container>

          {/* Footer */}
          <Section className="bg-gray-50 p-6 mt-10">
            <Text className="text-center text-gray-500 text-sm">
              If you have any questions, reply to this email or contact our
              support team at support@medusajs.com.
            </Text>
            <Text className="text-center text-gray-500 text-sm">
              Product id: {product.id}
            </Text>
            <Text className="text-center text-gray-400 text-xs mt-4">
              © {new Date().getFullYear()} Medusajs, Inc. All rights reserved.
            </Text>
          </Section>
        </Body>
      </Html>
    </Tailwind>
  );
}

export const productCreatedEmail = (props: ProductCreatedEmailProps) => (
  <ProductCreatedEmailComponent {...props} />
);
