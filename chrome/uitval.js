function updateAppointmentItems() {
    const appointmentItems =
        document.getElementsByClassName("appointmentItem");


    for (let i = 0; i < appointmentItems.length; i++) {
        appointmentItems[i].className =
            "appointmentItem enrolledMandatory cancelled free lesson scheduleInfoAvailable";
    }
    const appointmentItemSmall = document.getElementsByClassName("compactAppointmentItem");

    for (let i = 0; i < appointmentItemSmall.length; i++) {
        appointmentItemSmall[i].className =
            "compactAppointmentItem enrolledMandatory cancelled free lesson scheduleInfoAvailable";
    }
}


// Voer de functie elke 0.5 seconden uit
setInterval(updateAppointmentItems, 500);
