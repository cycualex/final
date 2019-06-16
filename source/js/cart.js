$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
    updatetotal();  
    
});

$('.sub').click(function () {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    updatetotal();
});

$(".field").change(function(){
    updatetotal();
});

function ValidateNumber(e, pnumber)
{
    if (!/^\d+$/.test(pnumber))
    {
        e.value = /^\d+/.exec(e.value);
    }
    return false;
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
    updatetotal();
} else {
    ready();
    updatetotal();
}


//網頁loading後載入
function ready() {
    updatetotal();
}

function s_total(id){
    var price = parseInt(document.getElementById("price"+id).innerHTML);
    var quantity =  parseInt(document.getElementById("quantity"+id).value);
    var smailtoatl = price*quantity;
    document.getElementById("smalltotal"+id).innerHTML = smailtoatl;
}

function updatetotal(){
    var rows = document.getElementsByClassName('cart-row');
    var tprice = 0 ;
    for (var i = 0; i < rows.length; i++) {
        if(parseInt(document.getElementById("quantity"+i).value)==0)
            document.getElementById("quantity"+i).value = '1';
        var buymax = parseInt(document.getElementById("buymax"+i).innerHTML);
        if(parseInt(document.getElementById("quantity"+i).value) > buymax )
            document.getElementById("quantity"+i).value = buymax;
        s_total(i);
        
        tprice += parseInt(document.getElementById("smalltotal"+i).innerHTML);
    }
    document.getElementById("total").innerHTML = tprice;
}