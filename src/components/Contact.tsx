// 联系方式与社交链接
const Contact = () => {
  const contacts = [
    { label: '邮箱', value: 'huyufeng227@163.com', href: 'mailto:huyufeng227@163.com' },
    { label: 'GitHub', value: 'github.com/HYFLLLo', href: 'https://github.com/HYFLLLo' },
  ]

  return (
    <section id="contact" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-start to-accent-end opacity-80" />
        <div>
          <h2 className="text-2xl font-semibold">联系方式</h2>
          <p className="text-sm text-foreground/70">保持联络，欢迎合作</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:bg-white/10"
          >
            <div>
              <p className="text-sm text-foreground/60">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
            <span className="text-xs text-accent-end">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
