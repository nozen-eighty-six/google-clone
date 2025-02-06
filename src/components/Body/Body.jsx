const Body = () => {
  return (
    <main className="body flex w-full  justify-center flex-grow ">
      <section className="xs:w-[350px] md:w-[700px] lg:w-[1000px]  flex flex-col gap-6 ">
        <img
          src="https://www.google.com.pe/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google-image"
          className=" xs:mt-12 md:mt-28 lg:mt-14 block mx-auto xs:w-[160px] xs:h-[56px] md:w-[272px] md:h-[92px] "
        />
        <form className="w-full  flex justify-center ">
          <div className="search__content xs:w-full md:w-[80%] lg:w-[60%] h-[50px] flex items-center justify-between rounded-full border  border-[#dfe1e5]  py-2 px-3">
            <div className="search__elements flex items-center">
              <span className="search__icon mr-3">
                <svg
                  className="w-[20px] h-[20px] fill-current text-[#9aa0a6]"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </span>
              <input type="text" className="border-none outline-none" />
            </div>
            <div className="additional_elements flex gap-3 ">
              <button>
                <svg
                  className="goxjub h-[23px] w-[23px]"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285f4"
                    d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                  ></path>
                  <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                  <path
                    fill="#fbbc04"
                    d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  className="Gdd5U h-[23px] w-[23px]"
                  focusable="false"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" height="192" width="192"></rect>
                  <g>
                    <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                    <path
                      fill="#ea4335"
                      d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                    ></path>
                    <path
                      fill="#fbbc04"
                      d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="button__content h-[60px]  text-[15.5px] flex justify-center gap-3 items-center">
          <button className="bg-[#f8f9fa] transition-all duration-200 h-[36px]  px-3 border border-transparent hover:border-[#dadce0] ">
            Buscar con Google
          </button>
          <button className="bg-[#f8f9fa] transition-all duration-200 h-[36px]  px-3 border border-transparent hover:border-[#dadce0]">
            Voy a tener suerte
          </button>
        </div>

        <div className="available__content flex   justify-center  ">
          <p className="text-[13px] flex xs:gap-1 lg:gap-2 ">
            Google disponible en:
            <a className="cursor-pointer text-[14px] text-[#1a0dab] hover:underline">
              {" "}
              Español (Latinoamérica)
            </a>{" "}
            <a className="cursor-pointer text-[14px] text-[#1a0dab] hover:underline">
              Quechua
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Body;
