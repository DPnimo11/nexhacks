'use client'

import { useState } from 'react'
import { Upload, FileText, X, Loader2, CheckCircle } from 'lucide-react'
import { Job } from '@/types'

interface ResumeFile {
  id: string
  name: string
  email: string
  rawResume: string
}

interface ResumeUploaderProps {
  job: Job
  onComplete: (candidateIds: string[]) => void
}

export default function ResumeUploader({ job, onComplete }: ResumeUploaderProps) {
  const [resumes, setResumes] = useState<ResumeFile[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newResumes: ResumeFile[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const text = await file.text()

      // Try to extract email from resume text
      const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/)
      const email = emailMatch ? emailMatch[0] : `candidate${Date.now()}@example.com`

      newResumes.push({
        id: `${Date.now()}-${i}`,
        name: file.name.replace(/\.[^/.]+$/, ''),
        email,
        rawResume: text
      })
    }

    setResumes([...resumes, ...newResumes])
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const text = e.clipboardData.getData('text')
    if (text.trim()) {
      const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/)
      const email = emailMatch ? emailMatch[0] : `candidate${Date.now()}@example.com`

      setResumes([
        ...resumes,
        {
          id: Date.now().toString(),
          name: `Candidate ${resumes.length + 1}`,
          email,
          rawResume: text
        }
      ])
    }
  }

  const removeResume = (id: string) => {
    setResumes(resumes.filter(r => r.id !== id))
  }

  const processResumes = async () => {
    if (resumes.length === 0) return

    setIsProcessing(true)
    setError(null)
    setProgress({ current: 0, total: resumes.length })

    const processedIds: string[] = []

    for (let i = 0; i < resumes.length; i++) {
      const resume = resumes[i]
      try {
        const response = await fetch('/api/candidates/parse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            rawResume: resume.rawResume,
            name: resume.name,
            email: resume.email,
            job
          })
        })

        if (!response.ok) {
          throw new Error('Failed to parse resume')
        }

        const data = await response.json()
        processedIds.push(data.candidate.id || resume.id)
        setProgress({ current: i + 1, total: resumes.length })
      } catch (err) {
        console.error('Error processing resume:', err)
        setError(`Failed to process ${resume.name}`)
      }
    }

    setIsProcessing(false)

    if (processedIds.length > 0) {
      onComplete(processedIds)
      setResumes([])
    }
  }

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center">
        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
          Upload Resumes or Paste Text
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          AI will automatically parse and summarize each resume
        </p>

        <div className="space-y-3">
          <label className="inline-block">
            <input
              type="file"
              multiple
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
            <span className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg cursor-pointer inline-block transition-colors">
              Choose Files
            </span>
          </label>

          <div className="text-sm text-slate-400">or</div>

          <textarea
            placeholder="Paste resume text here..."
            onPaste={handlePaste}
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[100px]"
          />
        </div>
      </div>

      {/* Resume List */}
      {resumes.length > 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-slate-900 dark:text-white">
              Ready to Process ({resumes.length})
            </h4>
            {!isProcessing && (
              <button
                onClick={processResumes}
                className="px-4 py-2 bg-success hover:bg-success/80 text-white rounded-lg transition-colors text-sm flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Process with AI
              </button>
            )}
          </div>

          <div className="space-y-2">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {resume.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {resume.email}
                    </p>
                  </div>
                </div>
                {!isProcessing && (
                  <button
                    onClick={() => removeResume(resume.id)}
                    className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded"
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Processing State */}
      {isProcessing && (
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin mx-auto mb-3" />
          <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
            Processing with Gemini AI...
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {progress.current} of {progress.total} candidates analyzed
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-danger/10 rounded-xl p-4 text-center">
          <p className="text-sm text-danger">{error}</p>
        </div>
      )}
    </div>
  )
}
