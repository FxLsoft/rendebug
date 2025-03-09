import { sendAjax } from '@utils';

export function updateStatus (id, status) {
    return sendAjax({
        url: '/updateBugStatusById',
        data: {
            id,
            status
        },
        type: 'POST'
    });
}

export function deleteBugByIds (ids) {
    return sendAjax({
        url: '/deleteBugByIds',
        data: {
            ids
        },
        type: 'POST'
    })
}