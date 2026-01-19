// 页脚信息
const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-sm text-foreground/60 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} My Portfolio. Crafted with React + Tailwind CSS.</span>
        <a
          href="#top"
          className="rounded-full bg-white/5 px-3 py-1 font-medium text-foreground transition hover:bg-white/10"
        >
          返回顶部
        </a>
      </div>
    </footer>
  )
}

export default Footer
