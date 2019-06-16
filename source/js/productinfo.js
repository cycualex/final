
$(function () {
    var buymax = document.getElementById("buymax");
    $('.qtyplus').click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal < buymax.innerHTML ) {
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        }
    });
    $(".qtyminus").click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            $('input[name=' + fieldName + ']').val(1);
        }
    });
});

$(".qty").change(function(){

    if(parseInt(document.getElementById("qty").value)<0)
        document.getElementById("qty").value = '1';
    if(parseInt(document.getElementById("qty").value) > buymax.innerHTML )
        document.getElementById("qty").value = buymax.innerHTML;
});

function ValidateNumber(e, pnumber)
{
    if (!/^\d+$/.test(pnumber))
    {
        e.value = /^\d+/.exec(e.value);
    }
    return false;
}