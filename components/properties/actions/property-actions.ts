"use server";

import { propertiesForRent, propertiesForSale } from "@/data/properties";
import { PropertyFilter } from "@/models/property";

export async function getProperties(params: PropertyFilter) {
  // Validate params
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
  if (minPrice && isNaN(minPrice)) {
    throw new Error("minPrice must be a number");
  }
  if (maxPrice && isNaN(maxPrice)) {
    throw new Error("maxPrice must be a number");
  }

  // Validate and set pagination parameters
  const page = params.page ? Number(params.page) : 1;
  const limit = params.limit ? Number(params.limit) : 10;

  if (isNaN(page) || page < 1) {
    throw new Error("page must be a positive number");
  }
  if (isNaN(limit) || limit < 1) {
    throw new Error("limit must be a positive number");
  }

  const allProperties = [...propertiesForSale, ...propertiesForRent];
  const filteredProperties = allProperties.filter((property) => {
    if (params.province && property.province !== params.province) return false;
    if (params.type && property.type !== params.type) return false;
    if (minPrice && property.price < minPrice) return false;
    if (maxPrice && property.price > maxPrice) return false;
    return true;
  });

  console.log("filteredProperties", filteredProperties, params);

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

  return {
    properties: paginatedProperties,
    total: filteredProperties.length,
    page,
    limit,
    totalPages: Math.ceil(filteredProperties.length / limit),
    hasNextPage: endIndex < filteredProperties.length,
    hasPreviousPage: page > 1,
  };
}
