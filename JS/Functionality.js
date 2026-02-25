fetch("Data-Store/Brand-page-Data.json").then(response => response.json()).then(
    data => {
        let brandcard = document.getElementById("Card")
        for (let i = 0; i < data.length; i++) {
            let output = `

        
            <div class="brand-card" data-brand="${data[i].Brand.toLowerCase()}">
            <div class="brand-card-img">
                <img data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="getBrandRecord(${data[i].id})" src="${data[i].img}" width="250px" height="210px" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                        fill="#000">
                        <path
                            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                <!-- <span>-34%</span> -->
            </div>
            <div class="brand-card-text">
            <span class="discount-badge">-30%</span>
                <h4 class="product-title">${data[i].Name}</h4>
                <p><span class="line-throw">${data[i]["DiscountPrice"]}</span><span class="price">${data[i]["Price"]}</span></p>
                <p class="discription">${data[i].shortDiscription}</p>
                <img class="add-cart" src="${data[i]["Shoping-bag"]}" alt="">
            </div>
            </div>
           `;
            brandcard.innerHTML += output;
        }
    }
);

function getBrandRecord(id) {
    let popup = document.getElementsByClassName("modal-body");

    // popup.forEach(element =>{
    //     element.innerHTML = id;
    // });
    let product_id = id;
    product_id = Number(product_id);

    fetch("Data-Store/Brand-page-Data.json").then(res => res.json()).then(
        rec => {


            let result = rec.filter(k => k.id == product_id);

            popup[0].innerHTML = `
        <div id="cards-full" class="cards-full">
        <div class="images-sec">
            <div class="image-box">
                <div class="box">
                    <img src="${result[0].img}" class="thumb" width="120px" height="120px" alt="">
                </div>
                <div class="box">
                    <img src="${result[0].img1}" class="thumb" width="120px" height="120px" alt="">
                </div>
                <div class="box">
                    <img src="${result[0].img2}" class="thumb" width="120px" height="120px" alt="">
                </div>
                <div class="box">
                    <img src="${result[0].img3}" class="thumb" width="120px" height="120px" alt="">
                </div>
            </div>
            <div class="full-image">
                <div id="image">
                    <img src="${result[0].img}" id="mainImage" width="500" height="500" alt="">
                </div>
            </div>
        </div>
        <div class="content-sec">
           <h2 class="product-title">${result[0].Name}</h2>
            <h1><span class="line-throw">${result[0].DiscountPrice}</span><span class="price">${result[0].Price}</span></h1>
            <div class="button">
                <button class="add-cart"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#ffffff">
                        <path
                            d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                    </svg>Add to cart</button>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px"
                    fill="#000">
                    <path
                        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
            </div>
            <div class="discription">
                <p>${result[0].Discription}</p>
            </div>
            <div class="rating">
                ⭐⭐⭐⭐⭐ <span>(24 Reviews)</span>
            </div>

        </div>
        </div>
            `;
            setTimeout(() => {

                let thumbnails = document.querySelectorAll(".thumb");
                let mainImage = document.getElementById("mainImage");

                thumbnails.forEach(img => {
                    img.addEventListener("click", function () {
                        mainImage.src = this.src;
                    });
                });

            }, 100);
        }
    );


};

fetch("Data-Store/Occasions-Page-data.json").then(response => response.json()).then(
    data => {
        let Occasionscard = document.getElementById("occasions-card")
        for (let i = 0; i < data.length; i++) {
            let output = `
            <div class="occasions-card" data-brand="${data[i].Brand.toLowerCase()}">
            <div class="occasions-card-img">
                <img data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="getOccasionRecord(${data[i].id})" src="${data[i].img}" width="250px" height="210px" alt="">
                 <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                        fill="#000">
                        <path
                            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                <!-- <span>-34%</span> -->
            </div>
            <div class="occasions-card-text">
             <span class="discount-badge">-40%</span>
                <h4 class="product-title">${data[i].Name}</h4>
                <p><span class="line-throw">${data[i]["DiscountPrice"]}</span><span class="price">${data[i]["Price"]}</span></p>
                <p class="discription">${data[i].shortDsicription}</p>
                <img class="add-cart" src="${data[i]["Shoping-bag"]}" alt="">                
            </div>
            </div>
            `
            Occasionscard.innerHTML += output;
        }
    }
);

function getOccasionRecord(id) {
    let popup = document.getElementsByClassName("modal-body");

    let product_id = id;
    product_id = Number(product_id);

    fetch("Data-Store/Occasions-Page-data.json").then(res => res.json()).then(
        rec => {


            let result = rec.filter(k => k.id == product_id);

            popup[0].innerHTML = `
        <div class="cards-full">
        <div class="images-sec">
            <div class="image-box">
                <div class="box">
                    <img src="${result[0].img}" class="thumb" width="120px" height="120px" alt="">
                </div>
                <div class="box">
                    <img src="${result[0].img1}" class="thumb" width="120px" height="120px" alt="">
                </div>
                <div class="box">
                    <img src="${result[0].img2}" class="thumb" width="120px" height="120px" alt="">
                </div>
                <div class="box">
                    <img src="${result[0].img3}" class="thumb" width="120px" height="120px" alt="">
                </div>
            </div>
            <div class="full-image">
                <div id="image">
                    <img src="${result[0].img}" id="mainImage" width="500" height="500" alt="">
                </div>
            </div>
        </div>
        <div class="content-sec">
           <h2 class="product-title">${result[0].Name}</h2>
            <h1><span class="line-throw">${result[0].DiscountPrice}</span><span class="price">${result[0].Price}</span></h1>
            <div class="button">
                <button class="add-cart"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#ffffff">
                        <path
                            d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                    </svg>Add to cart</button>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px"
                    fill="#000">
                    <path
                        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
            </div>
            <div class="discription">
                <p>${result[0].Discription}</p>
            </div>
            <div class="rating">
                ⭐⭐⭐⭐⭐ <span>(24 Reviews)</span>
            </div>

        </div>
        </div>
            `;
            setTimeout(() => {

                let thumbnails = document.querySelectorAll(".thumb");
                let mainImage = document.getElementById("mainImage");

                thumbnails.forEach(img => {
                    img.addEventListener("click", function () {
                        mainImage.src = this.src;
                    });
                });

            }, 100);
        }
    );


};

function showsidebar() {
    document.getElementById("side-bar").classList.add('active');
};
function hidesidebar() {
    document.getElementById("side-bar").classList.remove('active');
};
let b_button = document.querySelectorAll(".Brand-button button");

b_button.forEach(btn => {
    btn.addEventListener("click", function () {

        let brand = this.dataset.brand;
        let b_cards = document.querySelectorAll(".brand-card");

        b_cards.forEach(card => {
            if (brand === "all" || card.dataset.brand === brand) {
                card.style.display = "inline-block";
            } else {
                card.style.display = "none";
            }
        });

        b_button.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});


let o_button = document.querySelectorAll(".occasions-button button");

o_button.forEach(btn => {
    btn.addEventListener("click", function () {

        let occasions = this.dataset.brand.toLowerCase();
        let o_card = document.querySelectorAll(".occasions-card");

        o_card.forEach(card => {

            if (occasions === "all" || card.dataset.brand === occasions) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        o_button.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

    });
});
