import { Address } from '../models/Address';

export const formatAddress = (address: Partial<Address>) => {
  const addressParts = [
    address.tourism,
    address.neighbourhood,
    address.city,
    address.province,
    address.country,
  ];

  return addressParts.filter(Boolean).join(', ');
};
