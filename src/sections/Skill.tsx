/** @jsxImportSource @emotion/react */

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
      <div css={(theme) => ({ color: theme.colors.textSecondary })}>{desc}</div>
    </div>
  )
}
