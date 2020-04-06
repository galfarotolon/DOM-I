const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Links 
const navA = document.querySelectorAll("nav a")


for (let i = 0; i < navA.length; i++) {
  const contents = Object.values(siteContent.nav)
  navA[i].textContent = contents[i];
}


//Main Header IMG
let headerImg = document.getElementById("cta-img").src = siteContent.cta["img-src"];

//H1 
document.querySelector(".cta .cta-text h1").textContent = siteContent.cta.h1;

//Header Button
document.querySelector(".cta button").textContent = siteContent.cta.button;





const h4Titles = document.querySelectorAll(".text-content h4")

h4Titles[0].textContent = siteContent["main-content"]["features-h4"]
h4Titles[1].textContent = siteContent["main-content"]["about-h4"]
h4Titles[2].textContent = siteContent["main-content"]["services-h4"]
h4Titles[3].textContent = siteContent["main-content"]["product-h4"]
h4Titles[4].textContent = siteContent["main-content"]["vision-h4"]


document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];



const mainContentP = document.querySelectorAll(".text-content p")

mainContentP[0].textContent = siteContent["main-content"]["features-content"]
mainContentP[1].textContent = siteContent["main-content"]["about-content"]
mainContentP[2].textContent = siteContent["main-content"]["services-content"]
mainContentP[3].textContent = siteContent["main-content"]["product-content"]
mainContentP[4].textContent = siteContent["main-content"]["vision-content"]



document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];



const contactInfo = document.querySelectorAll(".contact p")


for (let i = 0; i < contactInfo.length; i++) {
  const items = Object.values(siteContent.contact)
  contactInfo[i].textContent = items[i + 1];
}


document.querySelector("footer p").textContent = siteContent.footer.copyright;







document.getElementById("cta-img").addEventListener("click", function () {

  document.getElementById("cta-img").src = "img/troll-face.jpg"
});