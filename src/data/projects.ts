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
    title: '数据分析系统',
    description: '这是一个基于Python和大语言模型的企业级智能决策分析系统，旨在为企业用户提供智能化的数据分析和决策支持。系统融合了传统数据分析技术与现代AI能力，通过自然语言交互方式为用户提供专业的业务分析。',
    stack: ['Streamlit (Web界面)', 'Python 3.12', 'Pandas、Matplotlib、Seaborn','LangChain (LLM框架)','ChromaDB (向量数据库)','Ollama + Qwen3-8B (本地大语言模型)','Pandas/NumPy/Matplotlib/Seaborn (数据分析与可视化)'],
    image: 'https://i.ibb.co/W4m7RsPc/image.png',
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
