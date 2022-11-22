const APIController = (function () {
    const clientId = '';
    const clientSecret = '';

    //Provate
    const _getToken = async () => {

        const result = await fetch('', {
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        }
        );

        const data = await result.json();
        return data.access_token;

    }

    const _getGenres = async (token) => {
        const result = await fetch('', {
            method: 'GET',
            header: {
                'Authorization': 'Bearer ' + token,
            }
        });
        const data = await result.json();
        return data.categories.items;
        
    }


}());