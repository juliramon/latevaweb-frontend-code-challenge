const scrollDownButton = document.getElementById("scrollDownBtn");
const servicesSection = document.getElementById("services");
scrollDownButton.addEventListener("click", () =>
  servicesSection.scrollIntoView()
);

// $(document).ready(() => {
//   $(".intro .slick").slick({
//     infinite: false,
//     dots: false,
//     slidesToShow: 1,
//   });
// });
