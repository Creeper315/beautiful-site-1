const lb1 = "https://koox.co.uk/assets/images/home/intro/casserole.png";
const lb2 = "https://koox.co.uk/assets/images/home/intro/5leafs-branche.png";

const lt1 = "https://koox.co.uk/assets/images/home/intro/long-leaf.png";
const lt2 = "https://koox.co.uk/assets/images/home/intro/mini-leaf-orange.png";
const rt1 = "https://koox.co.uk/assets/images/home/intro/3roundleafs.png";
const rt2 = "https://koox.co.uk/assets/images/home/intro/branch-ball.png";
const lm = "https://koox.co.uk/assets/images/home/intro/mini-leaf.png";
const bm = "https://koox.co.uk/assets/images/home/intro/balls-red-green.png";
const rm = "https://koox.co.uk/assets/images/home/intro/red-ball.png";
const rb1 = "https://koox.co.uk/assets/images/home/intro/spoon.png";
const rb2 = "https://koox.co.uk/assets/images/home/intro/tomato.png";

export const Page1Clip = () => {
    return <></>;
};

export const Page1Top = () => {
    return <></>;
};

export const Page1Bottom = () => {
    return <></>;
};

export const Page1Overflow = () => {
    return (
        <>
            <img className={`lb1`} src={lb1} alt="img" />
            <img className="lb2" src={lb2} alt="img" />
            <img className="lt1" src={lt1} alt="img" />
            <img className="lt2" src={lt2} alt="img" />
            <img className="rt1" src={rt1} alt="img" />
            <img className="rt2" src={rt2} alt="img" />
            <img className="bm" src={bm} alt="img" />
            <img className="rb1" src={rb1} alt="img" />
            <img className="rb2" src={rb2} alt="img" />
            <img className="lm" src={lm} alt="img" />
            <img className="rm" src={rm} alt="img" />
        </>
    );
};
