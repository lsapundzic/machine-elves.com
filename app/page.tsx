import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Image width={460} height={460} className="mb-4" src="/images/judge.jpg" alt="An art deco style head statue" />
                <p className="text-lg">Machine Elves</p>
            </div>
        </div>
    )
}
