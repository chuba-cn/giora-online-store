import Image, { StaticImageData } from "next/image";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: StaticImageData;
  }
  
  interface CartSummaryProps {
    items: CartItem[];
  }
  
  const CartSummary = ({ items }: CartSummaryProps) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-bold">In Your Cart</h2>
        <ul>
          {items.map(item => (
            <li key={item.id} className="flex space-x-4">
              <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price} x {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="font-bold">Total: ${total}</p>
      </div>
    );
  };
  
  export default CartSummary;
  