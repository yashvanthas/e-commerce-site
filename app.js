const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItems");

const product = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darlblue",
                img: "./images/air2.png",
            },
        ],
    },

    {
        id: 2,
        title: "Air Jordon",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./images/jordan.png",
            },
            {
                code: "green",
                img: "./images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Creater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./images/crater.png",
            },
            {
                code: "lightgray",
                img: "./images/crater2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./images/hippie.png",
            },
            {
                code: "lightgray",
                img: "./images/hippie2.png",
            },
        ],
    },
];


let choosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".prodcutTitle");
const currentProductPrice = document.querySelector(".prodcutPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    //change the current slide 
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = product[index];

        //choosen text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign  new the color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
       size.style.color = "black";  
        });
       size.style.backgroundColor = "black";
       size.style.color = "white";
    })
})

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

const productButton = document.querySelector(".productButton");
const payments = document.querySelector(".payments");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payments.style.display="flex";
})
    
close.addEventListener("click",()=>{
    payments.style.display="none";
})
