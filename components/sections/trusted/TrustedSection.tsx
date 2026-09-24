import TrustedImages from "./TrustedImages";
import TrustedHeading from "./TrustedHeading";
import LogoGrid from "./LogoGrid";

export default function TrustedSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_2fr] lg:gap-10">
        <TrustedImages />
        <TrustedHeading />
        <LogoGrid />
      </div>
    </section>
  );
}
