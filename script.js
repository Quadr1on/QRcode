function generateQRCode() {
    const amount = document.getElementById('amount').value.trim();
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    const upiUrl = `upi://pay?pa=georgeadorn58@oksbi&pn=Adorn&am=${amount}&cu=INR`;
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, {
        text: upiUrl,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}