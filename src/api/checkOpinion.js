import request from '@/utils/request'
export const checkOpinion = data => {
    return request({
        url: '/checkOpinion/doAdd',
        method: 'post',
        data
    })
}