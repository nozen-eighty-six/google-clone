import { useEffect, useState } from "react";
import { getCountry } from "../../services/country";

const Footer = () => {
  const [country, setCountry] = useState("");
  useEffect(() => {
    const setCountryData = async () => {
      const countryData = await getCountry();
      setCountry(countryData);
    };

    setCountryData();
  }, []);
  return (
    <footer className="footer w-full ">
      <div
        className="country__content py-[15px] px-[30px] w-full bg-[#f2f2f2] border-[2px] border-solid border-x-0 border-t-0 border-b-[##dadce0] 
      flex items-center  text-base"
      >
        <p>{country}</p>
      </div>
      <div className="bg-[#f2f2f2] p-[15px]  border border-b-black border-x-0 border-t-0  px-8">
        <nav className="h-full w-full  flex xs:gap-4 xs:justify-evenly xs:flex-wrap lg:justify-between lg:flex-nowrap items-center ">
          <div className="extra__nav h-full xs:p-1 lg:p-0">
            <ul className="flex xs:justify-evenly xs:flex-wrap lg:justify-normal lg:flex-nowrap h-full items-center gap-6  text-[14px] font-normal">
              <li>
                <a href="">Sobre Google</a>
              </li>
              <li>
                <a href="">Publicidad</a>
              </li>
              <li>
                <a href="">Negocios</a>
              </li>
              <li>
                <a href="">Cómo funciona la Búsqueda</a>
              </li>
            </ul>
          </div>
          <div className="policies__nav xs:p-1 lg:p-0">
            <ul className="flex items-center gap-6  text-[14px] font-normal">
              <li>
                <a href="">Privacidad</a>
              </li>
              <li>
                <a href="">Condiciones</a>
              </li>
              <li>
                <a href="">Configuración</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
