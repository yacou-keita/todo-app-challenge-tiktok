const openModal = document.getElementById("open_modal");
const closeModalWithButton = document.getElementById("close_modal_with_button");
const closeModalWithIcon = document.getElementById("close_modal_icon");
const modal = document.getElementsByClassName("modal-container").item(0);


const closeModal = () => {
    console.log("remove")
    modal.classList.remove("show_modal")
}

openModal.addEventListener("click", () => {
    modal.classList.add("show_modal")
});

closeModalWithButton.addEventListener("click", closeModal);
closeModalWithIcon.addEventListener("click", closeModal);


