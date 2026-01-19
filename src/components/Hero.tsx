// 首页主视觉：大标题与简短自我介绍
const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent px-6 py-16 shadow-glow sm:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.35),transparent_45%)]" />
      <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/80">
        YuFen｜AI 产品经理
      </p>
      <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        用 AI 与产品思维
        <span className="block bg-gradient-to-r from-accent-start via-pink-500 to-accent-end bg-clip-text text-transparent">
          落地有价值的智能产品
        </span>
      </h1>
      <p className="mb-8 max-w-2xl text-base text-foreground/80 sm:text-lg">
        关注从 0 到 1 的产品规划与从 1 到 N 的持续迭代，擅长结合业务目标与技术可行性，驱动 AI 产品真正解决用户问题、创造可量化的业务价值。
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-start to-accent-end px-5 py-3 text-sm font-semibold text-background shadow-glow transition hover:opacity-90"
        >
          查看项目
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/30 hover:bg-white/5"
        >
          联系方式
        </a>
      </div>
    </section>
  )
}

export default Hero
