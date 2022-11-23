enum juiceType {
    coldPress = "cold-pressed",
    smoothie = "smoothies",
    booster = "boosters",
    bowl = "bowls",
    treat = "treats",
}
// 1 https://koox.co.uk/assets/images/shapes/01.png
// 2 https://koox.co.uk/assets/images/shapes/02.png
// 3 https://koox.co.uk/assets/images/shapes/03.png
// 4 https://koox.co.uk/assets/images/shapes/04.png
// 5 https://koox.co.uk/assets/images/shapes/05.png
// 6 https://koox.co.uk/assets/images/shapes/06.png

enum bkImg {
    I1 = "https://koox.co.uk/assets/images/shapes/01.png",
    I2 = "https://koox.co.uk/assets/images/shapes/02.png",
    I3 = "https://koox.co.uk/assets/images/shapes/03.png",
    I4 = "https://koox.co.uk/assets/images/shapes/04.png",
    I5 = "https://koox.co.uk/assets/images/shapes/05.png",
    I6 = "https://koox.co.uk/assets/images/shapes/06.png",
}

const typeColdPress = [
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Test_nico-575x1024.png",
        bkImg: bkImg.I1,
        text: {
            type: juiceType.coldPress,
            name: "Ultimate Detox",
            price: "7.95",
        },
        description: {
            line1: "Made with 100% organic ingredients",
            line2: "apple, lemon, celery, parsley, spinach, kale, ginger & nothing else",
            line3: `Per 100ml Energy 174kj (41kal) - 
            Fat 0.0 of which saturated 0.0 - 
            Carbohydrates 9.3g of which sugar 9.3g - 
            Fiber 1.0g - Protein 0.3g - Salt 0.03g`,
        },
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/drinkable_skincare-575x1024.png",
        bkImg: bkImg.I5,
        text: {
            type: juiceType.coldPress,
            name: "drinkable skincare",
            price: "7.95",
        },
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/GREEN_VITALITY-575x1024.png",
        bkImg: bkImg.I5,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/HAPPY_GUT-575x1024.png",
        bkImg: bkImg.I1,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2021/05/WINTER_IMMUNITY-575x1024.png",
        bkImg: bkImg.I4,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2021/05/DR-GREEN-575x1024.png",
        bkImg: bkImg.I1,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2021/05/COCOH2O-575x1024.png",
        bkImg: bkImg.I5,
    },
];

const typeSmoothie = [
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/VITC_WL-575x1024.png",
        bkImg: bkImg.I1,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Keto_Greens_web-575x1024.png",
        bkImg: bkImg.I1,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/GREENHEALER_WL-575x1024.png",
        bkImg: bkImg.I2,
    },
    {
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/GREENHEALER_WL-575x1024.png",
        bkImg: bkImg.I5,
    },
];

export const AllData = [...typeColdPress, ...typeSmoothie];
