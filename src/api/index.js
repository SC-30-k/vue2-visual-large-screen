/**
 * API统一管理
 * 获取服务器的接口的数据
 */
import request from './request'


// 省份数据接口
// export const findProvinceAPI = (name)=>{
//     request({
//         url:`/findProvince/${name}`,
//         method:'get'
//     })
// }

// 国家数据接口
export const findCountryAPI = ()=>{
    return request({
        url:"/findCountry",
        method:'get'
    })
}

// 学校数据接口
// export const findSchoolAPI = (name)=>{
//     request({
//         url:"/findSchool"
//     })
// }
