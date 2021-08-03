import { getBusinesses } from "./database.js";
import { Business } from "./Business.js";

const businessSection = document.querySelector(".businessList")

export const businessList = () => {
    let businesses = getBusinesses()
    businessSection.innerHTML = "<h1>Active Businesses</h1>"

    businesses.forEach(
        (business) => {
            businessSection.innerHTML += Business(business);
        }
    )
}