import { useAsyncStorage } from "@/hooks/useAsyncStorage";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const useCart = () => {
  const [items, setItems] = useAsyncStorage<CartItem[]>("cart", []);

  const addItem = (item: CartItem): void => {
    void setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeItem = (id: string): void => {
    void setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const clearCart = (): void => {
    void setItems([]);
  };

  return { items, addItem, removeItem, clearCart };
};
