import { v4 as uuid } from "uuid";
import ArrowProjIcon from "../assets/arrow_projicon.svg?react";
import CmdProjIcon from "../assets/cmd_projicon.svg?react";
import CodeProjIcon from "../assets/code_projicon.svg?react";
import GradProjIcon from "../assets/grad_projicon.svg?react";
import GraphProjIcon from "../assets/graph_projicon.svg?react";
import MolProjIcon from "../assets/mol_projicon.svg?react";

const PROJECT_ICONS = [
	{ icon: <CodeProjIcon className="size-16" />, id: uuid() },
	{ icon: <CmdProjIcon className="size-16" />, id: uuid() },
	{ icon: <GradProjIcon className="size-16" />, id: uuid() },
	{ icon: <MolProjIcon className="size-16" />, id: uuid() },
	{ icon: <ArrowProjIcon className="size-16" />, id: uuid() },
	{ icon: <GraphProjIcon className="size-16" />, id: uuid() },
];

export default PROJECT_ICONS;
