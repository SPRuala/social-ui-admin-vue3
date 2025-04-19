import request from '@/config/axios'

// 服务预约 VO
export interface ServiceReservationVO {
  id: number // 编号
  typeId: number // 服务类型
  appointmenttime: Date // 预约时间
  remark: string // 预约备注
  userId: number // 用户账号
  userName: string // 预约者名称
}

// 服务预约 API
export const ServiceReservationApi = {
  // 查询服务预约分页
  getServiceReservationPage: async (params: any) => {
    return await request.get({ url: `/system/service-reservation/page`, params })
  },

  // 查询服务预约详情
  getServiceReservation: async (id: number) => {
    return await request.get({ url: `/system/service-reservation/get?id=` + id })
  },

  // 新增服务预约
  createServiceReservation: async (data: ServiceReservationVO) => {
    return await request.post({ url: `/system/service-reservation/create`, data })
  },

  // 修改服务预约
  updateServiceReservation: async (data: ServiceReservationVO) => {
    return await request.put({ url: `/system/service-reservation/update`, data })
  },

  // 删除服务预约
  deleteServiceReservation: async (id: number) => {
    return await request.delete({ url: `/system/service-reservation/delete?id=` + id })
  },

  // 导出服务预约 Excel
  exportServiceReservation: async (params) => {
    return await request.download({ url: `/system/service-reservation/export-excel`, params })
  }
}