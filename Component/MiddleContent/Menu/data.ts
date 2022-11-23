export enum Bk {
    i1 = "https://koox.co.uk/assets/images/shapes/01.png",
    i2 = "https://koox.co.uk/assets/images/shapes/02.png",
    i3 = "https://koox.co.uk/assets/images/shapes/03.png",
    i4 = "https://koox.co.uk/assets/images/shapes/04.png",
    i5 = "https://koox.co.uk/assets/images/shapes/05.png",
    i6 = "https://koox.co.uk/assets/images/shapes/06.png",
}
export enum Cat {
    c1 = "cold-pressed",
    c2 = "superfood smoothies",
    c3 = "ginger boosters",
    c4 = "bowls",
    c5 = "treats",
}
type descType = {
    title: string;
    para1: string;
    para2: string;
};

export type dataType = {
    category: Cat;
    title: string;
    price: string;
    img: string;
    bk: Bk;
    description: descType;
};

const description: descType = {
    title: "Made with 100% organic ingredients",
    para1: "Some dummy text. this is a placeholder & nothing else.",
    para2: `Per 100ml Energy 174kj (41kal) - 
    Fat 0.0 of which saturated 0.0 - 
    Carbohydrates 9.3g of which sugar 9.3g - 
    Fiber 1.0g - Protein 0.3g - Salt 0.03g`,
};

export const AllData: dataType[] = [
    {
        category: Cat.c1,
        title: "Ultimate Detox",
        price: "7.50",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Test_nico-575x1024.png",
        bk: Bk.i1,
        description,
    },
    {
        category: Cat.c1,
        title: "Drinkable Skincare",
        price: "7.95",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/drinkable_skincare-575x1024.png",
        bk: Bk.i1,
        description,
    },
    {
        category: Cat.c1,
        title: "Happy Gut",
        price: "7.95",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/HAPPY_GUT-575x1024.png",
        bk: Bk.i5,
        description,
    },
    {
        category: Cat.c1,
        title: "Shield Immunity",
        price: "7.95",
        img: "https://koox.co.uk/data/wp-content/uploads/2021/05/WINTER_IMMUNITY-575x1024.png",
        bk: Bk.i4,
        description,
    },
    {
        category: Cat.c1,
        title: "Coco Water",
        price: "7.50",
        img: "https://koox.co.uk/data/wp-content/uploads/2021/05/COCOH2O-575x1024.png",
        bk: Bk.i5,
        description,
    },
    // smoothie
    {
        category: Cat.c2,
        title: "Vit-C Immunity",
        price: "8.50",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/VITC_WL-575x1024.png",
        bk: Bk.i2,
        description,
    },
    {
        category: Cat.c2,
        title: "Keto Greens",
        price: "7.95",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Keto_Greens_web-575x1024.png",
        bk: Bk.i1,
        description,
    },
    {
        category: Cat.c2,
        title: "Brain Power",
        price: "7.95",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/BRAINPOWER_WL-575x1024.png",
        bk: Bk.i6,
        description,
    },
    // booster
    {
        category: Cat.c3,
        title: "Gut Cleanser",
        price: "3.75",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Gut-Cleanser-575x1024.png",
        bk: Bk.i1,
        description,
    },
    {
        category: Cat.c3,
        title: "Turmeric Defence",
        price: "3.75",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/TURMERIC_DEFENSE-575x1024.png",
        bk: Bk.i3,
        description,
    },
    {
        category: Cat.c3,
        title: "Beet Glow",
        price: "3.75",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Beet-Glow-575x1024.png",
        bk: Bk.i3,
        description,
    }, // bowl
    {
        category: Cat.c4,
        title: "White Omega-3",
        price: "6.95",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/White-coco-2-1024x1024.png",
        bk: Bk.i5,
        description,
    },
    {
        category: Cat.c4,
        title: "Pink coco omega 4",
        price: "6.50",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Pink-Coco-1-1024x1024.png",
        bk: Bk.i4,
        description,
    },
    {
        category: Cat.c4,
        title: "Blue Majik",
        price: "7.50",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/BLUE-MAJIK-1-1024x1024.png",
        bk: Bk.i1,
        description,
    },
    // treat
    {
        category: Cat.c4,
        title: "Dark Choco Peanuts",
        price: "3",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/BLUE-MAJIK-1-1024x1024.png",
        bk: Bk.i6,
        description,
    },
    {
        category: Cat.c4,
        title: "Medjool dates & Walnuts",
        price: "3",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/dates-zoomed-1024x1024.png",
        bk: Bk.i3,
        description,
    },
    {
        category: Cat.c4,
        title: "Hemp Protein Balls",
        price: "3.50",
        img: "https://koox.co.uk/data/wp-content/uploads/2018/05/Hemp-protein-ball-1024x1024.png",
        bk: Bk.i1,
        description,
    },
];
