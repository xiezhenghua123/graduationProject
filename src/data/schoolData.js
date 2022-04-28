/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-27 20:43:23
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-27 21:38:46
 */
const collegeData = [
  '碧泉书院·哲学与历史文化学院',
  '商学院',
  '公共管理学院',
  '法学院',
  '知识产权学院',
  '信用风险管理学院',
  '马克思主义学院',
  '文学与新闻学院',
  '外国语学院',
  '数学与计算科学学院',
  '物理与光电工程学院',
  '材料科学与工程学院',
  '化学学院',
  '化工学院',
  '机械工程学院',
  '自动化与电子信息学院',
  '计算机学院·网络空间安全学院',
  '土木工程与力学学院',
  '环境与资源学院',
  '艺术学院·艺术教育中心',
  '国际交流学院',
  '兴湘学院'
]

const majorData = {
  '碧泉书院·哲学与历史文化学院': [
    '哲学',
    '文化产业管理',
    '历史学',
    '文化产业管理'
  ],
  商学院: [
    '经济学',
    '国际经济与贸易',
    '金融学',
    '工商管理',
    '会计学',
    '	财务管理',
    '电子商务',
    '人力资源管理',
    '旅游管理'
  ],
  公共管理学院: [
    '政治学与行政学',
    '行政管理',
    '信息管理与信息系统',
    '档案学',
    '图书馆学',
    '公共管理类(韶峰班)'
  ],
  法学院: ['法学'],
  知识产权学院: ['知识产权'],
  信用风险管理学院: ['信用风险管理与法律防控'],
  马克思主义学院: ['思想政治教育', '中国共产党历史'],
  文学与新闻学院: ['汉语言文学', '新闻学', '广播电视学', '广告学'],
  外国语学院: ['英语', '德语', '法语', '日语', '汉语国际教育', '西班牙语'],
  数学与计算科学学院: [
    '数学与应用数学',
    '信息与计算科学',
    '统计学',
    '数据科学与大数据技术',
    ''
  ],
  物理与光电工程学院: [
    '物理学',
    '微电子科学与工程',
    '测控技术与仪器',
    '光电信息科学与工程'
  ],
  材料科学与工程学院: [
    '材料物理',
    '材料科学与工程',
    '新能源材料与器件',
    '金属材料工程'
  ],
  化工学院: ['化学工程与工艺', '制药工程', '食品科学与工程'],
  化学学院: ['化学', '应用化学', '材料化学', '高分子材料与工程', ''],
  机械工程学院: [
    '机械设计制造及其自动化',
    '材料成型及控制工程',
    '工业设计',
    '过程装备与控制工程',
    '能源与动力工程'
  ],
  自动化与电子信息学院: ['自动化', '通信工程', '电子信息工程'],
  '计算机学院·网络空间安全学院': [
    '软件工程',
    '计算机科学与技术',
    '网络空间安全'
  ],
  土木工程与力学学院: ['土木工程', '工程力学', '测绘工程'],
  环境与资源学院: ['安全工程', '环境科学', '环境工程', '环保设备工程'],
  艺术学院: ['动画', '艺术设计学', '视觉传达设计'],
  国际交流学院: ['机械设计制造及其自动化'],
  兴湘学院: [
    '英语',
    '日语',
    '汉语言文学',
    '广告学',
    '法学',
    '国际经济与贸易',
    '金融学',
    '工商管理',
    '会计学',
    '财务管理',
    '电子商务',
    '旅游管理',
    '人力资源管理',
    '动画',
    '行政管理',
    '计算机科学与技术',
    '电子信息工程',
    '通信工程',
    '自动化',
    '土木工程',
    '材料成型及控制工程',
    '机械设计制造及其自动化',
    '高分子材料与工程',
    '化学工程与工艺',
    '制药工程'
  ]
}

export { collegeData, majorData }