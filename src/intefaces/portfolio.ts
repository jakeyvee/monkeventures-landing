interface Brand {
  id: number;
  brandName: string;
  brandImg: string;
}

export interface PortfolioInt {
  brands: Brand[];
}