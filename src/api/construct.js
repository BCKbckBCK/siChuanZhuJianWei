import request from '@/utils/request'

export const contractDetail = params => {
    return request({
        url: '/construction/contractDetail?projectCode=' + params.projectCode,
        method: 'get',
    })
}