import type { Skill } from '../data/skills'

type Props = {
  skills: Skill[]
}

// 关于我与技能标签
const About = ({ skills }: Props) => {
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-start to-accent-end opacity-80" />
        <div>
          <h2 className="text-2xl font-semibold">关于我</h2>
          <p className="text-sm text-foreground/70">YuFen｜求职意向：AI 产品经理</p>
        </div>
      </div>
      <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
        你好，我是 YuFeng，一个AI产品的极客体验派。
        我习惯从用户需求与业务目标出发，与技术团队紧密协作，推动从概念验证（PoC）、最小可行产品（MVP）到完整产品的全链路过程。
        同时重视数据闭环与指标设计，让每一次功能迭代都有清晰的验证方式与量化结果。
      </p>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-xs text-foreground/60">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
