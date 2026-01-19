export type Project = {
  title: string
  description: string
  stack: string[]
  image: string
  link?: string
  repo?: string
}

// 项目数据，后续可替换为真实内容
const projects: Project[] = [
  {
    title: '创意作品集站点',
    description: '基于 React + Tailwind CSS 打造的响应式作品集，包含平滑滚动、懒加载与渐变强调色。',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/portfolio',
    repo: 'https://github.com/yourname/portfolio',
  },
  {
    title: '组件库探索',
    description: '提炼常用 UI 模块（按钮、卡片、导航）并提供暗色主题与可复用样式配置。',
    stack: ['React', 'Storybook', 'CSS Architecture'],
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/ui-kit',
    repo: 'https://github.com/yourname/ui-kit',
  },
  {
    title: '数据可视化仪表盘',
    description: '支持懒加载与动画过渡的管理看板，突出性能优化与可访问性实践。',
    stack: ['Vite', 'React Query', 'Charts'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/dashboard',
  },
]

export default projects
