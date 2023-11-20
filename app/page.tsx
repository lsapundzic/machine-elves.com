import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Image width={100} height={300} className="mb-4" src="/public/judge.jpg" alt="An art deco style head statue" />
                <p className="text-lg text-gray-600">Machine Elves</p>
            </div>
        </div>
    )
}
