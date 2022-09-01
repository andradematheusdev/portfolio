import TextInput from "../components/Input/Input";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TextArea from "../components/TextArea/TextArea";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center pb-16 px-8 md:px-0" id="contact">
        <SectionTitle title="Contato" className="mb-4"/>
        <form className="flex flex-col w-full md:w-8/12 lg:w-4/12">
            <TextInput placeHolder={"Nome"} className="my-2" />
            <TextInput placeHolder={"Telefone"} type={"tel"} className="my-2" />
            <TextInput placeHolder={"E-mail"} type={"email"} className="my-2" />
            <TextArea placeHolder="Mensagem..." className="my-2" noResize rows={8}></TextArea>
        </form>
    </section>
  )
}