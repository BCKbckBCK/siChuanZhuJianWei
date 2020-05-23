import request from '@/utils/request'

export const chooseDrawingOrgan = data => {
    return request({
        url: '/construction/chooseDrawing',
        method: 'post',
        data
    })
}
