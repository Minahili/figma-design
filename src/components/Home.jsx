import lavande from "../assets/lavande.jpg";
import primavera from "../assets/primavera.jpg";
import spezia from "../assets/spezia.jpg";
import hand from "../assets/hand.jpg";
import black from "../assets/black.avif";
import strip from "../assets/strip.png";
import logoh from "../assets/logoh.png";
import image from "../assets/image.png";

export default function Home() {
  return (
    <main className="font-staatliches bg-white text-black">
      {/* HEADER */}
      <header className="bg-white px-5 pt-5 pb-4 md:px-10 md:pt-10 md:pb-5 lg:px-[60px] lg:pt-10 lg:pb-5">
        <div className="flex items-center justify-between md:flex-col md:items-center md:gap-0 lg:flex-row lg:items-start lg:justify-between">
          <img
            src={logoh}
            alt="logo"
            className="w-28 h-auto md:w-[500px] md:order-2 md:mb-0 lg:w-[450px] lg:max-w-none lg:mt-0 lg:order-1"
          />

          <div className="flex flex-col items-end md:w-full md:items-center md:mt-0 md:order-1 md:mb-8 lg:flex-col lg:items-end lg:mt-0 lg:gap-4">
            <p className="hidden md:block text-base md:text-center lg:text-[14px] lg:tracking-[1px] lg:uppercase lg:text-right lg:whitespace-nowrap lg:mb-0">
              THE ZERO-PROOF APERITIF FOR MODERN LIVING.
            </p>

            <hr className="hidden md:block w-full h-px bg-black border-none md:max-w-[1000px] md:mb-[25px] lg:w-[350px] lg:h-px lg:bg-black lg:m-0 lg:mb-0" />

            <nav className="flex flex-col items-end gap-2 md:flex-row md:gap-20 md:justify-center md:mt-0 lg:flex lg:gap-[50px] lg:justify-end lg:w-full lg:mt-0">
              <a href="#about" className="text-sm font-normal text-black text-right hover:opacity-70 transition-opacity duration-300 md:text-2xl md:text-center lg:text-[18px] lg:text-right lg:whitespace-nowrap">
                ABOUT
              </a>
              <a href="#find" className="text-sm font-normal text-black text-right hover:opacity-70 transition-opacity duration-300 md:text-2xl md:text-center lg:text-[18px] lg:text-right lg:whitespace-nowrap">
                FIND STOCKISTS
              </a>
              <a href="#contact" className="text-sm font-normal text-black text-right hover:opacity-70 transition-opacity duration-300 md:text-2xl md:text-center lg:text-[18px] lg:text-right lg:whitespace-nowrap">
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Strip */}
      <div className="w-full overflow-hidden">
        <img src={strip} alt="divider" className="w-full h-auto block" />
      </div>

      {/* HERO */}
      <section className="relative h-[400px] md:h-auto md:block lg:grid lg:grid-cols-2 lg:h-auto">
        <div className="absolute top-0 left-0 w-[52%] h-[75%] p-6 z-10 flex flex-col items-start bg-[#c49a63] md:relative md:w-full md:h-auto md:p-12 md:order-1 md:z-auto lg:relative lg:w-full lg:h-auto lg:p-[80px_60px] lg:order-1">
          <h2 className="text-xl leading-tight mb-4 md:text-[50px] md:leading-[1.05] md:mb-9 lg:text-[32px] lg:leading-tight lg:mb-8">
            THE ONLY SPIRIT-FREE APERITIF THAT TASTES AS GOOD AS IT MAKES YOU FEEL.
          </h2>
          <button className="w-24 h-10 bg-[#241c1e] text-[#c49a63] border-2 border-[#241c1e] rounded-[50%] text-xs font-bold uppercase cursor-pointer flex justify-center items-center hover:bg-[#c49a63] hover:border-[#0c0c0b] hover:text-black hover:scale-105 transition-all duration-300 md:w-[145px] md:h-[58px] md:text-[18px] lg:w-[150px] lg:h-[60px] lg:text-[20px]">
            SHOP NOW
          </button>
        </div>

        <div className="absolute top-0 right-0 w-full h-full z-0 md:absolute md:top-auto md:right-0 md:w-full md:h-[400px] md:order-2 lg:relative lg:w-full lg:h-full lg:order-2">
          <img src={image} alt="hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-8 md:p-8 lg:p-[100px_80px]" id="about">
        <h2 className="text-xl font-normal text-black leading-tight mb-5 md:text-[40px] md:mb-6 lg:text-[36px] lg:mb-8">
          VÉLOCE IS THE ZERO-PROOF APERITIF FOR MODERN LIVING, CRAFTED WITH SUPER HERBS AND NUTRACEUTICALS TO ELEVATE YOUR WELL-BEING, WITHOUT COMPROMISING THE SOPHISTICATED RITUAL OF THE APERITIF.
        </h2>
        <button className="w-24 h-10 bg-white text-[#0c0c0b] border-2 border-[#0c0c0b] rounded-[50%] text-xs font-bold uppercase cursor-pointer flex justify-center items-center hover:border-[#0c0c0b] hover:bg-[#f5f5f5] hover:text-[#0c0c0b] hover:scale-105 active:bg-[#e0e0e0] active:scale-95 transition-all duration-300 md:w-[135px] md:h-[55px] md:text-[17px] lg:w-[150px] lg:h-[60px] lg:text-[20px]">
          ABOUT US
        </button>
      </section>

      {/* FEATURED */}
      <section className="bg-black p-12 text-center relative md:p-20 lg:p-[150px_20px]">
        <div className="relative inline-block">
          <img src={black} alt="primavera" className="w-40 max-w-[90%] block mx-auto md:w-72 lg:w-[420px]" />
          <h2 className="absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-staatliches text-[40px] tracking-[2px] text-white uppercase leading-none md:text-[60px] md:tracking-[4px] md:top-[72%] lg:text-[90px] lg:tracking-[6px] lg:top-[75%]">
            PRIMAVERA
          </h2>
          <p className="mt-10 text-[10px] tracking-widest text-white uppercase max-w-full mx-auto md:mt-10 md:text-[11px] md:max-w-[520px] lg:mt-15 lg:text-[13px] lg:max-w-[650px]">
            A BOLD, SPICED APERITIF FEATURING CARDAMOM, GINGER, AND CINNAMON.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white p-6 md:p-8 lg:p-[80px_70px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 md:gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative">
            <h3 className="absolute top-4 left-4 text-2xl font-normal text-[#faf8f6] tracking-wide m-0 z-10 md:top-5 md:left-5 md:text-[36px] lg:top-6 lg:left-6 lg:text-[40px]">LAVANDE</h3>
            <img src={lavande} alt="Lavande" className="w-full h-64 object-cover block md:h-[380px] lg:h-[420px]" />
            <p className="text-xs font-normal my-3 max-w-full md:text-[12px] md:my-4 lg:text-[13px] lg:my-3 lg:max-w-[85%]">
              A delicate and floral aperitif with notes of lavender and chamomile.
            </p>
            <span className="text-xs font-normal cursor-pointer underline md:text-[12px] lg:text-[12px]">FIND NEAR YOU</span>
          </div>

          <div className="relative">
            <h3 className="absolute top-4 left-4 text-2xl font-normal text-[#faf8f6] tracking-wide m-0 z-10 md:top-5 md:left-5 md:text-[36px] lg:top-6 lg:left-6 lg:text-[40px]">PRIMAVERA</h3>
            <img src={primavera} alt="Primavera" className="w-full h-64 object-cover block md:h-[380px] lg:h-[420px]" />
            <p className="text-xs font-normal my-3 max-w-full md:text-[12px] md:my-4 lg:text-[13px] lg:my-3 lg:max-w-[85%]">
              A refreshing and vibrant aperitif with bright citrus notes.
            </p>
            <span className="text-xs font-normal cursor-pointer underline md:text-[12px] lg:text-[12px]">FIND NEAR YOU</span>
          </div>

          <div className="relative md:col-span-1 lg:col-span-1">
            <h3 className="absolute top-4 left-4 text-2xl font-normal text-[#faf8f6] tracking-wide m-0 z-10 md:top-5 md:left-5 md:text-[36px] lg:top-6 lg:left-6 lg:text-[40px]">SPEZIA</h3>
            <img src={spezia} alt="Spezia" className="w-full h-64 object-cover block md:h-[380px] lg:h-[420px]" />
            <p className="text-xs font-normal my-3 max-w-full md:text-[12px] md:my-4 lg:text-[13px] lg:my-3 lg:max-w-[85%]">
              A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
            </p>
            <span className="text-xs font-normal cursor-pointer underline md:text-[12px] lg:text-[12px]">FIND NEAR YOU</span>
          </div>
        </div>
      </section>

      {/* FIND */}
      <section className="w-full">
        <div className="bg-[#c89c64] p-8 md:p-8 md:pb-9 lg:p-[100px_80px_60px_40px]">
          <h2 className="text-4xl font-normal leading-[0.88] tracking-wide text-[#6d4316] md:text-[65px] lg:text-[100px] lg:leading-[0.9]">
            LAVANDE<br />SPEZIA<br />PRIMAVERA<br />
            <span className="text-black font-normal">FIND US</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="bg-white p-8 flex items-start md:p-15 lg:p-[120px_90px]">
            <p className="mt-0 text-xl font-normal leading-tight max-w-full text-black md:text-[30px] lg:text-[32px] lg:max-w-[480px]">
              EXPERIENCE THE REFINED TASTE OF VÉLOCE. VISIT OUR PREMIUM STOCKISTS FOR YOUR NEXT ALCOHOL-FREE APERITIF.
            </p>
          </div>
          <div className="w-full h-full">
            <img src={hand} alt="Drink" className="w-full h-56 object-cover block md:min-h-[300px] lg:h-full lg:min-h-auto" />
          </div>
        </div>
      </section>

    {/* FOOTER - Logo and Copyright LEFT ALIGNED on Desktop */}
<footer className="bg-[#c79a63] pt-0 md:mt-0 md:flex md:flex-col md:items-center lg:pt-[60px] lg:px-[70px] lg:pb-0">
  {/* Links and Contact */}
  <div className="flex flex-col items-center gap-6 py-10 w-full md:py-12 md:px-8 lg:flex lg:flex-row lg:justify-between lg:mb-[40px] lg:items-start lg:py-0 lg:px-0">
    {/* Links - LEFT on desktop */}
    <div className="flex flex-col items-center gap-3 md:gap-4 lg:flex lg:flex-col lg:items-start lg:gap-0">
      <a className="text-sm font-normal text-black uppercase text-center cursor-pointer md:text-lg lg:text-[20px] lg:text-left lg:mb-[10px]">
        FIND STOCKISTS
      </a>
      <a className="text-sm font-normal text-black uppercase text-center cursor-pointer md:text-lg lg:text-[20px] lg:text-left lg:mb-[10px]">
        ABOUT
      </a>
    </div>

    {/* Contact - RIGHT on desktop */}
    <div className="flex flex-col items-center gap-2 md:gap-3 lg:flex lg:flex-col lg:items-end lg:gap-0">
      <p className="text-xs font-normal text-black text-center m-0 md:text-base lg:text-[20px] lg:text-right lg:mb-[10px]">
        (+6) 555-4567
      </p>
      <p className="text-xs font-normal text-black text-center m-0 md:text-base lg:text-[20px] lg:text-right lg:mb-[10px]">
        HELLO@FORM.COM
      </p>
    </div>
  </div>

  {/* Logo - LEFT ALIGNED on desktop (not centered) */}
  <div className="lg:flex lg:items-start lg:w-full">
    <img
      src={logoh}
      alt="footer-logo"
      className="w-4/5 max-w-[500px] h-auto px-5 pb-5 block mx-auto
                md:w-4/5 md:max-w-[600px] md:px-8 md:pb-8 md:mx-auto
                lg:w-[450px] lg:h-auto lg:mx-0 lg:mb-3 lg:p-0"
    />
  </div>

  {/* Copyright - LEFT ALIGNED on desktop */}
  <div className="lg:flex lg:items-start lg:w-full lg:pl-[2px]">
    <p className="text-xs font-normal text-black uppercase tracking-wide text-center py-0 px-5 mb-5
                  md:text-sm md:px-8 md:pb-8 md:text-center
                  lg:text-[15px] lg:mt-[10px] lg:mb-[10px] lg:text-left lg:px-0 lg:text-left">
      COMPANY NAME© 2025 ALL RIGHTS RESERVED
    </p>
  </div>

  {/* Strip - Full width */}
  <div className="w-screen -mx-5 md:-mx-8 lg:w-[calc(100%+140px)] lg:-ml-[70px]">
    <img src={strip} alt="divider" className="w-full h-auto block" />
  </div>
</footer>
    </main>
  );
}
