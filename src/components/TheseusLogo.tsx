export function TheseusLogo({ className }: { className?: string }) {
	return (
		<div
			className={[
				"bg-ButtonPrimaryBackground aspect-square text-ButtonPrimaryText p-0.5 text-2xl rounded hover:opacity-70 self-center",
				className,
			].join(" ")}
		>
			<TheseusIcon />
		</div>
	);
}

export function TheseusIcon() {
	return (
	<svg className="text-3xl" width="1em" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 42.5 29.52">
      <defs>
        <style>{".cls-1{fill:#209e49}"}</style>
      </defs>
      <path d="m3.535 14.603 12.05-12.05 12.31 12.311-12.05 12.05z" className="cls-1" />
      <path d="M14.608 14.72 26.657 2.67l12.31 12.311-12.049 12.05z" className="cls-1" />
      <path
        d="M16.58 10.02h9.33v9.54h-9.33z"
        style={{
          fill: "#0c7e42",
        }}
        transform="rotate(-45 21.25 14.798)"
      />
    </svg>
	);
}

export function TheseusLink({ href, label }: { href: string; label?: string }) {
	return (
		<a
			href={`https://theseusviewer.org/?iiif-content=${href}`}
			target="_blank"
			rel="noreferrer norefferer"
			className="mt-3 inline-flex no-underline items-center gap-2 bg-black text-white p-2 rounded transition-all duration-200 ease-out hover:text-white/90 hover:bg-black/90 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
		>
			<TheseusLogo />
			<div className="px-2 mt-0.5">{label || "Open in Theseus"}</div>
		</a>
	);
}
