export enum SelectedPage{
    Home = "home",
    AboutUs = "aboutus",
    Services = "services",
    Team="team",
    ContactUs = "contactus",
}

export interface ClassType{
  id:number;
  name: string;
  category?: string; // Add this line
  price: number;
  image: string;
  shortDescription: string;
  longDescription: string;
}

export interface ImageData {
   id: number;
   data:{
    attributes: {
        alternativeText: null | string;
        caption: null | string;
        createdAt: string;
        ext: string;
        formats: {
          thumbnail: any;
          small: any;
          large: any;
          medium: any;
        };
        hash: string;
        height: number;
        mime: string;
        name: string;
        previewUrl: null | string;
        provider: string;
        provider_metadata: null | string;
        size: number;
        updatedAt: string;
        url: string;
        width: number;
      };
   }
  }

export type Attribute = {
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: ImageData;
  };
  
  export type MyObject = {
    id: number;
    attributes: Attribute;
  };

  export type DesignType = {
    id: number;
    name: string;
    category?: string;
    price: number;
    image: any; // Consider using a more specific type here
    shortDescription: string;
    longDescription: string;
  };
  