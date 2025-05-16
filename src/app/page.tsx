import { AnimatedContent } from "../components/AnimatedContent";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimatedContent>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Welcome to My Profile</h1>
        <div className="space-y-6">
          <p className="text-xl text-gray-200 leading-relaxed">
            プログラミング初心者です。よろしくお願いします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/10 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-semibold mb-4">基本情報</h2>
              <ul className="space-y-2 text-gray-200">
                <li>名前: tikisan</li>
                <li>職業: 学生</li>
                <li>所在地: 宮城県</li>
              </ul>
            </div>
            <div className="p-6 bg-black/10 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-semibold mb-4">スキル</h2>
              <ul className="space-y-2 text-gray-200">
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C++</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </main>
  );
} 