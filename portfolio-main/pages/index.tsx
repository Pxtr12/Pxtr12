import Image from "next/image";
import { Dancing_Script, DynaPuff, Titillium_Web } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { projectsData, stackData } from "@/public/utils/helper";
import Link from "next/link";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: "200",
});
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>                                     </title>
        <meta
          name="description"
          content=""
          key="desc"
        />
      </Head>
      <main
        className={`${titilliumWeb.className} flex min-h-screen flex-col items-center md:px-32 md:py-0 p-5`}
      >
        <Header />

        <div className="h-full w-full mt-10 flex justify-between items-center py-10 mb-20 lg:flex-row flex-col">
          <div className="h-full w-full lg:w-[56%] text-center lg:text-justify flex justify-center flex-col text-xl">
            <div className="font-extrabold text-4xl mb-5">
              Salut <sup className="text-pinkText text-lg">{`}`}</sup>,{" "}
              <p className="mb-2">Mon nom est</p>{" "}
              <p className={`${dancingScript.className} text-blueText mb-2`}>
                Peter Banywesize
              </p>
            </div>
            <p className="my-3">
              {`Programmeur et trader expérimenté avec une solide expertise en développement
               logiciel et finance. Expérience réussie en conception, analyse de données financières,
                prise de décisions éclairées et gestion des risques.`}
            </p>
            <p className="my-3">
              {`Fiable, organisé et doté d'excellentes compétences en communication et travail d'équipe.
               Passionné par l'apprentissage continu et les nouvelles technologies. Prêt à relever de nouveaux défis.`}
            </p>
          </div>
          <div className="h-full flex justify-center items-center my-14">
            <div className="w-72 h-72 border-4 border-blueBorder p-2 rounded-full">
              <Image
                src={"/pivc.jpg"}
                alt=""
                width={400}
                height={400}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="h-fit w-full flex flex-col justify-center items-center mb-28">
          <div className="w-fit flex flex-col items-center">
            <p className="font-extrabold text-4xl text-blueText">
              Compétences
            </p>
            <p className="text-grayText mt-4 text-xl text-center">
              Technologies avec lesquelles j'ai exercé
            </p>
          </div>
          <div className="w-[80%] h-fit flex gap-14 mt-14 justify-center items-center flex-wrap">
            {stackData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  alt=""
                  src={item.src}
                  width={50}
                  height={50}
                  className="w-16 h-16"
                />
                <span className="text-white text-[10px] px-3 py-0.5 bg-blueBg mt-2 rounded-full">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit w-full flex flex-col justify-center items-center mb-20">
          <div className="w-fit flex flex-col items-center">
            <p className="font-extrabold text-4xl text-blueText">Projects</p>
            <p className="text-grayText mt-4 text-xl text-center">
              {`Voici certains de mes projets`}
            </p>
          </div>
          <div className="w-[100%] h-fit flex gap-14 mt-14 justify-center items-center flex-wrap">
            {projectsData.map((item, index) => (
              <div
                key={index}
                className="flex sm:w-3/4 md:w-2/5 lg:w-1/4 flex-col items-center h-fit bg-white shadow-lg rounded-[24px]"
              >
                <Image
                  alt=""
                  src={item.src}
                  width={300}
                  height={200}
                  className="w-full h-48 rounded-t-[24px]"
                />
                <div className="flex flex-col items-center mt-4 px-4 mb-4">
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="text-grayText text-sm mt-2 text-center">
                    {item.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
