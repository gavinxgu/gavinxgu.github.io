/** @jsxImportSource @emotion/react */
import moment from "moment"

export const EducationItem: React.FC<{
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
