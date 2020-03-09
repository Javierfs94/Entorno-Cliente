/**
* Clase Principal
*
* @author Francisco Javier Frías Serrano
*/

(function ($) {
    $.fn.efecto = function (settings) {
        let config = {'foo': 'bar'};
 
        if (settings) jQuery.extend(config, settings);
 
        this.each(function () {
            // element-specific code here
            
        });
 
        return this;
    };
})(jQuery);