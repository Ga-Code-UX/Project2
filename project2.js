const slider = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
    {
        id:1,
        title:"AIR FORCE",
        price: 150,
        colors:[
            {   
                code:"#6495ED",
                img:"img/NIKE_AIR_FORCE_1_LOW___07_FM_CUT_OUT_SWOOSH_WHITE_BLUE-mini.png",
            },
            {   
                code:"#FFB6C1",
                img:"img/NIKE_AIR_FORCE_1_LOW_EXPERIMENTAL_RACER_PINK-mini.png",
            },
            {   
                code:"#EE82EE",
                img:"img/NIKE_AIR_FORCE_1_LOW_HOOPS_WHITE_PURPLE-mini.png",
            },
            {   
                code:"#111",
                img:"img/NIKE_AIR_FORCE_1_LOW_HOOPS_BLACK_UNIVERSITY_GOLD-mini.png",
            },
            {   
                code:"#87CEFA",
                img:"img/NIKE_AIR_FORCE_1_LOW_MULTI_SWOOSH_GREEN_WHITE-mini.png",
            },
        ],
    },
    {
        id:2,
        title:"AIR JORDAN",
        price: 170,
        colors:[
            {   
                code:"#8B0000",
                img:"img/NIKE_AIR_JORDAN_1_RETRO_MID_BLACK_GYM_RED-mini.png",
            },
            {   
                code:"#6495ED",
                img:"img/NIKE_AIR_JORDAN_1_RETRO_MID_SIGNAL_BLUE-mini.png",
            },
            {   
                code:"#FFB6C1",
                img:"img/NIKE_AIR_JORDAN_1_RETRO_MID_CRIMSON_TINT-mini.png",
            },
            {   
                code:"#EE82EE",
                img:"img/NIKE_AIR_JORDAN_1_RETRO_MID_BERRY_PINK-mini.png",
            },
            {   
                code:"#FFA500",
                img:"img/NIKE_AIR_JORDAN_1_RETRO_MID_TO_MY_FIRST_COACH-mini.png",
            },
        ],
    },

    {
        id:3,
        title:"NIKE LEBRON",
        price: 160,
        colors:[
            {   
                code:"#808080",
                img:"img/NIKE_LEBRON_17_LOW_PARTICLE_GREY-mini.png",
            },
            {   
                code:"#111",
                img:"img/NIKE_LEBRON_17_LOW_MULTICOLOR-mini.png",
            },
            {   
                code:"#EE82EE",
                img:"img/NIKE_LEBRON_17_LOW_LAKERS-mini.png",
            },
            {   
                code:"#FFB6C1",
                img:"img/NIKE_LEBRON_17_LOW_EASTER-mini.png",
            },
            {   
                code:"#8B0000",
                img:"img/NIKE_LEBRON_17_LOW_TITAN-mini.png",
            },

        ],
    },

    {
        id:4,
        title:"NIKE PG 4 ",
        price: 115,
        colors:[
            {   
                code:"#FFA500",
                img:"img/NIKE_PG_4_DIGI_CAMO_PAUL_GEORGE-mini.png",
            },
            {   
                code:"#fff",
                img:"img/NIKE_PG_4_USA_PAUL_GEORGE-mini.png",
            },
            {   
                code:"#111",
                img:"img/NIKE_PG_4_HEATHER_BLACK_BLUE_PAUL_GEORGE-mini.png",
            },
            {   
                code:"#1C1C1C",
                img:"img/NIKE_PG_4_CLIPPERS_PAUL_GEORGE-mini.png",
            },
            {   
                code:"#8B0000",
                img:"img/NIKE_PG_4_BRED_PAUL_GEORGE-mini.png",
            },
        ],
    },

    {
        id:5,
        title:"NIKE BLAZER",
        price: 119,
        colors:[
            {   
                code:"#8B0000",
                img:"img/NIKE_BLAZER_LOW_RETRO_BASKETBALL_MANTRA_ORANGEs-mini.png",
            },
            {   
                code:"#fff",
                img:"img/NIKE_BLAZER_LOW_RETRO_BASKETBALL_WHITE_BLACK_VOLT-mini.png",
            },
            {   
                code:"#808080",
                img:"img/NIKE_BLAZER_LOW_RETRO_BASKETBALL_WOLF_GREY-mini.png",
            },
            {   
                code:"#fff",
                img:"img/NIKE_BLAZER_MID___77_RETRO_NBA_75th_ANNIVERSARY_MULTICOLOR-mini.png",
            },
            {   
                code:"#6495ED",
                img:"img/NIKE_BLAZER_MID___77_RETRO_SUEDE_DEEP_ROYAL_BLUE-mini.png",
            },
           
        ],
    }

]

let choosenProduct = products[0];
const current_product_img =document.querySelector(".product_img");
const current_product_title =document.querySelector(".product_title");
const current_product_price =document.querySelector(".product_price");
const current_product_colors =document.querySelectorAll(".color");
const current_product_sizes =document.querySelectorAll(".size");


menuItems.forEach(function(item, project2){
    item.addEventListener("click", function(){
        //change the current slide
        slider.style.transform = `translateX(${ -100 * project2}vw)`;
        
        // change the choosen product
        choosenProduct = products[project2]
        
        //change texts of current product
        current_product_title.textContent = choosenProduct.title;
        current_product_price.textContent = "$" + choosenProduct.price;
        current_product_img.src = choosenProduct.colors[0].img;
       
         //asing new colors 
        current_product_colors.forEach(function(color, project2){
            color.style.backgroundColor = choosenProduct.colors[project2].code;
        })
    });
});

current_product_colors.forEach(function(color,project2){
    color.addEventListener("click", function(){
        current_product_img.src = choosenProduct.colors[project2].img; 
    });
});
current_product_sizes.forEach(function(size,project2){
    size.addEventListener("click", function(){
        current_product_sizes.forEach(function(size){
            size.style.backgroundColor = "#fff";
            size.style.color = "#111";  
        })
        size.style.backgroundColor = "#111";
        size.style.color = "#fff";
    })
});


// payment

const product_button = document.querySelector(".product_button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

product_button.addEventListener("click", function(){
    payment.style.display = "flex";
})

close.addEventListener("click", function(){
    payment.style.display = "none";
})