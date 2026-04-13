import { LogoMarquee } from "@/components/ui/logo-marquee";

const partners = [
  { src: "/partners/africarice.png", name: "Africa Rice Center" },
  { src: "/partners/agra.png", name: "AGRA" },
  { src: "/partners/disignocracy.png", name: "Disignocracy" },
  { src: "/partners/giz.png", name: "GIZ" },
  { src: "/partners/ignitia.png", name: "Ignitia" },
  { src: "/partners/ncx.png", name: "NCX" },
  { src: "/partners/smesabiOrig.png", name: "Smesabi" },
  { src: "/partners/sawbo.png", name: "SAWBO" },
  { src: "/partners/power.png", name: "Power Africa" },
  { src: "/partners/plantvillage.jpeg", name: "Plant Village" },
  { src: "/partners/cosmic sports.png", name: "Cosmic Sports" },
  { src: "/partners/mercy corps.png", name: "Mercy Corps" },
  { src: "/partners/rex.png", name: "Rex" },
  { src: "/partners/kick.png", name: "Kick" },
  { src: "/partners/asolar.png", name: "Asolar" },
  { src: "/partners/bayer.svg.png", name: "Bayer" },
];

const row1 = partners.slice(0, partners.length / 2);
const row2 = partners.slice(partners.length / 2);

function PartnerShip() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-50 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-primary font-bold tracking-wider text-sm">
            OUR PARTNERS
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl text-primary mt-3 mb-3">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
          We collaborate with world-class organizations to deliver impactful
          agricultural solutions across Africa.
        </p>
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto flex flex-col gap-8 md:gap-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10" />

        <LogoMarquee items={row1} direction="left" speed={30} />

        <LogoMarquee items={row2} direction="right" speed={30} />
      </div>
    </section>
  );
}

export default PartnerShip;
