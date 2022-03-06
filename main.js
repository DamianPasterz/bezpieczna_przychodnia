const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');
const btn_komunikaty = document.querySelector(".komunikaty")
const fieldComunicat = document.querySelector(".comiunicat")


burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');

})


btn_komunikaty.addEventListener("click", () => {
    fieldComunicat.innerHTML = "komunikat"


    console.log('komunikat')
}
)

