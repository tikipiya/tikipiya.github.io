import { AnimatedContent } from "../../components/AnimatedContent";

export default async function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AnimatedContent>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</h1>
        <div className="space-y-8">
          <div className="bg-black/10 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">プロフィール</h2>
            <div className="space-y-4">
              <p className="text-xl">
                プログラミング初心者です。よろしくお願いします。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">名前</p>
                  <p>tikisan</p>
                </div>
                <div>
                  <p className="font-medium">職業</p>
                  <p>学生</p>
                </div>
                <div>
                  <p className="font-medium">所在地</p>
                  <p>宮城県</p>
                </div>
                <div>
                  <p className="font-medium">資格</p>
                  <p>英検準2級</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/10 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">スキル</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">プログラミング言語</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript(ちょっとだけ)", "TypeScript(ちょっとだけ)", "C++(ちょっとだけ)"].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">ツール</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                      Visual Studio Code
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">言語能力</h3>
                  <div className="flex flex-wrap gap-2">
                    {["日本語", "英語", "ドイツ語(ちょっとだけ)"].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/10 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">趣味・興味</h2>
              <div className="flex flex-wrap gap-2">
                {["ピアノ", "コーディング", "散歩"].map((hobby) => (
                  <span key={hobby} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </main>
  );
} 