const API_BASE = "https://trusthire-api-production-c210.up.railway.app";
const stripe = Stripe(pk_test_51T09pEJBLzpSz2JLjz8ZKtKI98cjIODTIsyzCG4f5XZBdCBnF9vqVA1a7c51ugEis1mJ7vPhFIyH6VmTKd7QdO1C00Q712b0K1); // coloque sua chave pública

document.getElementById("subscribe-btn").addEventListener("click", async () => {
    try {
        const res = await fetch(`${API_BASE}/create-checkout-session`, {
            method: "POST",
        });
        const data = await res.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            alert("Erro ao criar checkout: " + data.error);
        }
    } catch (err) {
        console.error(err);
        alert("Erro inesperado!");
    }
});
