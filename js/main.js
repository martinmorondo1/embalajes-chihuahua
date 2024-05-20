(function ($) {
    "use strict";

    // Función para activar el carrusel personalizado
    $(document).ready(function () {
        $(".custom-carousel").owlCarousel({
            autoWidth: true,
            loop: true
        });

        // Evento click para marcar elemento activo
        $(".custom-carousel .item").click(function () {
            $(".custom-carousel .item").not($(this)).removeClass("active");
            $(this).toggleClass("active");
        });
    });

    // Función para controlar la navegación del carrusel con botones de prev y next
    $(document).ready(function () {
        // Selector del carrusel
        var carousel = $(".custom-carousel");

        // Selector de los botones de prev y next
        var prevButton = $(".custom-nav .arrow.prev");
        var nextButton = $(".custom-nav .arrow.next");

        // Evento click para el botón de prev
        prevButton.click(function () {
            carousel.trigger("prev.owl.carousel");
        });

        // Evento click para el botón de next
        nextButton.click(function () {
            carousel.trigger("next.owl.carousel");
        });
    });

})(jQuery);
