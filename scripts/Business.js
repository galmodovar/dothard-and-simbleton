export const Business = (obj) => {
    return `
    <section class="business">
        <h2 class="name">${obj.companyName}</h2>
        <div class="streetAddress">${obj.addressFullStreet}</div>
        <div class="cityAddress">${obj.addressCity}${obj.addressStateCode}${obj.addressZipCode}</div>
    </section>`
}