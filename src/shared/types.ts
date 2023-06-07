export enum SelectedPage {
  Home = "home",
  About = "about",
  Volunteers = "volunteers",
  OurPets = "our pets",
  ContactUs = "contact us",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}
