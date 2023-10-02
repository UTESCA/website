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
  url: string;
};
const collaborations: collaborationProps[] = [
  // do them in alphabetical order
  {
    name: "Accenture",
    logo: Accenture,
    url: "https://www.accenture.com/",
  },
  {
    name: "BCG",
    logo: BCG,
    url: "https://www.bcg.com/en-ca/",
  },
  {
    name: "Deloitte",
    logo: Deloitte,
    url: "https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html",
  },
  {
    name: "EY",
    logo: EY,
    url: "https://www.ey.com/en_ca",
  },
  {
    name: "Google",
    logo: Google,
    url: "https://about.google/",
  },
  {
    name: "IBM",
    logo: IBM,
    url: "https://www.ibm.com/ca-en",

  },
  {
    name: "KPMG",
    logo: KPMG,
    url: "https://kpmg.com/xx/en/home.html",
  },
  {
    name: "LIDD",
    logo: LIDD,
    url: "https://lidd.com/",
  },
  {
    name: "Oracle",
    logo: Oracle,
    url: "https://www.oracle.com/ca-en/",
  },
  {
    name: "Tesla",
    logo: Tesla,
    url: "https://www.tesla.com/en_ca",
  },
];
export default collaborations;
