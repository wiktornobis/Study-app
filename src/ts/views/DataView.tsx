import '@/less/headerInfiniteAnimation.less';

import Head from "@/ts/helpers/Head.tsx";
import HeaderInfiniteAnimation from "@/ts/components/HeaderInfiniteAnimation.tsx";
import ExampleChart from "@/ts/charts/ExampleChart.tsx";


const DataView = () => {
    let textFirst:string = "Hi there,";
    let textSecond: string = "Study App";

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
                <ExampleChart />
            </section>
        </>
    );
};

export default DataView;