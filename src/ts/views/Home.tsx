import Head from "@/ts/helpers/Head.tsx";
import Nav from "@/ts/components/Nav.tsx";


const Home = () => {
    return (
        <>
            <Head
                title="Strona Główna"
                description="Strona Główna"
                keywords="Uczelnie wyższe, wynik z matury, punktacja matura"
                robots="index, follow"
            />
            <Nav />
        </>
    );
};

export default Home;