export type Skill = {
  name: string
  level: string
}

// 技能标签列表，方便后续扩展
const skills: Skill[] = [
  { name: '大模型应用架构', level: '了解' },
  { name: 'Prompt工程与治理', level: '熟练' },
  { name: '数据闭环体系设计', level: '了解' },
  { name: 'AI指标体系与度量', level: '良好' },
  { name: 'AI交互设计', level: '良好' },
  { name: '产品需求文档(PRD)撰写', level: '良好' },
  { name: '机器学习工程流程', level: '良好' },
  { name: '数据查询与分析', level: '了解' },
]

export default skills
