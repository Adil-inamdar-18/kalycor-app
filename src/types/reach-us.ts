export interface ReachUsOption {
  id: string;
  title: string;
  description: string;
  label: string;
  href: string;
  image: string;
}

export interface ReachUsPageData {
  hero: {
    image: string;
    kicker: string;
    title: readonly string[];
    description: string;
  };

  options: readonly ReachUsOption[];
}