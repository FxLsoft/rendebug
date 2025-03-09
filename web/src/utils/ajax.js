// @flow
interface RequestParam <U> {
    url: string;
    type?: string;
    data?: U;
    headers?: any;
}

export function sendAjax<T, U>({url, type = 'POST', data = {}, headers = {}}: RequestParam<U>): Promise<T> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('X-Device', 'Web');
        for (let key in (headers || {})) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.onload = () => {
            try {
                let data: T = JSON.parse(xhr.responseText);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }
        xhr.onerror = error => {
            reject(error);
        }
        xhr.send(JSON.stringify(data));
    });
};