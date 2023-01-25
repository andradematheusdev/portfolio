import { useContext } from "react";
import { SectionTitle, SubmitButton, TextArea, TextInput } from "@/components";
import { Context } from "@/contexts/LanguageContext";
import { translation } from "@/lang/language";

export const Contact = () => {
  const { lang } = useContext(Context);

  return (
    <section className="flex flex-col items-center justify-center pb-16 px-8 md:px-0 min-h-screen" id="contact">
        <SectionTitle title={translation[lang].sectionsTitle.contact} className="mb-4"/>
        <form method="POST" action="https://api.slapform.com/XZZYUhtKj" className="flex flex-col w-full md:w-8/12 lg:w-4/12">
            <TextInput placeHolder={translation[lang].contactSection.name} className="my-2" id="nome" name="nome" />
            <TextInput placeHolder={translation[lang].contactSection.phone} type={"tel"} className="my-2" id="tel" name="tel"  />
            <TextInput placeHolder={translation[lang].contactSection.mail} type={"email"} className="my-2" id="mail" name="mail" />
            <TextArea placeHolder={translation[lang].contactSection.msg} className="my-2" noResize rows={8} id="msg" name="msg"></TextArea>
            <SubmitButton text={translation[lang].components.submitButton} className="bg-violet-500 my-2 hover:bg-violet-600 text-white" />
        </form>
    </section>
  )
}