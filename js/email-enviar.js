const $form = document.querySelector("#contact-form");
const $botonMail = document.querySelector("#truco-mail");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get("inquiry"));
    $botonMail.setAttribute("href", `mailto:gustavosilvaartaza@gmail.com?subject=${form.get("inquiry")}   ${form.get("email")}&body=${form.get("message")}`);
    $botonMail.click();
}
