import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f2f3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#141415]">
                <div className="size-4">
                    <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h2 className="text-[#141415] text-lg font-bold leading-tight tracking-[-0.015em]">
                    Finance Insights
                </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <Link
                        className="text-[#141415] text-sm font-medium leading-normal"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-[#141415] text-sm font-medium leading-normal"
                        href='/category/stocks'
                    >
                        Stocks
                    </Link>
                    <Link
                        className="text-[#141415] text-sm font-medium leading-normal"
                        href="/category/strategy"
                    >
                        Strategy
                    </Link>
                    <Link
                        className="text-[#141415] text-sm font-medium leading-normal"
                        href="/category/macro"
                    >
                        Macro
                    </Link>
                    <Link
                        className="text-[#141415] text-sm font-medium leading-normal"
                        href="/about"
                    >
                        About
                    </Link>
                </div>
                <button
                    aria-label="Search"
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 bg-[#f2f2f3] text-[#141415] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                        className="text-[#141415]"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                        </svg>
                    </div>
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEFLmkti1vwJeU9xppmQx3bJOSvAkQnQpNE54BAjxdqfRsoO796C5GVR3wVQgG3KN0OsVQ3MZ1zgPOgw9fo4kuW2iTYkipXefb8wDdVPXZkSDdiD2M_NNMA3NYfKR3nREkPCnDoKmY2FKQFPnNHYZpe5_tWx04SJKdn_7XrRxdaXqgMYdLOdVOeypI5vslHgR1l2kfT-IhK2_tsAQidjPDQScI_jj36GI_YWes-3SylBSY65nNBTvwLvdnCL1d9SjxJZz9cHSbsoM")'
                    }}
                />
            </div>
        </header>
    )
}

export default Header
