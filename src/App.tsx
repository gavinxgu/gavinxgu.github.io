/** @jsx jsx */
import { jsx, ThemeContext, Global } from "@emotion/core"
import "./App.css"
import IDPhoto from "./assets/id_ photo.jpg"
import themes, { Theme } from "./themes"
import moment from "moment"
import { ReactComponent as GithubIcon } from "./assets/github-icon.svg"

// enum Language {
//   Chinese = "中文",
//   English = "ENG"
// }

const Skills = {
  Node: "Nodejs",
  TS: "typescript",
  React: "react",
  Vue: "vue",
  Vuex: "vuex",
  Webpack: "webpack",
  Rollup: "rollup",
  MobX: "mobx",
  MNT: "mobx-state-tree",
  Redux: "redux",
  ReduxThunk: "redux-thunk",
  ReduxSaga: "redux-saga",
  Rxjs: "rxjs",
  Three: "three",
  Babylon: "babylon",
  Election: "electron",
  Mysql: "mysql",
  Redis: "redis",
  Kafka: "kafka",
  SQLite: "sqlite",
  WebSocket: "websocket",
  Echarts: "echarts",
  Dagre: "dagre",
  Next: "nextjs",
  Docker: "docker",
  K8s: "k8s",
  Slurm: "slurm",
  Golang: "golang",
  Beego: "beego",
  Gin: "gin",
  Azkaban: "azkaban",
  ES: "elastic-search",
  Python: "python",
  Asyncio: "asyncio",
  Ceph: "ceph",
}

const Breif: React.FC = () => {
  return (
    <div css={() => ({ textAlign: "right" })}>
      <h1>{"顾乡"}</h1>
      <div>
        <a href={"https://github.com/gavinxgu"}>
          <GithubIcon
            css={(theme: Theme) => ({
              height: "2rem",
              verticalAlign: "middle",
              fill: theme.colors.text,
            })}
          />
          {" gavinxgu"}
        </a>
      </div>
      {/* <div>{"+86 176 1086 5295"}</div> */}
      <div>{"gx199492@qq.com / gavinxgu@gmail.com"}</div>
      <div>{"1994.08 男"}</div>
    </div>
  )
}

const Divider: React.FC<{ align?: "left" | "right" | "center" }> = ({
  align = "center",
  children,
}) => {
  return (
    <div
      css={(theme: Theme) => ({
        display: "table",
        margin: "5rem 0 0.8rem 0",
        textAlign: align,
        fontSize: "2.1rem",
        fontWeight: 800,
        "&:before": {
          position: "relative",
          top: "50%",
          display: "table-cell",
          width: "50%",
          borderTop: `2px solid ${theme.colors.primary}`,
          transform: "translateY(50%)",
          content: "''",
        },
        "&:after": {
          position: "relative",
          top: "50%",
          display: "table-cell",
          width: "50%",
          borderTop: `2px solid ${theme.colors.primary}`,
          transform: "translateY(50%)",
          content: "''",
        },
      })}
    >
      {children}
    </div>
  )
}

