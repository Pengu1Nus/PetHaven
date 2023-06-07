export enum SelectedPage {
  Home = "главная",
  About = "онас",
  OurPets = "нашипитомцы",
  ContactUs = "свяжитесьснами",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface PetsType {
  name: string;
  description?: string;
  image: string;
}
