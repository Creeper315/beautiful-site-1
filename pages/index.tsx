import { NextPage } from "next";
import HomeContain from "../Component/MiddleContent/Home/homeContain";

// import Test from "../Component/TransitionSection/test";

const Index: NextPage<{ hi: any }> = ({ hi }) => {
    return <HomeContain />;
};

export async function getStaticProps() {
    return {
        props: {
            hi: "hi",
        },
    };
}

export default Index;
