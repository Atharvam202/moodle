$(document).ready(function() {
    $('.base_number').each(function() {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-val') }, {
            duration: 5000,
            easing: 'swing',
            step: function() {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
});