export async function get_list() {
    const response = await fetch("http://127.0.0.1:5000/list")
    return await response.text()
}