import { render } from "@testing-library/react-native";
import "@/lang/i18n";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
