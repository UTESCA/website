import UHN from "../public/assets/company/clients/UHN.svg";
import HPCO from "../public/assets/company/clients/HPCO.png";
import aikomail from "../public/assets/company/clients/aikomail.svg";
import Happenin from "../public/assets/company/clients/Happenin.svg";
import Softeem from "../public/assets/company/clients/Softeem.png";

type clientProps = {
  name: string;
  logo: any;
  url: string;
};
const clients: clientProps[] = [
  {
    name: "UHN",
    logo: UHN,
    url: "https://www.uhn.ca/",

  },
  //   {
  //     name: "HPCO",
  //     logo: HPCO,
  //   },
  {
    name: "Aikomail",
    logo: aikomail,
    url: "https://aikomail.com/",
  },
  {
    name: "Happenin",
    logo: Happenin,
    url: "",
  },
  //   {
  //     name: "Softeem",
  //     logo: Softeem,
  //   },
];
export default clients;
