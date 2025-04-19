import request from '@/config/axios'

// 医疗预约 VO
export interface SubscribeVO {
  id: number // 编号
  hospital: string // 医院名称
  treatmenttype: string // 医疗类型
  appointmenttime: Date // 预约时间
  remark: string // 预约备注
  userId: number // 用户账号
  name: string // 预约者名称
}

// 医疗预约 API
export const SubscribeApi = {
  // 查询医疗预约分页
  getSubscribePage: async (params: any) => {
    return await request.get({ url: `/system/subscribe/page`, params })
  },

  // 查询医疗预约详情
  getSubscribe: async (id: number) => {
    return await request.get({ url: `/system/subscribe/get?id=` + id })
  },

  // 新增医疗预约
  createSubscribe: async (data: SubscribeVO) => {
    return await request.post({ url: `/system/subscribe/create`, data })
  },

  // 修改医疗预约
  updateSubscribe: async (data: SubscribeVO) => {
    return await request.put({ url: `/system/subscribe/update`, data })
  },

  // 删除医疗预约
  deleteSubscribe: async (id: number) => {
    return await request.delete({ url: `/system/subscribe/delete?id=` + id })
  },

  // 导出医疗预约 Excel
  exportSubscribe: async (params) => {
    return await request.download({ url: `/system/subscribe/export-excel`, params })
  }
}