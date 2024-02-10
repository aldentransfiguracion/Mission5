// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateButton').click(function () {
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#hourlyRate').val().substring(1)); // Remove $ sign
        if (!isNaN(hours) && hours > 0) {
            var total = hours * hourlyRate;
            $('#total').val('$' + total.toFixed(2));
        } else {
            $('#total').val('Invalid input');
        }
    });
});
