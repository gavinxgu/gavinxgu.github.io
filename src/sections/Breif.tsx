/** @jsxImportSource @emotion/react */
import { ReactComponent as GithubIcon } from "../assets/github-icon.svg"
import { Link } from "../Link"

export const Breif: React.FC = () => {
  return (
    <div css={() => ({ textAlign: "right" })}>
      <h1>{"顾乡"}</h1>
      <div>
        <Link href={"https://github.com/gavinxgu"}>
          <GithubIcon
            css={(theme) => ({
              height: "2rem",
              verticalAlign: "middle",
              fill: theme.colors.text,
            })}
          />
          {" gavinxgu"}
        </Link>
      </div>
      {/* <div>{"+86 176 1086 5295"}</div> */}
      <div>{"gx199492@qq.com / gavinxgu@gmail.com"}</div>
      <div>{"1994.08 男"}</div>
    </div>
  )
}
