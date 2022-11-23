import axios from "axios";
import { useEffect, useState } from "react";
import { OrdeData } from "../../pages/api/orderData";

const OrderContain = () => {
    const [OrderData, setOrderData] = useState<object>({});
    const [Hover1, setHover1] = useState<boolean>(false);
    const [Hover2, setHover2] = useState<boolean>(false);
    const [Hover3, setHover3] = useState<boolean>(false);

    type dataStructure = {
        orange: string;
        olive: string;
        leaves: string;
        onion: string;
        garlic: string;
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/order", {
                params: {},
            })
            .then(({ data }: { data: dataStructure }) => {
                setOrderData(data);
            });
    }, []);

    function getClass(idx: 1 | 2 | 3) {
        if (!Hover1 && !Hover2 && !Hover3) return "";
        if (idx == 1) {
            if (Hover1) return " show";
            else return " out";
        }
        if (idx == 2) {
            if (Hover2) return " show";
            else return " out";
        }
        if (idx == 3) {
            if (Hover3) return " show";
            else return " out";
        }
    }

    return (
        <div id="order-contain">
            <a
                href="https://www.ubereats.com/"
                className={`a1 ${getClass(1)}`}
                onMouseEnter={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
            >
                Uber Eats
                <img alt="img" className="i1" src={OrdeData.leaves} />
                <img alt="img" className="i2" src={OrdeData.orange} />
                <img alt="img" className="i3" src={OrdeData.olive} />
                <img alt="img" className="i4" src={OrdeData.onion} />
                <img alt="img" className="i5" src={OrdeData.garlic} />
            </a>
            <a
                href="https://deliveroo.co.uk/brands/koox-juice-farmacy"
                className={`a2 ${getClass(2)}`}
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
            >
                Deliveroo
                <img alt="img" className="i1" src={OrdeData.onion} />
                <img alt="img" className="i2" src={OrdeData.orange} />
                <img alt="img" className="i3" src={OrdeData.leaves} />
                <img alt="img" className="i4" src={OrdeData.garlic} />
                <img alt="img" className="i5" src={OrdeData.olive} />
            </a>
            <a
                href="https://www.just-eat.co.uk/"
                className={`a3 ${getClass(3)}`}
                onMouseEnter={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
            >
                Just Eat
                <img alt="img" className="i1" src={OrdeData.orange} />
                <img alt="img" className="i2" src={OrdeData.olive} />
                <img alt="img" className="i3" src={OrdeData.leaves} />
                <img alt="img" className="i4" src={OrdeData.garlic} />
                <img alt="img" className="i5" src={OrdeData.onion} />
            </a>
        </div>
    );
};

export default OrderContain;
