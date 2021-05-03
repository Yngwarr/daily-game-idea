async function init() {
    const info = await (await fetch('../info.json')).json();
    document.getElementById('day-number').innerText = info.day.toString();
    document.getElementById('theme').innerText = info.theme;
}
