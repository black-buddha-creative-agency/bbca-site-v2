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
    _type == "images" => {
      _type,
      images
    },
    _type == "services" => {
      _type,
      title,
      services
    },
    _type == "image" => {
      _type,
      asset,
      alt,
      _key
    }
  }
}`;

export const eventPageQuery = groq`*[_type == "eventPage"]`;

export const eventsQuery = groq`*[_type == "event"]{
  _id,
  title,
  slug,
  eventDate,
  description,
  artists[]->,
  sponsors[]->,
  curators[]->,
  exhibitionType[]->,
  activations[]->,
  eventImages,
  socialLinks,
  isOpen,
}`;
