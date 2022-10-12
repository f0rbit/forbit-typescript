import {
  CppIcon,
  DotnetIcon,
  GamemakerIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "public/icons/language_icons";
import { Technology } from "@prisma/client";

const getIcon = (tech: Technology) => {
  switch (tech["name"].toLowerCase()) {
    case "gml":
    case "gameMaker":
      return GamemakerIcon();
    case "c++":
    case "cpp":
      return CppIcon();
    case "python":
      return PythonIcon();
    case "html":
      return HtmlIcon();
    case "react":
    case "reactjs":
      return ReactIcon();
    case "javascript":
      return JavascriptIcon();
    case "java":
      return JavaIcon();
    case "typescript":
      return TypeScriptIcon();
    case "github":
      return (
        <img
          className="h-6 w-6"
          title="GitHub"
          src="/public/assets/language_icons/github.svg"
          alt="GitHub Icon"
        />
      );
    case "git":
      return (
        <img
          className="h-6 w-6"
          title="Git"
          src="/public/assets/language_icons/git.svg"
          alt="Git Icon"
        />
      );
    case "intellij":
      return (
        <img
          className="h-6 w-6"
          title="IntelliJ"
          src="/public/assets/language_icons/intellij.svg"
          alt="IntellIJ Icon"
        />
      );
    case "vscode":
      return (
        <img
          className="h-6 w-6"
          title="VSCode"
          src="/public/assets/language_icons/vscode.svg"
          alt="VSCode Icon"
        />
      );
    case "photoshop":
      return (
        <img
          className="h-6 w-6"
          title="Photoshop"
          src="/public/assets/language_icons/photoshop.svg"
          alt="PhotoShop Icon"
        />
      );
    case "tailwind":
      return (
        <img
          className="h-6 w-6"
          title="Tailwind"
          src="/public/assets/language_icons/tailwind.svg"
          alt="TailwindCSS Icon"
        />
      );
    case "arch":
      return (
        <img
          className="h-6 w-6"
          title="Arch"
          src="/public/assets/language_icons/arch.svg"
          alt="Arch Image"
        />
      );
    case "visualbasic":
      return (
        <img
          className="h-6 w-6"
          title="VisualBasic"
          src="/public/assets/language_icons/visualbasic.svg"
          alt="VisualBasic Icon"
        />
      );
    case ".net":
      return DotnetIcon();
    default:
      return <p>{tech["name"]}</p>;
  }
};

type IconType = { technology: Technology };
const Icon = ({ technology }: IconType) => {
  return (
    <div className="h-5 w-5 fill-current text-white">{getIcon(technology)}</div>
  );
};

export default Icon;