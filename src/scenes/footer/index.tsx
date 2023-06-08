import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Integer tristique tortor quis massa fringilla consectetur.
            Vestibulum euismod gravida purus at euismod. Donec iaculis metus
            mauris, et sodales mi facilisis quis.
          </p>
          <p>© ПетСити</p>
          <p>
            <a
              className="hover:text-primary-500 hover:underline"
              href="https://github.com/Pengu1Nus"
            >
              Разработано: Зульфат Мустафин
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Соцсети</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Свяжитесь с нами</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas</p>
          <p>
            <a href="tel:+79999999999">+7(999)999-99-99</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
