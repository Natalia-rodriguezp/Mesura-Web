console.log("Holas nasmon")


const APIController = (function () {
    
    const clientId = '51dc92d09b7e436ebfab395288839ddb';
    const clientSecret = 'b8a2f23e9cae450093d9b960f71ee0f9';

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

