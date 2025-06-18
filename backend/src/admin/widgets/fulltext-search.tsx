import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container, Heading, Input } from "@medusajs/ui";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="search"
        placeholder="Search products..."
        className="w-full"
      />
    </div>
  );
};

// The widget
const ProductWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Product Widget</Heading>
      </div>
    </Container>
  );
};

// The widget's configurations
export const config = defineWidgetConfig({
  zone: "product.details.before",
});

export default ProductWidget;
