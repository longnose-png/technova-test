export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}