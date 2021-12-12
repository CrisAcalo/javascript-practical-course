function  calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100)
    
    return precioConDescuento
}

function activeButtonPriceDiscount(){
    const coupons = ["josac", "cris", "tengoSueño"];
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    let couponDiscount;

    if (!coupons.includes(discountValue)){
        alert("El cupón que has ingresado no es válido");
        couponDiscount = 0;
    }else if(discountValue == coupons[0]){
        couponDiscount = 15;
    }else if(discountValue == coupons[1]){
        couponDiscount = 30;
    }else if(discountValue == coupons[2]){
        couponDiscount = 50;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponDiscount);

    const resultP = document.getElementById("resultP");
    resultP.innerText = `$${precioConDescuento}`;
}
