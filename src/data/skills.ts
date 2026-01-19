export type Skill = {
  name: string
  level: string
}

// 技能标签列表，方便后续扩展
const skills: Skill[] = [
  { name: 'React / React Router', level: '精通' },
  { name: 'TypeScript', level: '精通' },
  { name: 'Tailwind CSS', level: '熟练' },
  { name: 'Vite / 构建优化', level: '熟练' },
  { name: 'Framer Motion / 动效', level: '熟练' },
  { name: '可访问性 / Lighthouse', level: '良好' },
  { name: '性能优化 / 懒加载', level: '良好' },
  { name: 'UI/UX 协作', level: '良好' },
  { name: '单元测试 / 集成测试', level: '良好' },
]

export default skills
