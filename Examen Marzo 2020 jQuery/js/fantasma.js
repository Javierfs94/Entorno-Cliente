/**
 * Plugin Fantasma
 *
 * @author Francisco Javier Frías Serrano
 */

(function($) {
    $.fn.fantasma = function() {
        this.css("background-color", "green")
            .fadeOut("slow")
            .fadeIn("slow");
        return this;
    };
})(jQuery);