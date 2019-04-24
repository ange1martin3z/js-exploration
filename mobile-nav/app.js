const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-items");
    const navItems = document.querySelectorAll(".nav-items li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navItems.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = 'navItemFade 0.5s ease forwards ${index / 7}s';
            }
        });

        burger.classList.toggle("toggle");
    
    });

}

navSlide();