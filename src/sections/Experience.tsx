/** @jsxImportSource @emotion/react */
import moment from "moment"

interface ProjectProps {
  name: string
  percent: number
  stacks: string[]
  desc?: React.ReactNode
}

const ProjectItem: React.FC<ProjectProps> = ({
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
          css={() => ({
            background: "#ddd",
            flex: 1,
            height: "1rem",
            borderRadius: "0.5rem",
            overflow: "hidden",
          })}
        >
          <div
            css={(theme) => ({
              background: theme.colors.primary,
              width: `${percent * 100}%`,
              height: "1rem",
            })}
          ></div>
        </span>
      </div>
      <div css={() => ({ fontWeight: 800, fontSize: "1.6rem" })}>{name}</div>
      <p css={(theme) => ({ fontSize: "1rem" })}>{stacks.join(", ")}</p>
      <div css={(theme) => ({ color: theme.colors.textSecondary })}>{desc}</div>
    </div>
  )
}

export interface ExperienceProps {
  company: string
  department: string
  base: string
  position: string
  isIntern: boolean
  projects: ProjectProps[]
  started: number
  ended: number
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
          css={(theme) => ({
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
          (
          {moment
            .duration(
              moment(!Number.isFinite(ended) ? undefined : ended).diff(
                moment(started),
              ),
            )
            .humanize()}
          )
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
