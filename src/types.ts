export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: 'new' | 'used';
  seller: string;
  description: string;
  bids: number;
  timeLeft: string;
}