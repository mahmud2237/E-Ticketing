// utility
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function appendChild(elementId, value) {
    const element = document.getElementById(elementId);
    element.appendChild(value);
}
const seats = document.querySelectorAll(".busSeat");
let count = 0;
for (const seat of seats) {
    seat.addEventListener("click", function (e) {
        count += 1;
        if (count == 4) {
            for (const s of seats) {
                s.setAttribute("disabled", true);
            }
        }

        const seatColor = (seat.style.backgroundColor = "green");
        seat.style.color = "black";

        const totalSeats = document.getElementById("seatLeft").innerText;
        const totalSeatInt = parseInt(totalSeats);
        document.getElementById("seatLeft").innerText = totalSeatInt - 1;

        const price = document.getElementById("totalPrice").innerText;
        const totalPriceInt = parseInt(price);
        const totalPrice = totalPriceInt + 550;

        const seatNo = e.target.innerText;
        const p = document.createElement("p");
        p.innerText = seatNo;
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        const p3 = document.createElement("p");
        p3.innerText = "550";

        appendChild("seatName", p);
        appendChild("class", p2);
        appendChild("price", p3);

        setTextElementValueById("totalPrice", totalPrice);
        setTextElementValueById("grandTotal", totalPrice);
        setTextElementValueById("seatNo", count);
    });
}

document.getElementById("coupon").addEventListener("keyup", function (e) {
    const text = e.target.value;
    let discount;
    const token = document.getElementById("couponApply");
    if (count !== 4) {
      token.setAttribute("disabled", true);
      alert("Coupon not allow, For coupon book 4 seat");
    } else if (count == 4 && text === "NEW15") {
      token.removeAttribute("disabled");
      const takeTotalPrice = document.getElementById("grandTotal").innerText;
      const grandTotalInt = parseInt(takeTotalPrice);
      discount = grandTotalInt * 0.15;
      newDiscountTotal = grandTotalInt - grandTotalInt * 0.15;
    } else if (count == 4 && text === "NEW20") {
      token.removeAttribute("disabled");
      const takeTotalPrice = document.getElementById("grandTotal").innerText;
      const grandTotalInt = parseInt(takeTotalPrice);
      discount = grandTotalInt * 0.2;
      newDiscountTotal = grandTotalInt - grandTotalInt * 0.2;
    } else {
      token.setAttribute("disabled", true);
    }
  });
  
  function discountedGrandTotal() {
    setTextElementValueById("grandTotal", newDiscountTotal);
    document.getElementById("couponApply").classList.add("hidden");
    document.getElementById("couponHolder").classList.add("hidden");
    const p4 = document.createElement("p");
  }
  
  document.getElementById("couponApply").addEventListener("click", function (e) {
    discountedGrandTotal();
  });
  document.getElementById("PhoneNo").addEventListener("keyup", function (e) {
    const text = e.target.value;
    const input = document.getElementById("modal");
    if (count < 1) {
      alert("Please select at least one seat");
      input.setAttribute("disabled", true);
      return back;
    } else if (!isNaN(text) && text.length > 0 && count <= 4 && count != 0) {
      input.removeAttribute("disabled");
    } else {
      input.setAttribute("disabled", true);
    }
  });
