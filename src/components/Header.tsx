// 顶部导航，包含站点品牌与快速跳转链接
const Header = () => {
  const navItems = [
    { label: '关于我', href: '#about' },
    { label: '项目', href: '#projects' },
    { label: '联系', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-foreground transition hover:opacity-80"
        >
          YuFen｜AI 产品经理
        </a>
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 font-medium text-foreground transition hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-accent-start to-accent-end px-4 py-2 text-sm font-semibold text-background shadow-glow transition hover:opacity-90 sm:inline-flex"
          >
            联系我
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
