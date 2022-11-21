import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/styles.css";
import "../assets/styles/navbar.css";
import "../assets/styles/home.css";
import "../assets/styles/services.css";
import "../assets/styles/tools.css";
import "../assets/styles/latestProject.css";
import "../assets/styles/contact.css";
import "../assets/styles/loader.css";
import "aos/dist/aos.css";
import { Sono } from "@next/font/google";
const sono = Sono();
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={sono.className}>
      <Component {...pageProps} />
    </main>
  );
}
