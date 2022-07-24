import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function AboutMe() {
  return (
    <section id="about" className="flex flex-col w-full justify-center bg-black">
      <SectionTitle title="SOBRE MIM" />
      <div>
        <img
          src="https://github.com/Heloriel.png"
          className="rounded-full w-64 h-64 border-4 border-violet-700"
        />
      </div>
      <div></div>
    </section>
  );
}