const EducationItem: React.FC<{
  school: string
  department: string
  major: string
  degree: string
  started: number
  ended: number
  content?: React.ReactNode
}> = ({ school, department, major, degree, started, ended, content }) => {
  return (
    <div>
      <div
        css={() => ({ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" })}
      >
        <span>
          <span css={() => ({ fontWeight: 800 })}>{school}</span>
          {" / "}
          <span css={() => ({ fontWeight: 800 })}>{department}</span>
          {" / "}
          <span css={() => ({ fontWeight: 800 })}>{major}</span>
        </span>
        <span css={() => ({ textAlign: "right" })}>{degree}</span>
        <span css={() => ({ textAlign: "right" })}>
          <span>{moment(started).format("YYYY-MM")}</span>
          {" - "}
          <span>
            {!Number.isFinite(ended) ? "至今" : moment(ended).format("YYYY-MM")}
          </span>
        </span>
      </div>
      <div css={() => ({})}>{content}</div>
    </div>
  )
}

export const SkillItem: React.FC<{
  name: string
  desc?: string
  level: 1 | 2 | 3 | 4 | 5
}> = ({ name, desc, level }) => {
  return (
    <div css={() => ({ padding: "1rem" })}>
      <div>
        <span css={() => ({ fontWeight: 800 })}>{name}</span>{" "}
        {Array(level)
          .fill(0)
          .map(() => "★")}
        {Array(5 - level)
          .fill(0)
          .map(() => "☆")}
      </div>
      <div css={(theme: Theme) => ({ color: theme.colors.textSecondary })}>
        {desc}
      </div>
    </div>
  )
}

interface ProjectProps {
  name: string
  percent: number
  stacks: string[]
  desc?: React.ReactNode
}

interface ExperienceProps {
  company: string
  department: string
  base: string
  position: string
  isIntern: boolean
  projects: ProjectProps[]
  started: number
  ended: number
}

const Company = {
  Sensetime: {
    name: "商汤科技",
    department: {
      DCPParrots: "研究院 DCP",
    },
  },
  Tencent: {
    name: "腾讯",
    department: {
      PCGContentSafety: "PCG 技术运营部 内容安全中心",
    },
  },
} as const

const Projects = {
  PAVI: "深度学习训练可视化平台",
  AutoLink: "深度学习大规模工作流平台",
}

const experience: ExperienceProps[] = [
  {
    company: Company.Sensetime.name,
    department: Company.Sensetime.department.DCPParrots,
    base: "北京",
    position: "前端实习生",
    isIntern: true,
    projects: [
      {
        name: Projects.PAVI,
        percent: 0.5,
        stacks: [
          Skills.Vue,
          Skills.Vuex,
          Skills.TS,
          Skills.SQLite,
          Skills.WebSocket,
          Skills.Echarts,
          Skills.Dagre,
        ],
        desc:
          "主要完成darray内存分析可视化工具, 通用模型结构可视化工具, 训练数据可视化",
      },
    ],
    started: moment("2018-09").valueOf(),
    ended: moment("2018-12").valueOf(),
  },
  {
    company: Company.Tencent.name,
    department: Company.Tencent.department.PCGContentSafety,
    base: "北京",
    position: "前端实习生",
    isIntern: true,
    projects: [
      {
        name: "评论审核平台",
        percent: 0.01,
        stacks: [Skills.React, Skills.TS, Skills.Webpack, Skills.MobX],
        desc:
          "用 MutationObserver 实现了比乐问更好的全文水印和图片水印组件, 可以监控 dom 修改和删除",
      },
    ],
    started: moment("2019-01").valueOf(),
    ended: moment("2019-05").valueOf(),
  },
  {
    company: Company.Sensetime.name,
    department: Company.Sensetime.department.DCPParrots,
    base: "北京",
    position: "全栈工程师",
    isIntern: false,
    projects: [
      {
        name: "用户中心 & SSO 单点登录",
        percent: 0.99,
        stacks: [Skills.Vue, Skills.Vuex, Skills.Webpack],
        desc:
          "使用 PostMessage API 进行登录后 popup page 和 origin page 的 ticket 传递",
      },
      {
        name: Projects.PAVI,
        percent: 0.8,
        stacks: [
          Skills.React,
          Skills.TS,
          Skills.Webpack,
          Skills.Redux,
          Skills.ReduxThunk,
          Skills.Rxjs,
          Skills.WebSocket,
        ],
        desc: `合理利用 ${Skills.WebSocket} dynamic import 重构优化首屏响应, 使用 ${Skills.Rxjs} 清晰解决监控页面复杂数据流更新问题, 图表间共享数据优化内存，低通滤波采样等`,
      },
      {
        name: `${Projects.AutoLink}（前端）`,
        percent: 0.9,
        stacks: [
          Skills.React,
          Skills.Redux,
          Skills.ReduxThunk,
          Skills.MobX,
          Skills.MNT,
          Skills.Rxjs,
          Skills.Dagre,
        ],
        desc: `一共 3个 SPA, 1个 ${Skills.Next} SSR, n 个共用组件 pkg`,
      },
      {
        name: `${Projects.AutoLink}（后端）`,
        percent: 0.3,
        stacks: [
          Skills.Golang,
          Skills.Beego,
          Skills.Gin,
          Skills.Slurm,
          Skills.K8s,
          Skills.Mysql,
          Skills.Redis,
          Skills.Kafka,
          Skills.ES,
        ],
        desc: `Golang, service mesh, 一众微服务，业务除了meta data管理外，涉及训练日志收集（${Skills.Kafka} -> ${Skills.ES}）、图执行引擎（仅使用）、计算资源调度（仅使用）`,
      },
      {
        name: `${Projects.PAVI}（后端）`,
        percent: 0.2,
        stacks: [
          Skills.Golang,
          Skills.Beego,
          Skills.Mysql,
          Skills.Redis,
          Skills.Kafka,
          Skills.ES,
          Skills.Python,
          Skills.Asyncio,
        ],
        desc: `Golang, service mesh, 一众微服务，业务除了meta data管理外，涉及训练 scalar 收集（${Skills.Kafka} -> ${Skills.Mysql}）、高性能python sdk（${Skills.Asyncio}）、图执行引擎（仅使用）、计算资源调度（仅使用）`,
      },
    ],
    started: moment("2019-06").valueOf(),
    ended: Infinity,
  },
]

export const ProjectItem: React.FC<ProjectProps> = ({
  name,
  stacks,
  desc,
  percent,
}) => {
  return (
    <div css={() => ({ padding: "1rem" })}>
      <div css={() => ({ display: "flex", alignItems: "center" })}>
        <span css={() => ({ fontSize: "1rem", margin: "0 0.8rem 0 0" })}>
          {"比重"}
        </span>
        <span
          css={(theme: Theme) => ({
            background: "#ddd",
            flex: 1,
            height: "1rem",
            borderRadius: "0.5rem",
            overflow: "hidden",
          })}
        >
          <div
            css={(theme: Theme) => ({
              background: theme.colors.primary,
              width: `${percent * 100}%`,
              height: "1rem",
            })}
          ></div>
        </span>
      </div>
      <div css={() => ({ fontWeight: 800, fontSize: "1.6rem" })}>{name}</div>
      <p css={(theme: Theme) => ({ fontSize: "1rem" })}>{stacks.join(", ")}</p>
      <div css={(theme: Theme) => ({ color: theme.colors.textSecondary })}>
        {desc}
      </div>
    </div>
  )
}

export const ExperienceItem: React.FC<ExperienceProps> = ({
  company,
  position,
  department,
  base,
  isIntern,
  projects,
  started,
  ended,
}) => {
  return (
    <div>
      <div
        css={() => ({ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" })}
      >
        <span
          css={(theme: Theme) => ({
            paddingLeft: "0.4rem",
            borderLeft: `4px solid ${theme.colors.primary}`,
          })}
        >
          <span css={() => ({ fontWeight: 800, fontSize: "2rem" })}>
            {company}({base})
          </span>
          {" / "}
          <span css={() => ({ fontWeight: 800 })}>{department}</span>
        </span>
        <span css={() => ({ textAlign: "right" })}>
          {position}
          {isIntern ? "(实习)" : ""}
        </span>
        <span css={() => ({ textAlign: "right" })}>
          <span>{moment(started).format("YYYY-MM")}</span>
          {" - "}
          <span>
            {!Number.isFinite(ended) ? "至今" : moment(ended).format("YYYY-MM")}
          </span>
        </span>
      </div>
      <div
        css={() => ({
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "1.6rem 0 1.6rem 0",
        })}
      >
        {projects.map((p) => (
          <ProjectItem key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}

export const MasterPeice: React.FC<{
  name: string
  desc: string
  repo?: string
  url: string
}> = ({ name, desc, repo, url }) => {
  return (
    <div>
      <h3>{repo ? <a href={repo}>{name}</a> : name}</h3>
      <p css={(theme: Theme) => ({ color: theme.colors.textSecondary })}>
        {desc}
      </p>
      <iframe
        title={name}
        src={url}
        width={"100%"}
        height={"400px"}
        frameBorder={0}
      />
    </div>
  )
}

function App() {
  return (
    <ThemeContext.Provider value={themes.byteDance}>
      <Global
        styles={(theme: Theme) => `
      body {
        font-size: ${theme.variables.fontSizeBase};
        color: ${theme.colors.text};
        background: #eee;
      }

      a {
        text-decoration: none;
      }
      `}
      />
      <div
        css={{
          margin: "0.8rem auto",
          width: "21cm",
          // height: "29.7cm",
          padding: "1cm 1cm",
          background: "white",
          // background: "url('https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a157533ce893acb_88.%20Sunny.jpg')"
        }}
      >
        <div
          css={() => ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          })}
        >
          <img
            css={{
              width: "25mm",
              height: "auto",
            }}
            src={IDPhoto}
            alt={"id"}
          />
          <Breif />
        </div>
        <Divider>{"教育"}</Divider>
        <EducationItem
          {...{
            school: "清华大学",
            department: "自动化系",
            major: "自动化专业",
            degree: "工学学士",
            started: moment("2012-08-15 00:00:00").valueOf(),
            ended: moment("2016-07-06 00:00:00").valueOf(),
            content: (
              <div>
                <ul>
                  <li>{"学分绩 83.4，班级总排名 5/19"}</li>
                </ul>
              </div>
            ),
          }}
        />
        <EducationItem
          {...{
            school: "清华大学",
            department: "自动化系",
            major: "企业信息化系统与工程(保研)",
            degree: "工学硕士",
            started: moment("2016-09-01 00:00:00").valueOf(),
            ended: moment("2019-07-04 00:00:00").valueOf(),
            content: (
              <div>
                <ul>
                  <li>
                    {
                      "电子商务交易技术国家工程实验室，研究内容:全息化企业建模、系统集成"
                    }
                  </li>
                </ul>
              </div>
            ),
          }}
        />
        <Divider>{"技能"}</Divider>
        <div
          css={() => ({ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" })}
        >
          <SkillItem
            name={"Web"}
            level={5}
            desc={
              "熟练使用 vue, react, webpack, rollup, mobx, redux, vuex, rxjs, three, babylon 等轮子, 我轮子用得贼溜, 也在尝试解剖轮子造轮子 / esnext, typescript 强迫症用户 / UI, 图表, svg, canvas 3D, web worker 都能做"
            }
          />
          <SkillItem name={"Mobile 前端"} level={3} desc={"做过微信小程序"} />
          <SkillItem
            name={"Desktop 前端"}
            level={3}
            desc={"electron 配合 nodejs 技术栈"}
          />
          <SkillItem
            name={"Nodejs"}
            level={4}
            desc={
              "web 前端工程化, http server, RPC, cluster, child_process, cypto 等"
            }
          />
          <SkillItem
            name={"Nodejs Web 框架"}
            level={4}
            desc={"express, koa, egg, midway, nest 等"}
          />
          <SkillItem
            name={"Golang Web 框架"}
            level={4}
            desc={
              "beego, gin, 独立设计并实现过一个 DAG parser, 对标 k8s 的 workflow 引擎 argo"
            }
          />
          <SkillItem
            name={"Ops"}
            level={3}
            desc={
              "docker, k8s, rancher, 服务全部 CDN + 容器化, CI CD 自动测试部署, 滚动上线"
            }
          />
          <SkillItem
            name={"持久化"}
            level={3}
            desc={`${Skills.Mysql}, ${Skills.Redis}, ${Skills.ES}, ${Skills.Ceph}`}
          />
          <SkillItem
            name={"Python"}
            level={2}
            desc={`会一点点, ${Skills.Asyncio}`}
          />
          <SkillItem
            name={"Others"}
            level={2}
            desc={`${Skills.Slurm}, ${Skills.K8s}, ${Skills.Azkaban}`}
          />
        </div>
        <Divider>{"经历"}</Divider>
        {experience.map((o) => (
          <ExperienceItem key={o.started} {...o} />
        ))}
        <Divider>{"作品"}</Divider>
        <MasterPeice
          {...{
            name: "Steinway & Sons",
            repo: "https://github.com/gavinxgu/piano",
            url: "https://piano.gavingu.cn/",
            desc: "施坦威钢琴模拟器",
          }}
        />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
