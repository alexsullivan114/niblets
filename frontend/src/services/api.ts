import {API_ROOT} from '../config';

export type RossStuffItem = {
    author: string;
    id: string;
    message: string;
}

export class ApiServer {
    static getRossStuff(): Promise<null | RossStuffItem[]> {
        return fetch(`${API_ROOT}/greeting`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('getRossStuff errored');
                return null;
            })
            .catch(error => {
                console.log(error);
                return null;
            });
    }
}