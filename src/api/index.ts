class CatsAPI {
    private apiUrl: string;
    private apiKey: string;

    constructor() {
        this.apiKey = 'live_mj1urdINrJgFenIIT1dPLqKI8ZXcrEgdVy6zUsioliRULrvR4VkAZ3NRCjJ6sewI';
        this.apiUrl = 'https://api.thecatapi.com/v1';
    }

    async breeds() {
        const response = await fetch(`${this.apiUrl}/breeds?${new URLSearchParams([
            ['page', '0'],
            ['limit', '100'],
            ['api_key', this.apiKey],
        ])}`);

        return response.json();
    }
}

export default CatsAPI;
