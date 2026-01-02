
export interface NavItem {
  label: string;
  path: string;
}

export interface BusinessInfo {
  name: string;
  subsidiary: string;
  phone: string;
  location: string;
  region: string;
  country: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
