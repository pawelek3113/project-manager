import { v4 as uuid } from "uuid";
import BracketsProjIcon from "../icons/BracketsProjIcon";
import CmdProjIcon from "../icons/CmdProjIcon";
import CodeProjIcon from "../icons/CodeProjIcon";
import GradProjIcon from "../icons/GradProjIcon";
import GraphProjIcon from "../icons/GraphProjIcon";
import MolProjIcon from "../icons/MolProjIcon";

const PROJECT_ICONS = [
  { icon: CodeProjIcon, id: uuid() },
  { icon: CmdProjIcon, id: uuid() },
  { icon: GradProjIcon, id: uuid() },
  { icon: BracketsProjIcon, id: uuid() },
  { icon: MolProjIcon, id: uuid() },
  { icon: GraphProjIcon, id: uuid() },
];

export default PROJECT_ICONS;
