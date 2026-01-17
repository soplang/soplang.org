import React from 'react';
import Link from 'next/link';
import CodeWindow from '@/components/CodeWindow';
import { Icon } from '@iconify/react';
import { platforms, packageManagers } from '@/constants/downloadData';
import { latestVersion } from '@/constants/latestVersion';

export default function DownloadsPage() {
  return (
    <div className="min-h-screen pb-24 overflow-hidden bg-gray-50 dark:bg-transparent transition-colors duration-300">

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
      </div>

      <div className="container-custom pt-12 md:pt-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Icon icon="lucide:download" className="w-4 h-4" />
            <span>Latest Version {latestVersion}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Install <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Soplang</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-muted-foreground leading-relaxed">
            Get started with the first programming language designed for the Somali community.
            Choose your platform below.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative z-10">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`group relative p-8 rounded-2xl bg-white dark:bg-[#1e1e24]/50 backdrop-blur-xl border border-gray-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden`}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm dark:shadow-lg">
                  {platform.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{platform.name}</h3>
                <p className="text-gray-500 dark:text-muted-foreground mb-1">{platform.version} • {platform.type}</p>
                <p className="text-xs text-gray-400 dark:text-muted-foreground/60 mb-8">{platform.size}</p>

                <div className="w-full mt-auto space-y-4">
                  <Link
                    href={platform.downloadUrl}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 group-hover:shadow-blue-500/30"
                  >
                    <Icon icon="lucide:download" className="w-5 h-5" />
                    Download
                  </Link>

                  <div className="text-left text-sm space-y-3 pt-6 border-t border-gray-100 dark:border-white/5">
                    <div className="flex items-start gap-2 text-gray-600 dark:text-muted-foreground">
                      <Icon icon="lucide:cpu" className="w-4 h-4 mt-0.5 text-blue-500 dark:text-blue-400" />
                      <span>{platform.requirements}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-muted-foreground">
                      <Icon icon="lucide:check" className="w-4 h-4 mt-0.5 text-green-500 dark:text-green-400" />
                      <span>{platform.instructions}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Ways to Download */}
        <div className="relative max-w-4xl mx-auto mb-24 pb-24">
          {/* Gradient Border Bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 to-indigo-600 opacity-100"
          />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Other Ways to Download</h2>
            <p className="text-gray-600 dark:text-muted-foreground">Install via command line for quick setup.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packageManagers.map((pm, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all backdrop-blur-sm shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 mb-4">
                  {pm.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{pm.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-muted-foreground">{pm.desc}</p>
                  </div>
                </div>
                <CodeWindow
                  code={pm.command}
                  showLineNumbers={false}
                  title="Terminal"
                  className="shadow-inner bg-gray-50 dark:bg-transparent"
                  language="bash"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Source Code CTA */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-black border border-gray-200 dark:border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-none">
          <div className="absolute top-0 right-0 p-12 bg-blue-100 dark:bg-blue-500/10 rounded-bl-full blur-3xl opacity-50 dark:opacity-100" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Icon icon="lucide:github" className="w-8 h-8" />
                Open Source
              </h2>
              <p className="text-gray-600 dark:text-muted-foreground text-lg">
                Soplang is built for the community. Contributing is simple and encouraged.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/soplang/soplang" target="_blank" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1">
                  View Repository <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                </a>
                <a href="/contribute" className="text-sm text-gray-500 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contribution Guide
                </a>
              </div>
            </div>

            <div className="w-full md:w-[450px]">
              <CodeWindow
                code="git clone https://github.com/soplang/soplang.git"
                showLineNumbers={false}
                title="Terminal"
              />
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}
