import './scss/style.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';



$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    $('.add-to-cart-btn').click(function () {
        alert('تمت اضافة المنتج الى عربة الشراء');
    });

    $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    $('[data-product-quantity]').change(function(){
        var newQuantity= $(this).val();
        var parent = $(this).parents('[data-product-info]');
        var pricePerUnit = parent.attr('data-product-price');
        var totalPriceForProduct = newQuantity * pricePerUnit;
        parent.find('.total-price-for-product').text(totalPriceForProduct + '$')
    })

});