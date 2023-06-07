export enum SelectedPage {
  Home = "home",
  About = "about",
  OurPets = "our pets",
  ContactUs = "contact us",
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
