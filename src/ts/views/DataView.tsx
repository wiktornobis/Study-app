import '@/less/headerInfiniteAnimation.less';

import Head from "@/ts/helpers/Head.tsx";
import HeaderInfiniteAnimation from "@/ts/components/HeaderInfiniteAnimation.tsx";
import CircleChart from "@/ts/charts/CircleChart.tsx";


const DataView = () => {
    let textFirst:string = "Statystki";
    let textSecond: string = "na Żywo";

    return (
        <>
            <Head
                title="Dane"
                description="Dane obrazujące informację na temat absolwentów uczelnii"
                keywords="Uczelnie wyższe, absolwenci uczelnii wyżyszych, najlepsze uczelnie w Polsce"
                robots="index, follow"
            />
            <section className="general-container">
                <HeaderInfiniteAnimation textFirst={textFirst} textSecond={textSecond} />
                <CircleChart />
            </section>
        </>
    );
};

export default DataView;