import Image from "next/image"
import { ArrowRight, Check, Clock, MessageSquare, Percent, Search, ThumbsUp, Users } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <div className="container mx-auto px-4 md:px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Work", href: "/work" },
            { label: "Case Studies", href: "/work/case-studies" },
            { label: "Daylight Tool", href: "/work/case-studies/daylight-tool", active: true },
          ]}
        />
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-sky-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Case Study
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Enhancing Daylight Tool Search Experience
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>3 Months</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Team of 4</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Redesigning the search experience to help users find medical costs and coverage information quickly and
                accurately.
              </p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Nabin Ghimire"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-white shadow-sm"
                  />
                </div>
                <div>
                  <p className="font-medium">Nabin Ghimire</p>
                  <p className="text-sm text-gray-600">Product Designer</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Daylight Tool Hero Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white font-medium">NDA Protected - Visuals Available Upon Request</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Overview */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-2">ROLE</h3>
              <p className="font-medium">Product Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-2">DURATION</h3>
              <p className="font-medium">3 Months</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-2">TEAM</h3>
              <p className="font-medium">4 Members</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-2">DELIVERABLES</h3>
              <p className="font-medium">UI Flows, Design System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-16">
        {/* Problem Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <span className="text-red-600 font-bold">1</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Problem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                The Daylight tool was falling short of delivering fast and accurate results for users seeking medical
                costs and coverage information.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r mb-6">
                <p className="font-medium text-red-700">Goal:</p>
                <p className="text-red-700">Achieve 100% accurate and instant search responses for all user types.</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-red-600 text-xs">•</span>
                  </div>
                  <span>Limited understanding of search phrases and abbreviations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-red-600 text-xs">•</span>
                  </div>
                  <span>Inability to detect foreign languages</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-red-600 text-xs">•</span>
                  </div>
                  <span>Poor multi-token and misspelled queries handling</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-red-600 text-xs">•</span>
                  </div>
                  <span>Lack of reliable ICD-10 code lookups</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Search className="w-5 h-5 text-gray-500 mr-2" />
                <h3 className="font-medium">Search Experience Issues</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">User Query:</p>
                  <p className="font-medium">"knee MRI New York"</p>
                  <p className="text-sm text-red-500 mt-2">❌ No results found</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">User Query:</p>
                  <p className="font-medium">"ICD-10 C50.911"</p>
                  <p className="text-sm text-red-500 mt-2">❌ No pricing information</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">User Query:</p>
                  <p className="font-medium">"rodilla MRI" (Spanish)</p>
                  <p className="text-sm text-red-500 mt-2">❌ Language not recognized</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Introduce smart auto-suggestions, abbreviation recognition, and fuzzy matching",
                  "Enable foreign language auto-detection and translation",
                  "Improve multi-token (e.g., &quot;knee MRI New York&quot;) support",
                  "Integrate ICD-10 CM/PCS code lookups with pricing",
                  "Expand provider radius dynamically while keeping relevance high",
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Objectives Visualization"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Research & Insights Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold">3</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Research & Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                We used <span className="font-medium">UX analytics tools</span> to monitor user interactions and spoke
                with a <span className="font-medium">key client contact</span> to gain contextual insights on real-world
                search challenges.
              </p>
              <div className="bg-purple-50 p-6 rounded-xl mb-6">
                <h3 className="font-medium text-purple-800 mb-3">Key Findings:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-purple-700 text-xs">•</span>
                    </div>
                    <span>67% of users reformulated their query at least once</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-purple-700 text-xs">•</span>
                    </div>
                    <span>Users often included provider names or city names, which were not well-supported</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-purple-700 text-xs">•</span>
                    </div>
                    <span>Users from multilingual backgrounds struggled due to lack of translation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="font-medium">User Search Behavior</h3>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Query Reformulation</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "67%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0%</span>
                      <span>67%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Location-Based Queries</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0%</span>
                      <span>42%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Multilingual Users</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0%</span>
                      <span>23%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Role Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">4</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">My Role</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                As the <span className="font-medium">Product Designer</span>, I:
              </p>
              <ul className="space-y-4">
                {[
                  "Analyzed user flows and behavior via tracking tools",
                  "Created new UI/UX flows for the enhanced search experience",
                  "Designed Figma prototypes for disambiguation prompts, auto-suggestions, multilingual input, and improved search results",
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Figma UI Flow – Placeholder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-medium">Figma UI Flow – Placeholder</span>
                </div>
              </div>
              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Search Disambiguation – Placeholder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-medium">Search Disambiguation – Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UX Solutions Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <span className="text-amber-600 font-bold">5</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">UX Solutions Implemented</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Search className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium mb-2">Intelligent Search Box</h3>
                  <p className="text-sm text-gray-600">
                    Recognizes medical acronyms, partial names, and suggests corrections
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium mb-2">Language Detection</h3>
                  <p className="text-sm text-gray-600">Auto-translates query input using Azure Translation API</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <ArrowRight className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium mb-2">Disambiguation Flow</h3>
                  <p className="text-sm text-gray-600">
                    Triggers when terms are ambiguous (e.g., "cancer scan" ➝ ask for body part)
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <ThumbsUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium mb-2">Search Result Clarity</h3>
                  <p className="text-sm text-gray-600">
                    Emphasis on cost breakups, provider proximity, and procedure match accuracy
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="font-medium">UI Flow Visualization</h3>
                </div>
                <div className="p-4">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="UX Solutions Flow"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    NDA Protected - Detailed UI flows available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Outcomes Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
              <span className="text-teal-600 font-bold">6</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Key Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">&lt; 2s</h3>
              <p className="text-gray-600">Average search time dropped to less than 2 seconds</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">85%</h3>
              <p className="text-gray-600">Users found their target result on the first attempt (up from 48%)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">+40%</h3>
              <p className="text-gray-600">Real-time prompts improved user engagement</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">5000+</h3>
              <p className="text-gray-600">System optimized to handle concurrent users without lag</p>
            </div>
          </div>
        </section>

        {/* What's Next & Reflection Combined Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">7</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">What's Next</h2>
              </div>
              <ul className="space-y-4 mb-6">
                {[
                  "Integrate image search for lab or scan reports",
                  "Expand support for CPT-to-ICD mapping in UI",
                  "Continue A/B testing flows based on user feedback",
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Future Roadmap"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-sm text-indigo-700">
                  Our roadmap includes several enhancements based on user feedback and emerging technologies.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold">8</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Reflection</h2>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl h-full">
                <p className="text-lg text-gray-700 mb-6 italic">
                  "This project highlighted how search isn't just about speed — it's about context, clarity, and
                  reducing cognitive load. Designing for users who may be stressed, sick, or confused taught me to think
                  beyond UI — into empathy-driven interaction design."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Nabin Ghimire"
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Nabin Ghimire</p>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-16">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl text-gray-300 mb-4">"</div>
              <p className="text-xl text-gray-700 mb-6 max-w-2xl">
                Our users are finding what they need quickly — we haven't had this level of clarity before.
              </p>
              <p className="text-sm text-gray-500">Feedback from a client stakeholder (shared verbally)</p>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
              <span className="text-gray-600 font-bold">✓</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Deliverables</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Figma UI flows for all enhanced search states",
                  "Search disambiguation design logic",
                  "User-friendly results UI",
                  "Design documentation for developers and QA",
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3">
                      <Check className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium mb-4">NDA Notice</h3>
              <p className="text-sm text-gray-600 mb-4">
                Due to NDA, all visuals, wireframes, and flows are placeholder-based. Specific artifacts can be shared
                privately upon request.
              </p>
              <div className="flex items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg">
                <p className="text-sm text-gray-500">Confidential materials available upon request</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* More Case Studies Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">More Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Case Study ${item}`}
                    alt={`Case Study ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-2">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the project and its key outcomes.</p>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nabin Ghimire</h3>
              <p className="text-gray-400 mb-4">
                Product Designer specializing in creating intuitive and user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Dribbble</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm9.949 11.12c-.148-1.16-.862-2.19-1.83-2.9-.363.77-.756 1.513-1.212 2.228-1.268 1.98-2.85 3.597-4.498 4.934 1.435.63 2.864 1.286 4.327 1.777.913-1.656 1.45-3.536 1.512-5.456.025-.477.026-.953.006-1.43-.01-.437-.038-.874-.086-1.307-.048-.433-.109-.865-.187-1.293-.077-.429-.169-.855-.275-1.278-.107-.423-.229-.843-.365-1.255-.136-.413-.286-.822-.45-1.224-.164-.401-.341-.796-.532-1.183-.19-.387-.394-.768-.608-1.14-.215-.371-.44-.736-.676-1.092-.235-.356-.48-.704-.736-1.04-.256-.337-.522-.664-.797-.981-.276-.317-.56-.625-.853-.92-.292-.296-.593-.582-.9-.858-.308-.276-.622-.542-.943-.797-.32-.256-.648-.501-.982-.736-.334-.235-.674-.46-1.02-.676-.346-.215-.698-.42-1.056-.608-.358-.19-.72-.367-1.085-.532-.366-.164-.736-.314-1.108-.45-.372-.136-.747-.258-1.124-.365-.377-.107-.756-.199-1.136-.275-.381-.077-.763-.138-1.145-.187-.382-.048-.765-.076-1.148-.086-.383-.01-.766-.01-1.148.006-1.917.063-3.792.601-5.444 1.516.347 1.048.882 2.052 1.579 2.981 1.704-.93 3.533-1.587 5.43-1.951.288-.055.577-.102.868-.142.29-.04.582-.072.874-.097.292-.025.585-.042.878-.051.293-.01.586-.013.879-.008.293.004.586.016.878.035.292.02.584.047.875.081.291.034.581.075.87.123.289.048.577.103.863.165.286.063.57.132.852.209.282.077.562.161.839.252.277.091.552.189.824.294.272.105.541.217.807.336.266.12.529.246.787.379.259.133.514.273.765.419.251.146.498.299.74.458.241.159.478.325.709.497.231.172.458.35.679.534.221.184.437.374.647.569.21.195.415.396.614.602.199.206.392.417.579.633.187.216.368.437.542.662.175.225.343.455.505.689.162.234.318.472.467.713.149.241.291.486.426.734.135.248.263.5.384.754.121.255.235.513.341.774.107.261.206.525.298.791.092.266.177.535.254.806.077.271.146.544.208.819.062.275.116.552.163.83.047.278.086.558.118.839.032.281.057.563.074.846.017.283.027.567.029.851.002.284-.004.568-.018.852-.014.284-.036.567-.065.85-.03.283-.067.565-.111.846-.044.281-.096.561-.155.84-.059.279-.125.557-.198.833-.073.276-.153.55-.24.822-.087.272-.181.542-.281.809-.1.267-.207.531-.32.793-.113.262-.233.521-.359.776-.126.255-.258.507-.396.755-.138.248-.282.492-.432.732-.15.24-.305.477-.466.709-.161.232-.328.46-.5.683-.172.223-.35.442-.533.656-.183.214-.371.423-.564.627-.193.204-.391.403-.594.597-.203.194-.41.383-.622.566-.212.183-.428.36-.648.532-.22.172-.445.338-.673.498-.228.16-.46.315-.695.464-.235.149-.474.292-.716.428-.242.136-.487.266-.735.389-.248.123-.499.24-.752.35-.253.11-.509.214-.767.31-.258.096-.518.186-.78.269-.262.083-.526.159-.791.228-.265.069-.532.131-.8.186-.268.055-.538.103-.808.144-.27.041-.542.075-.814.102-.272.027-.545.047-.818.06-.273.013-.547.019-.82.019-.273 0-.547-.006-.82-.019-.273-.013-.546-.033-.818-.06-.272-.027-.544-.061-.814-.102-.27-.041-.54-.089-.808-.144-.268-.055-.535-.117-.8-.186-.265-.069-.529-.145-.791-.228-.262-.083-.522-.173-.78-.269-.258-.096-.514-.2-.767-.31-.253-.11-.504-.227-.752-.35-.248-.123-.493-.253-.735-.389-.242-.136-.481-.279-.716-.428-.235-.149-.467-.304-.695-.464-.228-.16-.453-.326-.673-.498-.22-.172-.436-.349-.648-.532-.212-.183-.419-.372-.622-.566-.203-.194-.401-.393-.594-.597-.193-.204-.381-.413-.564-.627-.183-.214-.361-.433-.533-.656-.172-.223-.339-.451-.5-.683-.161-.232-.316-.469-.466-.709-.15-.24-.294-.484-.432-.732-.138-.248-.27-.5-.396-.755-.126-.255-.246-.514-.359-.776-.113-.262-.22-.526-.32-.793-.1-.267-.194-.537-.281-.809-.087-.272-.167-.546-.24-.822-.073-.276-.139-.554-.198-.833-.059-.279-.111-.559-.155-.84-.044-.281-.081-.563-.111-.846-.03-.283-.051-.566-.065-.85-.014-.284-.02-.568-.018-.852.002-.284.012-.568.029-.851.017-.283.042-.565.074-.846.032-.281.071-.561.118-.839.047-.278.101-.555.163-.83.062-.275.131-.548.208-.819.077-.271.162-.54.254-.806.092-.266.191-.53.298-.791.106-.261.22-.519.341-.774.121-.254.249-.506.384-.754.135-.248.277-.493.426-.734.149-.241.305-.479.467-.713.162-.234.33-.464.505-.689.174-.225.355-.446.542-.662.187-.216.38-.427.579-.633.199-.206.404-.407.614-.602.21-.195.426-.385.647-.569.221-.184.448-.362.679-.534.231-.172.468-.338.709-.497.242-.159.489-.312.74-.458.251-.146.506-.286.765-.419.258-.133.521-.259.787-.379.266-.119.535-.231.807-.336.272-.105.547-.203.824-.294.277-.091.557-.175.839-.252.282-.077.566-.146.852-.209.286-.062.574-.117.863-.165.289-.048.579-.089.87-.123.291-.034.583-.061.875-.081.292-.019.585-.031.878-.035.293-.005.586-.002.879.008.293.009.586.026.878.051.292.025.584.057.874.097.291.04.58.087.868.142 1.897.364 3.726 1.021 5.43 1.951.697-.929 1.232-1.933 1.579-2.981-1.652-.915-3.527-1.453-5.444-1.516-.382-.016-.765-.016-1.148-.006-.383.01-.766.038-1.148.086-.382.049-.764.11-1.145.187-.38.076-.759.168-1.136.275-.377.107-.752.229-1.124.365-.372.136-.742.286-1.108.45-.366.165-.727.342-1.085.532-.358.188-.71.393-1.056.608-.346.216-.686.441-1.02.676-.334.235-.662.48-.982.736-.32.256-.648.541-.943.797-.295.255-.609.521-.9.858-.293.295-.577.603-.853.92-.275.317-.541.644-.797.981-.256.336-.501.684-.736 1.04-.236.356-.461.721-.676 1.092-.214.372-.418.753-.608 1.14-.191.387-.368.782-.532 1.183-.164.402-.314.811-.45 1.224-.136.412-.258.832-.365 1.255-.106.423-.198.849-.275 1.278-.078.428-.139.86-.187 1.293-.048.433-.076.87-.086 1.307-.02.477-.019.953.006 1.43.062 1.92.599 3.8 1.512 5.456 1.463-.491 2.892-1.147 4.327-1.777-1.648-1.337-3.23-2.954-4.498-4.934-.456-.715-.849-1.458-1.212-2.228-.968.71-1.682 1.74-1.83 2.9-.078.423-.14.855-.187 1.293-.048.433-.076.87-.086 1.307-.02.477-.019.953.006 1.43.062 1.92.599 3.8 1.512 5.456 1.463-.491 2.892-1.147 4.327-1.777-1.648-1.337-3.23-2.954-4.498-4.934-.456-.715-.849-1.458-1.212-2.228-.968.71-1.682 1.74-1.83 2.9"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Feel free to reach out for collaborations or just a friendly hello</p>
              <a href="mailto:hello@nabinghimire.com" className="text-gray-400 hover:text-white">
                hello@nabinghimire.com
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nabin Ghimire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
