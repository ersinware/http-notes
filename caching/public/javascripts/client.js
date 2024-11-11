window.addEventListener('load', onLoad)

async function onLoad() {
    const response = await fetch('/api', { method: 'GET' })
    const json = await response.json()

    const now = new Date(Date.now())
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    document.getElementById('now').innerHTML = `${ minutes }:${ seconds }`
    document.getElementById('cached').innerHTML = json.now
}