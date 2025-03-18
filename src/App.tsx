import { FaReact,  FaGitAlt, FaGithub, FaMarkdown } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiTailwindcss, SiStorybook  } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";


function App() {
 

  return (
    <section className="bg-gray-900 min-h-screen flex justify-center items-center gap-x-7">
      <FaMarkdown className="text-[130px] text-white"/>
      <SiTailwindcss className="text-[130px] text-blue-400"/>
      < FaGitAlt className="text-[130px] text-orange-700"/>
      <BiLogoTypescript className="text-[130px] text-blue-500"  />
      <FaReact className="text-[230px] text-blue-400" />
      < SiNextdotjs className="text-[130px] text-black"/>
      <FaGithub className="text-[130px] text-white"/>
      <SiStorybook className="text-[130px] text-pink-500"/>
      <DiVisualstudio className="text-[130px] text-blue-600"/>
    </section>
  )
}

export default App
