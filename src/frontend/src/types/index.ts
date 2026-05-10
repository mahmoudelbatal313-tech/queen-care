export type ServiceCategory = "skin" | "hair";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  duration?: string;
  icon?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
}
