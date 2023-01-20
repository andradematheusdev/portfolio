import { BackButton } from '../';
import Logo from "../Logo";

export const SmallHeader = () => {
  return (
    <>
      <header className={`flex bg-zinc-800 h-10 px-4`}>
        <div className="flex flex-1 h-full items-center">
          <BackButton />
        </div>
        <div className="flex flex-1 h-full justify-end items-center">
          <Logo className="fill-white" />
        </div>
      </header>
    </>
  );
}
