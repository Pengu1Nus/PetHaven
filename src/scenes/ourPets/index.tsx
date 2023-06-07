import { SelectedPage, PetsType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Pet from "./Pet";

const pets: Array<PetsType> = [
  {
    name: "Katrine",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image1,
  },
  {
    name: "Jennifer",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image2,
  },
  {
    name: "Woody",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image3,
  },
  {
    name: "Timmy",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image4,
  },
  {
    name: "Charly",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image5,
  },
  {
    name: "Scarlett",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image6,
  },
  {
    name: "Freddie",
    description:
      "Integer sit amet maximus mauris, sit amet convallis risus. Donec eget congue ipsum. Pellentesque sed sem in turpis malesuada scelerisque. In interdum diam eget metus hendrerit tempor. ",
    image: image7,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurPets = ({ setSelectedPage }: Props) => {
  return (
    <section id="нашипитомцы" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurPets)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>НАШИ ПИТОМЦЫ</HText>
            <p className="py-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {pets.map((item, index) => (
              <Pet
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurPets;
