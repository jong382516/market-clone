const form = document.getElementById("#wtite-form");

const handleSubmitForm = async (event) => {
  event.preventDefault(); 
  const body = new FormData(form);
  body.append("insetAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error(e); 
  }
};

form.addEventListener("submit", handleSubmitForm)
