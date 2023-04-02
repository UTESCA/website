import Accenture from "../public/assets/company/collaborators/Accenture.svg";
import BCG from "../public/assets/company/collaborators/BCG.svg";
import Deloitte from "../public/assets/company/collaborators/Deloitte.svg";
import KPMG from "../public/assets/company/collaborators/KPMG.svg";
import EY from "../public/assets/company/collaborators/EY.svg";
import Google from "../public/assets/company/collaborators/Google.svg";
import Oracle from "../public/assets/company/collaborators/Oracle.svg";
import IBM from "../public/assets/company/collaborators/IBM.svg";
import Tesla from "../public/assets/company/collaborators/Tesla.svg";
import LIDD from "../public/assets/company/collaborators/LIDD.svg";
type collaborationProps = {
  name: string;
  logo: any;
};
const collaborations: collaborationProps[] = [
  // do them in alphabetical order
  {
    name: "Accenture",
    logo: Accenture,
  },
  {
    name: "BCG",
    logo: BCG,
  },
  {
    name: "Deloitte",
    logo: Deloitte,
  },
  {
    name: "EY",
    logo: EY,
  },
  {
    name: "Google",
    logo: Google,
  },
  {
    name: "IBM",
    logo: IBM,
  },
  {
    name: "KPMG",
    logo: KPMG,
  },
  {
    name: "LIDD",
    logo: LIDD,
  },
  {
    name: "Oracle",
    logo: Oracle,
  },
  {
    name: "Tesla",
    logo: Tesla,
  },
];
export default collaborations;
