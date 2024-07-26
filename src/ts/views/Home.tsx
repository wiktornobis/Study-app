import Head from "@/ts/helpers/Head.tsx";
import '@/less/home.less';

import HeroLogo from "@/ts/components/HeroLogo.tsx";

const Home = () => {


    return (
        <>
            <Head
                title="Strona Główna"
                description="Strona Główna"
                keywords="Uczelnie wyższe, wynik z matury, punktacja matura"
                robots="index, follow"
            />
            <section className="general-container">
              <HeroLogo />
            </section>
        </>
    );
};
export default Home;
