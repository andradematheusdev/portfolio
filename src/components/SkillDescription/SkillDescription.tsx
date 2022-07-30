import { CircleNotch } from "phosphor-react";

export function SkillDescription() {
  return (
    <div className="flex flex-col w-full bg-nav-bg rounded-lg p-8">
      <h2 className="text-violet-500 text-3xl font-bold mb-8">ReactJS</h2>
      <p className="text-white leading-relaxed text-justify">
        Loren ipsun dolor sit amet Loren ipsun dolor sit amet Loren ipsun dolor sit amet Loren ipsun
        dolor sit ametLoren ipsun dolor sit ametLoren ipsun dolor sit ametLoren ipsun dolor sit
        ametLoren ipsun dolor sit ametLoren ipsun dolor sit ametLoren ipsun dolor sit ametLoren
        ipsun dolor sit ametLoren ipsun dolor sit amet
      </p>
      <p className="border-t border-zinc-600 mt-4 pt-4">
        <span className="text-zinc-400 text-xs">Footer</span>
      </p>
    </div>
  );
}

export function SkillDescriptionLoading() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-nav-bg rounded-lg p-8 min-h-[300px]">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}
