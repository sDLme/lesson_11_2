/**
 * Created by aleks on 26.12.2016.
 */
$(document).ready(function () {
    $('.get-app').on('click', function (e) {
        e.preventDefault(e);
        $('.modal').show();
    });
    $('.hide').on('click', function () {
        $('.modal').hide();
    });

    $('.round i').on('click', function () {
        var isThis = $(this),
        id = isThis.attr('data-id'),
        obj = {
            bell: 'its bell',
            chart: 'its chart',
            calendar: 'its calendar',
            bars: 'its bars',
            heart: 'its heart'
        };
       $('#slider-text').html(obj[id]);
    });
});
