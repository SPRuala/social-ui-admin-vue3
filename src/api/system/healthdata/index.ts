import request from '@/config/axios'

// 老人健康数据 VO
export interface HealthDataVO {
  id: number // 编号
  userId: number // 老人编号
  height: number // 身高
  weight: number // 体重
  temperature: number // 体温
  heartRate: number // 心率
  systolicBloodPressure: number // 收缩血压
  diastolicBloodPressure: number // 舒张血压
  fastingBloodGlucose: number // 空腹血糖
  postprandialBloodGlucose: number // 餐后血糖
  bloodOxygenSaturation: number // 血氧饱和度
  cholesterol: number // 总胆固醇
  uricAcid: number // 尿酸
  leftEye: number // 左眼
  rightEye: number // 右眼
  leftEar: string // 左耳
  rightEar: string // 右耳
  musclePercentage: number // 肌肉率
  bodyFatPercentage: number // 体脂率
  waistCircumference: number // 腰围
  hipCircumference: number // 臀围
  moistureContent: number // 水分率
}

// 老人健康数据 API
export const HealthDataApi = {
  // 查询老人健康数据分页
  getHealthDataPage: async (params: any) => {
    return await request.get({ url: `/system/health-data/page`, params })
  },

  // 查询老人健康数据详情
  getHealthData: async (id: number) => {
    return await request.get({ url: `/system/health-data/get?id=` + id })
  },

  // 新增老人健康数据
  createHealthData: async (data: HealthDataVO) => {
    return await request.post({ url: `/system/health-data/create`, data })
  },

  // 修改老人健康数据
  updateHealthData: async (data: HealthDataVO) => {
    return await request.put({ url: `/system/health-data/update`, data })
  },

  // 删除老人健康数据
  deleteHealthData: async (id: number) => {
    return await request.delete({ url: `/system/health-data/delete?id=` + id })
  },

  // 导出老人健康数据 Excel
  exportHealthData: async (params) => {
    return await request.download({ url: `/system/health-data/export-excel`, params })
  }
}