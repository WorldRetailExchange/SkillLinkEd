import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

type SelectedItem = {
  title: string;
  description: string;
  image: string;
  section: "Course" | "Program" | "Internship";
};

const InternationalCourses: React.FC = () => {
  const [selected, setSelected] = useState<SelectedItem | null>(null);

  // Inline root style to preserve CSS var & font-family from the original HTML
  const rootStyle = {
    ["--select-button-svg" as any]:
      "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(96,116,138)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
    fontFamily: 'Inter, "Noto Sans", sans-serif',
  } as React.CSSProperties;

  const openCard = (
    title: string,
    description: string,
    image: string,
    section: SelectedItem["section"]
  ) => setSelected({ title, description, image, section });

  const closeCard = () => setSelected(null);

  return (
    <>
      <Helmet>
        <title>Stitch Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
        {/* Tailwind via CDN to mirror your original file.
            If you already have Tailwind in your build, you can remove this. */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
      </Helmet>

      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={rootStyle}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111418]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                Study Abroad
              </h2>
            </div>

            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">
                  Tutors
                </a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">
                  Courses
                </a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">
                  Events
                </a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">
                  Workshops
                </a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">
                  International Opportunities
                </a>
              </div>

              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8K-N4TiN7PC9oB1bAWRE_3pjqPI1skNYDAd1Qgx5qibc4ymET1fpaUIc7MtMBR9EmT0gpZ7YkK_hwS-ehFum3sYgojgulFkVb0nxKnJYMVNWv7qIE6OEjTuf4B0ux-0B5VsII20jqgpi7n3KIQHxnLWDqnrnLi4mNXMqcZ79ihgKHQnCVezK5mb9CL8tjo_HZq-awBWvSBML4T6JmzjZv_a11PHCmDZBjoLg2zvO4f9N9L_gNGvLLtIw7C8Gf2AdAQ0ONTEXEsSA")',
                }}
              />
            </div>
          </header> */}

          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            {/* Left filter column */}
            <div className="layout-content-container flex flex-col w-80">
  <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
    Filters
  </h3>

  {/* Category */}
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1 relative">
      <p className="text-[#111418] text-base font-medium leading-normal pb-2">Category</p>
      <select className="appearance-none flex w-full min-w-0 flex-1 rounded-xl border border-[#dbe0e6] bg-white text-[#111418] h-14 pl-4 pr-10 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Category</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
      {/* dropdown arrow */}
      {/* <span className="absolute right-4 top-11 pointer-events-none text-gray-500">▼</span> */}
    </label>
  </div>

  {/* Country */}
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1 relative">
      <p className="text-[#111418] text-base font-medium leading-normal pb-2">Country</p>
      <select className="appearance-none flex w-full min-w-0 flex-1 rounded-xl border border-[#dbe0e6] bg-white text-[#111418] h-14 pl-4 pr-10 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Country</option>
        <option value="london">London</option>
        <option value="japan">Japan</option>
        <option value="berlin">Berlin</option>
        <option value="hongkong">Hong Kong</option>
      </select>
      {/* <span className="absolute right-4 top-11 pointer-events-none text-gray-500">▼</span> */}
    </label>
  </div>

  {/* Duration */}
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1 relative">
      <p className="text-[#111418] text-base font-medium leading-normal pb-2">Duration</p>
      <select className="appearance-none flex w-full min-w-0 flex-1 rounded-xl border border-[#dbe0e6] bg-white text-[#111418] h-14 pl-4 pr-10 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Duration</option>
        <option value="1year">One Year</option>
        <option value="2year">Two Year</option>
        <option value="3year">Three Year</option>
      </select>
      {/* <span className="absolute right-4 top-11 pointer-events-none text-gray-500">▼</span> */}
    </label>
  </div>
