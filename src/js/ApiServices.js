const SERVEUR_ERROR_MSG = "Une erreur s'est produite"

async function manageResponse(response) {
    if (!response.ok) {
        let errorMessage = await response.text() || SERVEUR_ERROR_MSG
        throw new Error(errorMessage)
    }
    return await response.json();
}

export async function call_drive(url) {
    try {
        const response = await fetch(process.env.VUE_APP_API_URL + url)
        return manageResponse(response)
    } catch (error) {
        console.log(error)
        throw new Error(SERVEUR_ERROR_MSG)
    }

}

export async function post_drive(url, data) {
    try {
        const response = await fetch(process.env.VUE_APP_API_URL + url, {
            method: "POST",
            body: data.filter(val => val) // dans un tableau supprime les valeurs null
        });
        return manageResponse(response)
    } catch (error) {
        console.log(error)
        throw new Error(SERVEUR_ERROR_MSG)
    }
}

export async function get_medicaments() {
    /**
     * Retourne la liste des médicaments disponibles
     * @type {string}
     */
    let url = '/journee/medicament'
    return await call_drive(url);
}

export async function save_traitement(form) {
    /**
     * Sauvgarde du traitement du jour
     */
    const url = '/traitement/save'
    return await post_drive(url, form)
}

export async function get_plats() {
    /**
     * Retourne la liste des plats disponibles
     * @type {string}
     */
    let url = '/plats'
    return await call_drive(url);
}

export async function save_plats(form) {
    /**
     * Sauvegarde les plats de la journée
     * @type {string}
     */
    let url = '/save/plats'
    return await post_drive(url, form);
}

export async function get_complements() {
    /**
     * Retourne la liste des compléments disponibles
     * @type {string}
     */
    let url = '/complements'
    return await call_drive(url);
}

export async function save_complements(form) {
    /**
     * Sauvgarde des compléments
     * du jour
     */
    const url = '/complements/save'
    return await post_drive(url, form)
}
