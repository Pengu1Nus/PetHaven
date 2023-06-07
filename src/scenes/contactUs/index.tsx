import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contactUImg from "@/assets/contactUsPage.jpg";

import HText from "@/shared/HText";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ConstactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Есть вопрос?</span> Напишите нам
          </HText>
          <p className="my-5">
            Praesent vehicula et risus nec mollis. Praesent vel augue ut sapien
            imperdiet lacinia eget ac velit. Curabitur in nibh eu mauris
            volutpat luctus. Donec mi lorem, imperdiet sit amet metus in,
            ultrices iaculis dui. Suspendisse potenti. Mauris ac nibh id velit
            vehicula placerat eu non massa. Donec imperdiet vitae arcu sit amet
            aliquam.
          </p>
        </motion.div>
        {/* FORM AND IMAGE*/}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blanck"
              onSubmit={onSubmit}
              action="https://formsubmit.co/testing@email.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="ИМЯ"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" &&
                    "Это поле обязательно для заполнения."}
                  {errors.name.type === "maxLength" &&
                    "Максимальная длина поля 100 символов."}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "Это поле обязательно для заполнения."}
                  {errors.email.type === "pattern" &&
                    "Некорректный адрес электронной почты."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="СООБЩЕНИЕ"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Это поле обязательно для заполнения."}
                  {errors.message.type === "maxLength" &&
                    "Максимальная длина поля 2000 символов."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                ОТПРАВИТЬ
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-happytext">
              <img
                className="w-full rounded-lg drop-shadow-2xl"
                alt="constact-us"
                src={contactUImg}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConstactUs;
