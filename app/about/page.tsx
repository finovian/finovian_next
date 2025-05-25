import React from 'react'

const page = () => {
    return (
        <>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">
                        About Me
                    </p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">
                        Why this blog exists — and who&apos;s behind it.
                    </p>
                </div>
            </div>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
                I&apos;m Alex, a software engineer and investor with a passion for
                simplifying complex financial concepts. This blog started as a
                personal project to document my own financial journey and share
                insights with others. My goal is to make finance accessible and
                actionable for everyone, regardless of their background or experience.
            </p>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Here, you&apos;ll find in-depth articles on investing, personal finance,
                and wealth-building strategies. Expect clear explanations, practical
                advice, and a focus on long-term thinking. No ads, no fluff — just
                timeless, well-researched ideas.
            </p>
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                My Philosophy on Investing &amp; Writing
            </h2>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Long-term &gt; short-term. Write clearly. Think deeply. Help others.
            </p>
            <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">
                Want weekly insights? Join the readers list →
            </p>

        </>
    )
}

export default page
