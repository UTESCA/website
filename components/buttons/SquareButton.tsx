import type { NextPage } from "next";
interface Props {
  colour: string
  text: string
}
const SquareButton:NextPage<Props> = ({colour, text}: Props) => {
    switch (colour) {
    case "rose":
     return (<button className={"inline-flex text-white bg-rose-400 border-0 py-2 px-6 focus:outline-none hover:bg-rose-500 rounded text-lg"}>{text}</button>);
    case "gray":
      return (<button className={"inline-flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"}>{text}</button>);
      default:
        return (<button className={"inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"}>{text}</button>);
  }
};
export default SquareButton;