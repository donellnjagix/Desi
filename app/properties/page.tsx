import Property from ".";
import Design from "./Design";
import Footer from "../footer";
import Nav from "./navbar";
import Contact from "../components/contact";

type Props = {};

const Properties = async (props: Props) => {
  return (
    <main>
      <Nav/>
      <Property />
      <Design />
      <Contact/>
      <Footer />
    </main>
  );
};

export default Properties;
