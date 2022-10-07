
export function showMessage(message, styleBg) {

    Toastify({
        text: message,
        duration: 5000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: styleBg,
        },
        onClick: function () { }, // Callback after click
    }).showToast();
}