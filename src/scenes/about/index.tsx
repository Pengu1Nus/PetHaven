import HText from "@/shared/HText";
import { SelectedPage, AboutType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import ActionButton from "@/shared/ActionButton";
import aboutPage from "@/assets/aboutpage.png";

const about: Array<AboutType> = [
  {
    icon: <FlagIcon className="h-6 w-6" />,
    title: "Наша Миссия",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Наш подход",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Поддержка",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>БОЛЬШЕ, ЧЕМ ПРОСТО ПРИЮТ</HText>
          <p className="my-5 text-sm">
            Пет Сити — это специализированный приют для домашних животных,
            обеспечивающий любящую и заботливую среду, где животные получают
            исключительную заботу и находят свой дом навсегда, принося радость и
            дружеские отношения бесчисленным семьям.
          </p>
        </motion.div>

        {/* ABOUT */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {about.map((aboutItem: AboutType) => (
            <AboutCard
              key={aboutItem.title}
              icon={aboutItem.icon}
              title={aboutItem.title}
              description={aboutItem.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto w-[40%]"
            alt="about-page-photo"
            src={aboutPage}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Шанс <span className="text-primary-500">питомцам</span>{" "}
                    снова стать членами семьи
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                vero eius et ab error delectus eligendi, nam nostrum illo.
                Exercitationem repellendus laborum error assumenda? Suscipit,
                neque incidunt. Laborum, atque iste.
              </p>
              <p className="mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Присоединяйся
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
