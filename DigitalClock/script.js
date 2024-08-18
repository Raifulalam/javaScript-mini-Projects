

function updateClock() {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const formattedTime = `${hour % 12 || 12}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${ampm}`
    document.getElementById('clock').innerHTML = formattedTime


}
updateClock()
setInterval(updateClock, 1000)