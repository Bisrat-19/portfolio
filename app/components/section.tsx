export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="pt-14">
      <h2 id={`${id}-title`} className="w-fit px-4 py-2 text-xl font-semibold">
        {title}
      </h2>
      <Connector />
      {children}
    </section>
  )
}

// Dashed vertical line that links a heading or item to the content below it
export function Connector() {
  return <div aria-hidden className="ml-10 h-7 border-l border-dashed border-foreground/70" />
}
