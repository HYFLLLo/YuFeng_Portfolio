import type { Project } from '../data/projects'

type Props = {
  projects: Project[]
}

// 项目列表，以“可填写表格”的结构呈现各字段
const Projects = ({ projects }: Props) => {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-start to-accent-end opacity-80" />
        <div>
          <h2 className="text-2xl font-semibold">项目展示</h2>
          <p className="text-sm text-foreground/70">
            下表中的每一行对应一个项目，可在 <code className="rounded bg-white/10 px-1">src/data/projects.ts</code>{' '}
            中按字段补充/修改：名称、简介、技术栈、预览链接、源码链接、截图
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-white/5 text-left text-xs uppercase tracking-wider text-foreground/70">
            <tr>
              <th className="px-4 py-3">名称</th>
              <th className="px-4 py-3">简介</th>
              <th className="px-4 py-3">技术栈</th>
              <th className="px-4 py-3">预览链接</th>
              <th className="px-4 py-3">源码链接</th>
              <th className="px-4 py-3">截图</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.title}
                className="border-t border-white/10 transition hover:bg-white/5"
              >
                <td className="px-4 py-3 align-top font-semibold text-foreground">
                  {project.title}
                </td>
                <td className="px-4 py-3 align-top text-foreground/80">
                  {project.description}
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-foreground/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 align-top">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-xs text-accent-start underline underline-offset-2 hover:text-accent-end"
                    >
                      {project.link}
                    </a>
                  ) : (
                    <span className="text-xs text-foreground/40">待填写</span>
                  )}
                </td>
                <td className="px-4 py-3 align-top">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-xs text-foreground/80 underline underline-offset-2 hover:text-foreground"
                    >
                      {project.repo}
                    </a>
                  ) : (
                    <span className="text-xs text-foreground/40">待填写</span>
                  )}
                </td>
                <td className="px-4 py-3 align-top">
                  {project.image ? (
                    <div className="flex flex-col items-start gap-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-16 w-28 rounded-md border border-white/10 object-cover"
                      />
                      <span className="max-w-[160px] break-all text-[10px] text-foreground/50">
                        {project.image}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-foreground/40">待上传</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Projects
