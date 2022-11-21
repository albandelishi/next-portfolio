import Head from "next/head";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Tools from "./Tools";
import LatestProject from "./LatestProject";
import Contact from "./Contact";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Head>
        <title>Alban Codes</title>
      </Head>
      <Header />
      <Home />
      <Services />
      <Tools />
      <LatestProject />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
