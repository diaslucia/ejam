export interface cardProps {
  title: string;
  subtitle: string;
  sale: number;
  price: number;
  stock: number;
  stars: number;
  description: string;
  detail: Array<string>;
  discount: string;
  picture: string;
  thumbnail: string;
  reviews: Array<cardReview>;
}

export interface cardReview {
  picture: string;
  review: string;
  verified: boolean;
  name: string;
  stars: number;
}
