import { Landing } from "@/components/Landing";
import { PortfolioInt } from "@/intefaces/portfolio";

export default function Home( props: PortfolioInt) {
  return <Landing brands={props.brands}/>;
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src/constants/portfolio.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf8');
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}