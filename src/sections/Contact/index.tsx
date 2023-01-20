import TextInput from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import { SectionTitle, SubmitButton } from "../../components";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-16 px-8 md:px-0 min-h-screen" id="contact">
        <SectionTitle title="Contato" className="mb-4"/>
        <form method="POST" action="https://api.slapform.com/XZZYUhtKj" className="flex flex-col w-full md:w-8/12 lg:w-4/12">
            <TextInput placeHolder={"Nome"} className="my-2" id="nome" name="nome" />
            <TextInput placeHolder={"Telefone"} type={"tel"} className="my-2" id="tel" name="tel"  />
            <TextInput placeHolder={"E-mail"} type={"email"} className="my-2" id="mail" name="mail" />
            <TextArea placeHolder="Mensagem..." className="my-2" noResize rows={8} id="msg" name="msg"></TextArea>
            <SubmitButton text="Enviar" className="bg-violet-500 my-2 hover:bg-violet-600 text-white" />
        </form>
    </section>
  )
}