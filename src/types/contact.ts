export interface ContactOffice {
  id: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  email?: string;
  mapUrl?: string;
}

export interface ContactReachOption {
  id: string;
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
}

export interface ContactPageData {
  hero: {
    image: string;
    kicker: string;
    title: readonly string[];
    description: string;
  };
  offices: {
    kicker: string;
    heading: string;
    description: string;
    india: readonly ContactOffice[];
    international: readonly ContactOffice[];
  };
  reachUs: {
    kicker: string;
    heading: string;
    description: string;
    items: readonly ContactReachOption[];
  };
}
