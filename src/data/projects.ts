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
    link: 'https://github.com/HYFLLLo/DataAnalysiser',
    repo: 'https://my.feishu.cn/docx/LcsVdkY5AoB2iZxmXDncMOernYe',
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
    title: 'Todo List',
    description: '这是一个功能丰富的待办事项管理网站，采用现代化的前端技术栈构建，提供了完整的任务管理功能。该应用不仅具备基本的待办事项创建和管理功能，还集成了高级特性如分类、优先级、截止日期、搜索、过滤和统计数据展示。',
    stack: ['JavaScript (ES6+)', 'CSS3 : Bootstrap', 'HTML5','Web Storage API','Tailwind CSS','Autoprefixer'],
    image: 'https://i.ibb.co/BxC2dg1/QQ-20260129112844.png',
    link: 'https://github.com/HYFLLLo/ToDO',
  },
]

export default projects
