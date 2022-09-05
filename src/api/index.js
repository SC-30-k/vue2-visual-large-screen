/**
 * API统一管理
 * 获取服务器的接口的数据
 */
import request from './request'


// 省份数据接口  --需传参数  name:省份名称
export const findProvinceAPI = (name)=>{
    return request({
        url:`/findProvince`,
        method:'get',
        params:{
            "name":name
        }
    })
}

// 国家数据接口
export const findCountryAPI = ()=>{
    return request({
        url:"/findCountry",
        method:'get'
    })
}

// 学校数据接口
export const findSchoolAPI = (name)=>{
    return request({
        url:"/findSchool",
        method:'get'
    })
}


/**
 * 学校/省建设状态总览接口  
 * 需要传递参数
*/ 
export const getSchoolOrProvinceAPI = (name)=>{
    return request({
        url:"/getSchoolOrProvince",
        method:'get',
        params:{
            "school":name,
        }
    })
}

/**
 * 院校专业建设状态总览接口
 * 需要传递两个参数
 *  name: 专业名称
 *  school:学校名称
 */

export const findSchoolMajorAPI = ({name,school})=>{
    return request({
        url:"/findSchoolMajor",
        method:'get',
        params:{
            "name":name,
            "school":school
        }
    })
}

/**
 * 全国/全省专业建设状态总览
 * 需要传递两个参数
 * name:专业名称
 * province:省份名称
 */
export const findCountryOrProvinceMajor = ({name,province})=>{
    return request({
        url:"/findCountryOrProvinceMajor",
        method:'get',
        params:{
            "name":name,
            "province":province
        }
    })
}

/**
 * 获取学校搜索接口
 * getSchMajorSearchList
 * 
 */
export const getSchMajorSearchList = (name)=>{
    return request({
        url:'/getSchMajorSearchList',
        method:'get',
        params:{
            name
        }
    })
}