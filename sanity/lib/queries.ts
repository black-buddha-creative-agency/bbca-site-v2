import { groq } from "next-sanity";

export const homeQuery = groq`*[_type == "home"]{
  pageBuilder[]{
    _type == "hero" => {
      _type,
      subheading,
      tagline,
      image
    },
    _type == "about" => {
      _type,
      title,
      description
    },
    _type == "contact" => {
      _type,
      title,
      description
    },
    _type == "homeImages" => {
      _type,
      images
    },
    _type == "homeServices" => {
      _type,
      title,
      services
    }
  }
}`;