</div>


            {/* Right main content */}
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                    International Opportunities
                  </p>
                  <p className="text-[#60748a] text-sm font-normal leading-normal">
                    Explore courses, study abroad programs, and internships worldwide.
                  </p>
                </div>
              </div>

              {/* Study Abroad Programs */}
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Study Abroad Programs
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Semester in Florence",
                      "Immerse yourself in Italian culture and academics.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlMVx3baFgLpiXREofyZviPYSxVNyD5RJiQSU2sUltSg5MgaEnTl7xedhf4Cv743FuvbSxvvxH6k9wbbxWakdpAxrcb4WT5UcV-E1N2HOnblvJZzyi0DBnWszGBwpAXKTsjXR2ezkM6mn8L3fcmKEKntfsmWpOK6Cmnl_wH7Q3euvd1hucPbjzwlIJ-j4xGkHOB1ku9mMPScrzRL5GXvpEKk0NoVgjedW_esyouPMQtdrzMvlVRPc7ihn3o24UhiICr1BVEY3Gjeo",
                      "Program"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlMVx3baFgLpiXREofyZviPYSxVNyD5RJiQSU2sUltSg5MgaEnTl7xedhf4Cv743FuvbSxvvxH6k9wbbxWakdpAxrcb4WT5UcV-E1N2HOnblvJZzyi0DBnWszGBwpAXKTsjXR2ezkM6mn8L3fcmKEKntfsmWpOK6Cmnl_wH7Q3euvd1hucPbjzwlIJ-j4xGkHOB1ku9mMPScrzRL5GXvpEKk0NoVgjedW_esyouPMQtdrzMvlVRPc7ihn3o24UhiICr1BVEY3Gjeo")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Semester in Florence
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Immerse yourself in Italian culture and academics.
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Summer in Osaka",
                      "Experience Japanese life and study at a top university.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG08hYM_npg7nkIaFwosU8naGx_6dEiXebPR1jc7jVUt7goC6exFRQjE9oDcAs4ChRvjjLBG4E9lVBFpca-DWPToaHjwH052yfg7Z1jZlBI1hfnR1NA9X1Zn0PEf34KjO6MjTNlK6C-DjxhBTjgxs4-WZz8zeFLFWLCLhcK3iTTjG6HEJVd7GxfIT4GGbuAHaxXPjQfLsXWQYPA_ki56pkywCYuRtLxKpd9Spj7g3PezLFN_lmKoX5gpzQgAkSnhuI_fgthtyjRcc",
                      "Program"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG08hYM_npg7nkIaFwosU8naGx_6dEiXebPR1jc7jVUt7goC6exFRQjE9oDcAs4ChRvjjLBG4E9lVBFpca-DWPToaHjwH052yfg7Z1jZlBI1hfnR1NA9X1Zn0PEf34KjO6MjTNlK6C-DjxhBTjgxs4-WZz8zeFLFWLCLhcK3iTTjG6HEJVd7GxfIT4GGbuAHaxXPjQfLsXWQYPA_ki56pkywCYuRtLxKpd9Spj7g3PezLFN_lmKoX5gpzQgAkSnhuI_fgthtyjRcc")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Summer in Osaka
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Experience Japanese life and study at a top university.
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Year in Seville",
                      "Spend a year in Spain, learning the language and culture.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhy-596YDrg_5GaLsTQM89xoFbDvSsRKCgTfi2ikY7mAtu0FOaEWVWr8z7zAkPwImhoKPEWdFlry_w2U9218StrMtJvijb1c-vOK3kwlOogEnjMwiGLvNDJUKnEIOFRfA3ovtIrHcR8sCYMHs8atHFXXJPENWY56_5W15Hk-MZlZNjydDKLQDY8_sBO1skq84Xy0qFAgW_SBthljeioXzCT6tHLag8_Mg57bkvvQZO90mvZrSLA7uUeATQQJcxLEzrN2vfJRyssEE",
                      "Program"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhy-596YDrg_5GaLsTQM89xoFbDvSsRKCgTfi2ikY7mAtu0FOaEWVWr8z7zAkPwImhoKPEWdFlry_w2U9218StrMtJvijb1c-vOK3kwlOogEnjMwiGLvNDJUKnEIOFRfA3ovtIrHcR8sCYMHs8atHFXXJPENWY56_5W15Hk-MZlZNjydDKLQDY8_sBO1skq84Xy0qFAgW_SBthljeioXzCT6tHLag8_Mg57bkvvQZO90mvZrSLA7uUeATQQJcxLEzrN2vfJRyssEE")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Year in Seville
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Spend a year in Spain, learning the language and culture.
                    </p>
                  </div>
                </div>
              </div>

                            {/* Courses */}
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Courses
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Global Business Strategies",
                      "Learn to navigate international markets and business practices.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBnzkhTbfD6_aRvTxfSPuRimGvXaFWc2Xp9eUGbupYFn5B_yxtAX-7tpT061c6nSiDtcSoZCpE590cP3CdKi9fS34tZkyKP_VgDItHxlBKWOewwPsN6xREwGh1vXSyyPyeaswxzfftIpa_klPKOsRzZVMg3z3vA0DTpq_6wVi7yNjIinZ9cYm4G_c-FksNBhsWnlpkOK-i5H5nwGCsC0cnc8Nu3W5WSMcEc2N3xS_9iUWFSMphG4BCByl9zKwoXAlQjA_K45xCHsU",
                      "Course"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBnzkhTbfD6_aRvTxfSPuRimGvXaFWc2Xp9eUGbupYFn5B_yxtAX-7tpT061c6nSiDtcSoZCpE590cP3CdKi9fS34tZkyKP_VgDItHxlBKWOewwPsN6xREwGh1vXSyyPyeaswxzfftIpa_klPKOsRzZVMg3z3vA0DTpq_6wVi7yNjIinZ9cYm4G_c-FksNBhsWnlpkOK-i5H5nwGCsC0cnc8Nu3W5WSMcEc2N3xS_9iUWFSMphG4BCByl9zKwoXAlQjA_K45xCHsU")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Global Business Strategies
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Learn to navigate international markets and business practices.
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Cross-Cultural Communication",
                      "Enhance your communication skills across different cultures.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIqchp3EG0AGCAMsmNDbQ3AtK5vPvW8LKLm7b2dWCQ_NhwYGvoeBVdQqZ8LYLOBPrJQqrDFJMc9ap8fgob6I0tBE56my7rRDgBXGPbSt-aiFDUZjhPEtjF3LcAkIj3u2cWFheNIK-tM2uaww3WaFGL5A66HMwKtTXIU5xmqxIeVBLnw8pNNCZVZTXgJsHGnbuQFrTDKjg5loBo7ZIatTU75xc3-oiLRZFTH6oNrq51N22e56m4gzMej1TKytz4cAsWi9wn7lJg3aE",
                      "Course"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIqchp3EG0AGCAMsmNDbQ3AtK5vPvW8LKLm7b2dWCQ_NhwYGvoeBVdQqZ8LYLOBPrJQqrDFJMc9ap8fgob6I0tBE56my7rRDgBXGPbSt-aiFDUZjhPEtjF3LcAkIj3u2cWFheNIK-tM2uaww3WaFGL5A66HMwKtTXIU5xmqxIeVBLnw8pNNCZVZTXgJsHGnbuQFrTDKjg5loBo7ZIatTU75xc3-oiLRZFTH6oNrq51N22e56m4gzMej1TKytz4cAsWi9wn7lJg3aE")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Cross-Cultural Communication
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Enhance your communication skills across different cultures.
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "International Marketing",
                      "Master marketing strategies for a global audience.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vhmy-pUTQibA7Oz2tk696aI4BYs-ojgRvWOqQ5PaLUSvWfVIZk7bsNkKmlhJlSI2LPpSdvYMxS9gdYIHU1VruC6-QAulPXGlVEB4_B6kkZnoQCojKgPRS_p5OhC0Pd9LJ9u4s-wHZEENhqAML89ivby-yYGhc5WHP5M2AAd50Roxx2BreubXeyOZTs54mEHSfl8SewBVQyt2vfyPOTLIlJSZIV05bhsQAUx9aYfbc50OOkHL9nBfbq1n-2sCntkPDCJMNUEqzlE",
                      "Course"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vhmy-pUTQibA7Oz2tk696aI4BYs-ojgRvWOqQ5PaLUSvWfVIZk7bsNkKmlhJlSI2LPpSdvYMxS9gdYIHU1VruC6-QAulPXGlVEB4_B6kkZnoQCojKgPRS_p5OhC0Pd9LJ9u4s-wHZEENhqAML89ivby-yYGhc5WHP5M2AAd50Roxx2BreubXeyOZTs54mEHSfl8SewBVQyt2vfyPOTLIlJSZIV05bhsQAUx9aYfbc50OOkHL9nBfbq1n-2sCntkPDCJMNUEqzlE")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      International Marketing
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Master marketing strategies for a global audience.
                    </p>
                  </div>
                </div>
              </div>


              {/* Internships */}
              <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Internships
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Marketing Internship in London",
                      "Gain practical experience in a leading marketing firm.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzdWFWVqHGR9-bFAsuVa5H2wFOZFHd6wAiD_OJ7IX4F-BW6fOZdcBuWvR0zRB9h_MwvHlF7L6UdejWTI5oXX49Z-5O92SAFi9yL7nlBkELIQt0O27EGsvUvGrNrcR9jUyEBmFp723l9RCy8k1syL0bwWIVl6pPVtPwaa1BkH2s1NgIvEsvW6SAxiiu_rDwEJrZOMh1ro-rUVZOuFTGzPYqET-_XPlB4OwRKYEdOdu9TQTqcsFjxN7s5IMoCbMv_VGyxLGV1-j9loQ",
                      "Internship"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzdWFWVqHGR9-bFAsuVa5H2wFOZFHd6wAiD_OJ7IX4F-BW6fOZdcBuWvR0zRB9h_MwvHlF7L6UdejWTI5oXX49Z-5O92SAFi9yL7nlBkELIQt0O27EGsvUvGrNrcR9jUyEBmFp723l9RCy8k1syL0bwWIVl6pPVtPwaa1BkH2s1NgIvEsvW6SAxiiu_rDwEJrZOMh1ro-rUVZOuFTGzPYqET-_XPlB4OwRKYEdOdu9TQTqcsFjxN7s5IMoCbMv_VGyxLGV1-j9loQ")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Marketing Internship in London
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Gain practical experience in a leading marketing firm.
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Finance Internship in Hong Kong",
                      "Work in a dynamic financial environment in Asia.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC8RI_LUTOqk4j_iWSBBaTz0upNArZ6rzD7gj8PT4WPkz95_BXmSWzaq7NYVHIF_fgadoNiXXEAQMYOHzUuG1fl-IlY7XnElhCXhUb_Vr7_o1CuqJz98S2ARohqavGkVuNNc0GAB1TdbNNdK3TXaaSmxcAGtll_5AQQ0J7zIN25NRSOJV3YT2MRDCt4BGcTh08sRUtXeHqeSJM020It900KRB_O5v8LkLZkfymaGPY_jkS4DhIECNIGHf1Jj_TCXh8mqKT6rtvkno",
                      "Internship"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC8RI_LUTOqk4j_iWSBBaTz0upNArZ6rzD7gj8PT4WPkz95_BXmSWzaq7NYVHIF_fgadoNiXXEAQMYOHzUuG1fl-IlY7XnElhCXhUb_Vr7_o1CuqJz98S2ARohqavGkVuNNc0GAB1TdbNNdK3TXaaSmxcAGtll_5AQQ0J7zIN25NRSOJV3YT2MRDCt4BGcTh08sRUtXeHqeSJM020It900KRB_O5v8LkLZkfymaGPY_jkS4DhIECNIGHf1Jj_TCXh8mqKT6rtvkno")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Finance Internship in Hong Kong
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Work in a dynamic financial environment in Asia.
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() =>
                    openCard(
                      "Engineering Internship in Berlin",
                      "Contribute to innovative engineering projects in Germany.",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-xE7L-oKDlx9BCvtHN6DUwoT5C3Tiw40KSsaDd7eMmzfyYTyFGBi89SpmtS9e7q6u1_Z5KvGRCURidRKqemtB6owF_i3AQ1KD1kCBEpCkPRm1tKsU4XOOqLasktRyWxjD_g6yiRvW7_7wb0f4Tp4kGaaAhN1mEpLnBFX_Y_4lEu0-v6WDrC0s_DtbnejDMdAMUlvsjBxveAs5FS3O9OJoFQop8e1IoE6-qLNo44uGsatYBuOtP0FMwDDr1fFqdgoJiVLxv4qE5Yc",
                      "Internship"
                    )
                  }
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-xE7L-oKDlx9BCvtHN6DUwoT5C3Tiw40KSsaDd7eMmzfyYTyFGBi89SpmtS9e7q6u1_Z5KvGRCURidRKqemtB6owF_i3AQ1KD1kCBEpCkPRm1tKsU4XOOqLasktRyWxjD_g6yiRvW7_7wb0f4Tp4kGaaAhN1mEpLnBFX_Y_4lEu0-v6WDrC0s_DtbnejDMdAMUlvsjBxveAs5FS3O9OJoFQop8e1IoE6-qLNo44uGsatYBuOtP0FMwDDr1fFqdgoJiVLxv4qE5Yc")',
                    }}
                  />
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Engineering Internship in Berlin
                    </p>
                    <p className="text-[#60748a] text-sm font-normal leading-normal">
                      Contribute to innovative engineering projects in Germany.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end right main content */}
          </div>
        </div>
      </div>

      {/* Expanded Card / Detail Panel */}
      {selected && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    onClick={closeCard}
  >
    <div
      className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      {/* Close button */}
<button
  onClick={closeCard}
  aria-label="Close"
  className="absolute top-4 right-4 z-10 rounded-full bg-white shadow-md w-9 h-9 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
>
  ✕
</button>


      {/* Header image with badges */}
      <div className="relative">
        <div
          className="w-full h-56 bg-cover bg-center"
          style={{
            backgroundImage: `url("${
              selected.image ||
              "https://source.unsplash.com/800x400/?students,international"
            }")`,
          }}
        />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 text-xs rounded-full bg-white/90 border border-[#dbe0e6] text-[#111418]">
            {selected.section || "Opportunity"}
          </span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-white/90 border border-[#dbe0e6] text-[#111418]">
            Featured
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#111418] mb-1">{selected.title}</h2>
        <p className="text-xs text-[#60748a] mb-4">
          {selected.section ? `Category: ${selected.section}` : "International Opportunity"}
        </p>

        <p className="text-base text-[#111418] leading-relaxed mb-6">
          {selected.description ||
            "This international opportunity helps students gain global exposure, enhance skills, and build a standout profile."}
        </p>

        {/* Quick highlights (static, no new data fields required) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="rounded-xl border border-[#dbe0e6] p-3">
            <p className="text-xs text-[#60748a]">Format</p>
            <p className="text-sm font-medium text-[#111418]">
              {selected.section || "Program"}
            </p>
          </div>
          <div className="rounded-xl border border-[#dbe0e6] p-3">
            <p className="text-xs text-[#60748a]">Audience</p>
            <p className="text-sm font-medium text-[#111418]">Students</p>
          </div>
          <div className="rounded-xl border border-[#dbe0e6] p-3">
            <p className="text-xs text-[#60748a]">Availability</p>
            <p className="text-sm font-medium text-[#111418]">Limited slots</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => alert(`Book Slots for: ${selected.title}`)}
            className="flex-1 rounded-xl px-4 py-3 text-white bg-[#111418] hover:opacity-90 transition"
          >
            Book Slots
          </button>
          <button
            onClick={() => alert(`Schedule Trial for: ${selected.title}`)}
            className="flex-1 rounded-xl px-4 py-3 border border-[#dbe0e6] hover:bg-gray-50 transition"
          >
            Schedule Trial
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default InternationalCourses;
