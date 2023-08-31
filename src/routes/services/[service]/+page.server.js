import services from "../../../content/services.json";
import { toTitleCase } from "$lib/utils";

export async function load({ params }) {
  const service = params.service;
  const data = services[service];
  const category = data.category;
  return {
    category,
    name: toTitleCase(service),
    tagline: data.tagline,
    content: data.content,
  };
}
