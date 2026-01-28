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
    title: '企业级智能决策分析系统',
    description: '这是一个面向企业级智能决策的数据分析系统，集成了大模型推理、数据分析和知识库管理功能。系统通过分析销售、客户、市场和产品数据，结合企业知识库信息，为企业用户提供智能化的决策建议。核心功能包括智能数据分析（销售趋势、客户细分、市场竞争、产品性能分析）、大模型推理（基于Qwen3-8B生成决策建议）、知识库管理（企业政策、行业知识、销售技巧）、向量搜索和数据可视化。系统采用本地部署模式，确保数据安全，同时通过模块化设计提供良好的可扩展性。',
    stack: ['Streamlit', 'Python', 'Pandas、Matplotlib、Seaborn','LangChain、Ollama、Qwen3-8B','Chroma'],
    image: 'https://ibb.co/C3R4SWMn',
    link: '-',
    repo: 'https://github.com/HYFLLLo/DataAnalysiser',
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
